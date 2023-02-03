/**
 * SegmentInfoPanel displays info, elevation graph etc for a single segment
 */
import { Segment } from "@/store/models";
import config from "../../../config/default.json";

const SegmentInfoPanel = ({ segment, imageString } : { segment: Segment, imageString: string }) => {

    return (
        <div className="flex flex-col relative text-center">
            <img className="max-h-full max-w-full" src={config.HTML_IMG_BUFFER_TAG + imageString} />
            <span className="self-center mt-6 w-11/12 text-base text-center italic">{segment.pois[0].desc}</span>
        </div>
    );
};

export default SegmentInfoPanel;