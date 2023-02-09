/**
 * Segment Select List displays a List of Buttons allowing user to select a Segment
 */
import { useDispatch } from "react-redux";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";

import segmentData from "@/data/segments";
import { Segment } from "@/store/models";
import config from "../../../config/default.json";
import { updateActiveSegment } from "@/store/reducers/segmentList";


const SegmentSelectList = ({ imageData } : { imageData:string[] }) => {
    return (
        <>
            {segmentData.map((segment: Segment, index: number) => 
                <SegmentSelectButton key={segment.name} segment={segment} imageString={imageData[index]} />
            )}
        </>
    );
};

const SegmentSelectButton = ({ segment, imageString } : { segment: Segment, imageString: string} ) => {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(updateActiveSegment(segment.segmentId));

    return (
        <div 
            className="flex flex-row justify-between py-4 transition-colors ease-in-out duration-300 cursor-pointer hover:bg-red-200"
            onClick={handleClick}
        >
             <div className="flex flex-col ml-4 font-cursive justify-evenly align-middle">
                <p className="text-4xl mb-2">{segment.name}</p>
                <p className="text-2xl mb-2">{segment.stats.totalDist} miles traversed</p>
                <p className="text-2xl">{segment.stats.elevGain} ft. <BsArrowUpRight /> {segment.stats.elevLost} ft. <BsArrowDownRight /> </p>
            </div>
            <img 
                src={config.HTML_IMG_BUFFER_TAG + imageString} 
                className="min-w-40 min-h-full"
            />
        </div>
    );
};

export default SegmentSelectList;