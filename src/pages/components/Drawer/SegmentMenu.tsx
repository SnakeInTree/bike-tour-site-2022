/**
 * 
 * Menu is 4 rows, 3 squares long each of 
 * <img>
 * <title> 
 * <stats, dates, etc>
 * 
 * Show desc on hover && zoom to spot on map
 */
import { Segment } from "@/store/models";
import config from "../../../config/default.json";

const SegmentMenu = ({segments, imgStrings}: {segments: Segment[], imgStrings: string[]}) => {

    return (    
        <div className="flex flex-col -translate-y-48">
            <div className="flex flex-row">
                {segments.slice(0, 3).map((segment: Segment, index: number) => <SegmentSquare key={segment.name} segment={segment} imgString={imgStrings[index]} />)}
            </div>
            <div className="flex flex-row">
                {segments.slice(3, 6).map((segment: Segment, index: number) => <SegmentSquare key={segment.name} segment={segment} imgString={imgStrings[index+3]} />)}
            </div>
            <div className="flex flex-row">
                {segments.slice(6, 9).map((segment: Segment, index: number) => <SegmentSquare key={segment.name} segment={segment} imgString={imgStrings[index+6]} />)}
            </div>
            <div className="flex flex-row">
                {segments.slice(9, 12).map((segment: Segment, index: number) => <SegmentSquare key={segment.name} segment={segment} imgString={imgStrings[index+9]} />)}
            </div>
        </div>
    );
};

const SegmentSquare = ({segment, imgString}: {segment: Segment, imgString: string}) => {

    return (
        <div className="w-1/3 h-1/3 flex flex-col items-center justify-around font-mapheader cursor-pointer bg-tan">
            <img className="h-52 w-full" src={config.HTML_IMG_BUFFER_TAG + imgString}/>
            <h1 className="h-1/5 font-semibold text-xl text-center py-4">{segment.name.toUpperCase()}</h1>
        </div>
    );
};

export default SegmentMenu;