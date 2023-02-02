/**
 * Drawer is responsible for showing off any info - SegmentInfo, Poi Info etc. 
 */
import { useState } from "react";
import { IconContext } from "react-icons";
import {AiOutlineArrowLeft} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store/store";
import { toggleDrawerDisplay } from "@/store/reducers/uiDisplay";
import segmentData from "@/data/gpx";
import config from "../../../config/default.json";
import { updateActiveSegment } from "@/store/reducers/segmentList";

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
            <div className="fixed flex flex-row justify-start w-full py-5 pl-4 mb-5 text-5xl font-cursive font-bold shadow-md">
                <BackButton activeSegmentId={activeSegmentId} />
                <span className="ml-4">{headerText}</span>
            </div>
        </div>
    );
};

const BackButton = ({ activeSegmentId } :{ activeSegmentId: number }) => {
    
    const dispatch = useDispatch();
    const size = {size: "3rem"};

    //if no active segment is selected, close drawer, otherwise revert showing to segment list
    const handleClick = () => {
        if (activeSegmentId === -1) dispatch(toggleDrawerDisplay(false));
        else dispatch(updateActiveSegment(-1));
    };

    return (
        <IconContext.Provider value={size}>
            <AiOutlineArrowLeft className="cursor-pointer" onClick={handleClick} />
        </IconContext.Provider>
    );
};

export default Drawer;