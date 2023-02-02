import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Polyline } from "react-leaflet";

import { RootState } from "@/store/store";
import { Segment } from "@/store/models";
import { updateActiveSegment } from "../../../store/reducers/segmentList";

import config from "../../../config/default.json";

const PathSegment = ({ segment } : { segment: Segment }) => {
    
    const dispatch = useDispatch();
    const activeSegmentId: number = useSelector((state:RootState) => state.segmentList.activeSegmentId);
    const isActiveSegment = segment.segmentId === activeSegmentId;
    
    const [segmentOpacity, setSegmentOpacity] = useState<number>(config.SEGMENT_SETTINGS.DEFAULT_OPACITY);

    useEffect(() => {
        if (!isActiveSegment) setSegmentOpacity(config.SEGMENT_SETTINGS.DEFAULT_OPACITY);
    }, [isActiveSegment, activeSegmentId]);

    const eventHandlers = {
        mouseover: () => (!isActiveSegment) ? setSegmentOpacity(config.SEGMENT_SETTINGS.ACTIVE_OPACITY) : null,
        mouseout: () => (!isActiveSegment) ? setSegmentOpacity(config.SEGMENT_SETTINGS.DEFAULT_OPACITY) : null,
        click: () => {
            if (!isActiveSegment) dispatch(updateActiveSegment(segment.segmentId));
        }    
    };

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