import { IconContext } from "react-icons";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveSegment, updateHoverSegment } from "@/store/reducers/segmentList";
import { Segment } from "@/store/models";
import { RootState } from "@/store/store";


const Breadcrumb = ({segment, top}: {segment: Segment, top:boolean}) => {
    const dispatch = useDispatch();
    const hoverSegmentId = useSelector((state:RootState) => state.segmentList.hoverSegmentId);
    const handleClick = () => dispatch(updateActiveSegment(segment.segmentId));
    const handleMouseEnter = () => dispatch(updateHoverSegment(segment.segmentId));
    const handleMouseLeave = () => dispatch(updateHoverSegment(-1));
    
    const hoverStyle = segment.segmentId === hoverSegmentId ? "text-segmentHoverBg underline" : "";
    const labelStyle = "2xl:text-3xl xl:text-2xl md:text-xl";

    return (
        <li 
            className={`flex flex-col items-center h-44 w-temp cursor-pointer hover:text-segmentHoverBg hover:underline decoration-2 transition ease-in-out ${hoverStyle}`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={"h-1/4 text-center " + (segment.segmentId === 0 ? "pl-8" : "")}>{top ? <span className={labelStyle}>{segment.name}</span> : null}</div>
            <div className={"h-1/2 flex items-center"}><BsFillRecordCircleFill /></div>
            <div className={"h-1/4 text-center " + (segment.segmentId === 11 ? "pr-8" : "")}>{top ? null : <span className={labelStyle}>{segment.name}</span>}</div>
        </li>
    );
};

const BreadcrumbMenu = ({segments}: {segments: Segment[]}) => {
    return (    
        <div className="flex flex-row w-full h-80 justify-center bg-info-section bg-top bg-repeat-y ">
            <IconContext.Provider value={{ size: "1.15em"}}>
                <div className="w-full h-full bg-no-repeat bg-center bg-adjust bg-tracks">
                        <ul className="h-full flex flex-row justify-around font-bobs items-center">
                            {segments.map((segmentPiece: Segment, index: number) => {
                                return (
                                    <Breadcrumb key={`breadcrumb-item-${index}`} segment={segmentPiece} top={index % 2 === 0} />                              
                                );
                            })}
                        </ul>
                </div>
            </IconContext.Provider>
        </div>
    );
};

export default BreadcrumbMenu;