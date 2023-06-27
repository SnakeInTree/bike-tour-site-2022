import {useDispatch} from "react-redux";
import { IconContext } from "react-icons";
import { CgArrowLongRightR, CgArrowLongLeftR } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import segmentData from "@/data/segments";
import { updateActiveSegment } from "@/store/reducers/segmentList";

const Footer = ( {activeSegmentId}: {activeSegmentId: number} ) => {

    const dispatch = useDispatch();
    const prevSegment = activeSegmentId > 0 ? segmentData[activeSegmentId - 1] : null;
    const nextSegment = activeSegmentId < 11 ? segmentData[activeSegmentId + 1] : null;
    
    const advanceSegmentId = () => activeSegmentId < 11 ? dispatch(updateActiveSegment(activeSegmentId + 1)) : null;
    const regressSegmentId = () => activeSegmentId > -1 ? dispatch(updateActiveSegment(activeSegmentId - 1)) : null;

    return (
        <IconContext.Provider value={{size: "2.5em"}}>
            <div className="flex flex-row w-full justify-between text-2xl font-semibold font-bobs py-4 bg-info-section bg-top bg-repeat-y">   
                {prevSegment ? 
                    (
                        
                        <div 
                            className="w-1/2 flex flex-row justify-start ml-8 items-center cursor-pointer hover:underline"
                            onClick={regressSegmentId}
                        >
                            <CgArrowLongLeftR />
                            <p className="text-4xl mx-8">{prevSegment.name.toUpperCase()}</p>
                            <prevSegment.icon />
                        </div>
                    )
                    :
                    activeSegmentId === -1 ? 
                            (
                                <div className="w-1/2 flex flex-row justify-start ml-8 items-center">
                                    <p className="text-4xl mx-8">THE ADVENTURE BEGINS:</p>
                                </div>
                            )
                            :
                            (
                                <div 
                                    className="w-1/2 flex flex-row justify-start items-center ml-8 cursor-pointer hover:underline"
                                    onClick={regressSegmentId}
                                >
                                    <CgArrowLongLeftR />
                                    <p className="text-4xl mx-8">HOME</p>
                                    <FaHome />
                                </div>
                            )            
                }
                {nextSegment ? 
                    (
                        <div 
                            className="w-1/2 flex flex-row justify-end items-center mr-8 cursor-pointer hover:underline"
                            onClick={advanceSegmentId}
                        >
                            <nextSegment.icon />
                            <p className="mx-8 text-4xl ">{nextSegment.name.toUpperCase()}</p>
                            <CgArrowLongRightR />
                        </div>
                    ) 
                    :
                    (
                        <div 
                            className="w-1/2 flex flex-row justify-end mr-8 items-center text-4xl"
                        >
                            <p>AND THAT'S A WRAP :'-)</p>
                        </div>
                    )
                }
            </div>
        </IconContext.Provider>
    );
};

export default Footer;
