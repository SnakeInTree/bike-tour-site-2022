import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {LeafletEventHandlerFnMap, LatLng} from "leaflet";
import { Polyline, Tooltip, useMap } from "react-leaflet";

import Pois from "./Pois";
import { SegmentBoundaryMarkers } from "../common/Icons";

import { RootState } from "@/store/store";
import { Segment } from "@/store/models";
import { updateActiveSegment, updateHoverSegment } from "../../store/reducers/segmentList";

import config from "@/config/default.json";

const PathSegment = ({ segment } : { segment: Segment }) => {
    
    const map = useMap();
    const dispatch = useDispatch();
    const activeSegmentId = useSelector((state:RootState) => state.segmentList.activeSegmentId);
    const activePoiId = useSelector((state:RootState) => state.segmentList.activePoiId);
    const hoverSegmentId = useSelector((state:RootState) => state.segmentList.hoverSegmentId);
    
    const isActiveSegment: boolean = segment.segmentId === activeSegmentId;
    const isHoverSegment:boolean = segment.segmentId === hoverSegmentId;
    
    const [prevActiveSegment, setPrevActiveSegment] = useState<number>(activeSegmentId);
    const [prevHoverSegment, setPrevHoverSegment] = useState<number>(hoverSegmentId);
    const [segmentOpacity, setSegmentOpacity] = useState<number>(config.SEGMENT_SETTINGS.ACTIVE_OPACITY);

    const tooltipText = `(S${segment.segmentId + 1}) : ${segment.name}`;

    //if activeSegmentId changes, update opacity so that only active segment is solid 
    if (prevActiveSegment !== activeSegmentId) {
        setPrevActiveSegment(activeSegmentId);
        if (isActiveSegment) {
            setSegmentOpacity(config.SEGMENT_SETTINGS.ACTIVE_OPACITY);
            map.flyTo(segment.zoomCoords, segment.zoomLevel);
        }
        else setSegmentOpacity(config.SEGMENT_SETTINGS.ACTIVE_OPACITY);
    }

    //if hoverSegmentId changes, ensure only hover segment has solid opacity
    if (prevHoverSegment !== hoverSegmentId) {
        setPrevHoverSegment(hoverSegmentId);
        if (isHoverSegment || (hoverSegmentId === -1 && activeSegmentId === -1)) {
            setSegmentOpacity(config.SEGMENT_SETTINGS.ACTIVE_OPACITY);
        }
        else if (!isActiveSegment) setSegmentOpacity(config.SEGMENT_SETTINGS.INACTIVE_OPACITY);
    }

    useEffect(() => {
        if (isActiveSegment && activePoiId !== 0 && segment.pois[activePoiId]) {
            const activePoiPosition = segment.pois[activePoiId].position as LatLng;
            map.flyTo(activePoiPosition, 10);
        }
    }, [map, segment.pois, activePoiId, isActiveSegment]);

    const eventHandlers = {
        mouseover: () => dispatch(updateHoverSegment(segment.segmentId)),
        mouseout: () => dispatch(updateHoverSegment(-1)),
        click: () => {
            if (!isActiveSegment) dispatch(updateActiveSegment(segment.segmentId));
        }    
    } as LeafletEventHandlerFnMap;

    const polyLineOptions = {
        weight: config.SEGMENT_SETTINGS.DEFAULT_WIDTH,
        opacity: segmentOpacity, 
        color: "brown"
    };

    return (
        <>
            <Polyline positions={segment.gpx} pathOptions={polyLineOptions} eventHandlers={eventHandlers} >
                {!isActiveSegment && <Tooltip sticky>{tooltipText}</Tooltip>}
                {isHoverSegment ? <Tooltip sticky permanent>{tooltipText}</Tooltip> : null}
            </Polyline>
            {isActiveSegment ? <Pois pois={segment.pois} /> : null}
            {isActiveSegment ? <SegmentBoundaryMarkers startLatLng={segment.gpx[0]} endLatLng={segment.gpx.slice(segment.gpx.length - 1)[0]} /> : null}
        </>
    );
};

export default PathSegment;