/**
 * 
 * Menu is 4 rows, 3 squares long each of 
 * <img>
 * <title> 
 * <stats, dates, etc>
 * 
 * Show desc on hover && zoom to spot on map
 */
import { useDispatch } from "react-redux";
import { Segment } from "@/store/models";
import config from "@/config/default.json";
import { updateActiveSegment } from "@/store/reducers/segmentList";

const SegmentMenu = ({segments, imgStrings}: {segments: Segment[], imgStrings: string[]}) => {

    return (    
        <div className="flex flex-wrap md:-translate-y-0 lg:-translate-y-48">
            {segments.map((segment: Segment, index: number) => <SegmentSquare key={segment.name} segment={segment} imgString={imgStrings[index]} />)}
        </div>
    );
};

const SegmentSquare = ({segment, imgString}: {segment: Segment, imgString: string}) => {

    const dispatch = useDispatch();
    const handleClick = () => dispatch(updateActiveSegment(segment.segmentId));
    return (
        <div 
            className="nil:w-full nil:h-full sm:w-full sm:h-full md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3 flex flex-col items-center justify-around font-mapheader cursor-pointer bg-tan transition-colors ease-in-out duration-300 hover:bg-statgreenborder"
            onClick={handleClick}
        >
            <img className="h-52 w-full" src={config.HTML_IMG_BUFFER_TAG + imgString}/>
            <h1 className="h-1/5 font-semibold text-xl text-center py-4">{segment.name.toUpperCase()}</h1>
        </div>
    );
};

export default SegmentMenu;