/**
 * Drawer is responsible for showing off any info - SegmentInfo, Poi Info etc. 
 */
import { useState } from "react";
import { useSelector } from "react-redux";

import BackButton from "./BackButton";
import SegmentSelectList from "./SegmentSelectList";

import { RootState } from "@/store/store";
import segmentData from "@/data";
import config from "../../../config/default.json";


const Drawer = () => {
    
    const activeSegmentId = useSelector((state:RootState) => state.segmentList.activeSegmentId);
    const [headerText, setHeaderText] = useState<string>(config.DEFAULT_TEXT.drawerHeaderText);    
    const [prevActiveSegment, setPrevActiveSegment] = useState<number>(activeSegmentId);

    //handle activeSegmentId change
    if (prevActiveSegment !== activeSegmentId && activeSegmentId >= 0 && activeSegmentId < segmentData.length) {
        setPrevActiveSegment(activeSegmentId);
        setHeaderText(segmentData[activeSegmentId].name);
    }

    return (
        <div className="absolute top-0 right-0 z-450 h-full w-2/5 bg-red-100">
            <div className="fixed h-24 flex flex-row justify-start w-full py-5 pl-4 mb-5 text-4xl font-cursive font-bold shadow-md">
                <BackButton activeSegmentId={activeSegmentId} />
                <span className="ml-4">{headerText}</span>
            </div>
            <SegmentSelectList />
        </div>
    );
};

export default Drawer;