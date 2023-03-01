import {useDispatch} from "react-redux";
import { IconContext } from "react-icons";
import { CgArrowLongRightR, CgArrowLongLeftR } from "react-icons/cg";
import segmentData from "@/data/segments";
import { updateActiveSegment } from "@/store/reducers/segmentList";

const Footer = ( {activeSegmentId}: {activeSegmentId: number} ) => {

    const dispatch = useDispatch();
    const prevSegment = activeSegmentId > 0 ? segmentData[activeSegmentId - 1] : null;
    const nextSegment = activeSegmentId < 11 ? segmentData[activeSegmentId + 1] : null;
    
    const advanceSegmentId = () => activeSegmentId < 11 ? dispatch(updateActiveSegment(activeSegmentId + 1)) : null;
    const regressSegmentId = () => activeSegmentId > 0 ? dispatch(updateActiveSegment(activeSegmentId - 1)) : null;

    return (
        <IconContext.Provider value={{size: "3rem"}}>
            <div className="flex flex-row h-1/6 w-full text-2xl font-semibold font-mapheader cursor-pointer lg:-translate-y-20 ">   
                <div 
                    className="w-1/2 flex flex-row justify-center items-center transition-all ease-in-out duration-300 hover:underline"
                    onClick={regressSegmentId}
                >
                    {prevSegment ? 
                        (
                            <>
                                <CgArrowLongLeftR />
                                <p className="mx-8">{prevSegment.name.toUpperCase()}</p>
                                <prevSegment.icon />
                            </>
                        ) : null
                    }
                </div>
                <div 
                    className="w-1/2 flex flex-row justify-center items-center transition-all ease-in-out duration-300 hover:underline"
                    onClick={advanceSegmentId}
                >
                    {nextSegment ? 
                        (
                            <>
                                <nextSegment.icon />
                                <p className="mx-8">{nextSegment.name.toUpperCase()}</p>
                                <CgArrowLongRightR />
                            </>
                        ) : null
                    }
                </div>
            </div>
        </IconContext.Provider>
    );
};

export default Footer;
