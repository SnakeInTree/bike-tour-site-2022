/**
 * SegmentInfoPanel displays info, elevation graph etc for a single segment
 */
import { useDispatch } from "react-redux";
import { Segment } from "@/store/models";
import { toggleCarouselDisplay } from "@/store/reducers/uiDisplay";
import config from "../../../config/default.json";

const SegmentInfoPanel = ({ segment, imageString } : { segment: Segment, imageString: string }) => {

    const dispatch = useDispatch();
    const handleClick = () => dispatch(toggleCarouselDisplay(true));

    return (
        <div className="flex flex-col relative text-center">
            <img className="max-h-full max-w-full cursor-pointer" src={config.HTML_IMG_BUFFER_TAG + imageString} onClick={handleClick} />
            <span className="self-center mt-6 w-11/12 text-base text-center italic">{segment.pois[0].desc}</span>
        </div>
    );
};

export default SegmentInfoPanel;