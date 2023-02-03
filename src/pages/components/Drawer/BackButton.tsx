import { useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { updateActiveSegment } from "@/store/reducers/segmentList";
import { toggleDrawerDisplay } from "@/store/reducers/uiDisplay";

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

export default BackButton;