import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {LeafletEventHandlerFnMap} from "leaflet";
import { Polyline, useMap } from "react-leaflet";

import { RootState } from "@/store/store";
import { Segment } from "@/store/models";
import { updateActiveSegment } from "../../../store/reducers/segmentList";

import config from "../../../config/default.json";

const PathSegment = ({ segment } : { segment: Segment }) => {
    
    const map = useMap();
    const dispatch = useDispatch();
    const activeSegmentId = useSelector((state:RootState) => state.segmentList.activeSegmentId);
    const isActiveSegment: boolean = segment.segmentId === activeSegmentId;
    const [prevActiveSegment, setPrevActiveSegment] = useState<number>(activeSegmentId);
    const [segmentOpacity, setSegmentOpacity] = useState<number>(config.SEGMENT_SETTINGS.DEFAULT_OPACITY);

    //if activeSegmentId changes, update opacity so that only active segment is solid 
    if (prevActiveSegment !== activeSegmentId) {
        setPrevActiveSegment(activeSegmentId);
        if (isActiveSegment) {
            setSegmentOpacity(config.SEGMENT_SETTINGS.ACTIVE_OPACITY);
            map.fitBounds(segment.zoomCoords);
        }
        else setSegmentOpacity(config.SEGMENT_SETTINGS.DEFAULT_OPACITY);
    }

    const eventHandlers = {
        mouseover: () => (!isActiveSegment) ? setSegmentOpacity(config.SEGMENT_SETTINGS.ACTIVE_OPACITY) : null,
        mouseout: () => (!isActiveSegment) ? setSegmentOpacity(config.SEGMENT_SETTINGS.DEFAULT_OPACITY) : null,
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
        <Polyline positions={segment.gpx} pathOptions={polyLineOptions} eventHandlers={eventHandlers} />
    );
};

export default PathSegment;