/**
 * Drawer is responsible for showing off any info - SegmentInfo, Poi Info etc. 
 */
import { useState, useRef } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import DefaultContent from "./DefaultContent";
import SegmentInfo from "./SegmentInfo";

const Drawer = () => {
    const activeSegmentId = useSelector((state:RootState) => state.segmentList.activeSegmentId);
    const [prevActiveSegmentId, setPrevActiveSegmentId] = useState<number>(activeSegmentId);
    const topOfDrawerRef = useRef<null | HTMLImageElement>(null);

    if (prevActiveSegmentId !== activeSegmentId) {
        setPrevActiveSegmentId(activeSegmentId);
        if (topOfDrawerRef && topOfDrawerRef.current) topOfDrawerRef.current.scrollIntoView();
    }


    return (
        <div className="absolute top-0 right-0 z-450 h-full w-7/12 bg-statgreen overflow-y-scroll overflow-x-hidden drop-shadow-left-md">
            {activeSegmentId === -1 ? 
                <DefaultContent /> :
                <SegmentInfo activeSegmentId={activeSegmentId} topOfDrawerRef={topOfDrawerRef} />
            }
        </div>
    );
};

export default Drawer;