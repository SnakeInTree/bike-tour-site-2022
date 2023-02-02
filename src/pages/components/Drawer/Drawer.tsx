/**
 * Drawer is responsible for showing off any info - SegmentInfo, Poi Info etc. 
 */
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import {AiOutlineArrowLeft} from "react-icons/ai";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import { Segment } from "@/store/models";
import config from "../../../config/default.json";

const Drawer = ({ segmentData } : { segmentData: Segment[] }) => {
    
    const [headerText, setHeaderText] = useState<string>(config.DEFAULT_TEXT.drawerHeaderText);    
    const activeSegmentId = useSelector((state:RootState) => state.segmentList.activeSegmentId);

    useEffect(() => {
        if (activeSegmentId > 0 && activeSegmentId < segmentData.length) {
            const activeSegment = segmentData[activeSegmentId];
            setHeaderText(activeSegment.name);
        }
    }, [segmentData, activeSegmentId]);

    return (
        <div className="absolute top-0 right-0 z-450 h-full w-2/5 bg-red-100">
            <div className="fixed flex flex-row justify-start w-full py-5 pl-4 mb-5 text-5xl font-cursive font-bold shadow-md">
                <BackButton />
                <span className="ml-4">{headerText}</span>
            </div>
        </div>
    );
};

const BackButton = () => {
    const size = {size: "3rem"};
    return (
        <IconContext.Provider value={size}>
            <AiOutlineArrowLeft className="cursor-pointer"/>
        </IconContext.Provider>
    );
};

export default Drawer;