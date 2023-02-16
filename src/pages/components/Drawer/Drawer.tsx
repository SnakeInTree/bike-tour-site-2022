/**
 * Drawer is responsible for showing off any info - SegmentInfo, Poi Info etc. 
 */
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

import DefaultContent from "./DefaultContent";
import SegmentInfo from "./SegmentInfo";

const Drawer = () => {
    const dispatch = useDispatch();
    const activeSegmentId = useSelector((state:RootState) => state.segmentList.activeSegmentId);

    return (
        <div className="absolute top-0 right-0 z-450 h-full w-7/12 bg-statgreen overflow-y-scroll overflow-x-hidden">
            {activeSegmentId === -1 ? 
                <DefaultContent /> :
                <SegmentInfo activeSegmentId={activeSegmentId} />
            }
        </div>
    );
};

export default Drawer;