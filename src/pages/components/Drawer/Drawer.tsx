/**
 * Drawer is responsible for showing off any info - SegmentInfo, Poi Info etc. 
 */
import { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { Oval } from "react-loader-spinner";

import BackButton from "./BackButton";
import SegmentSelectList from "./SegmentSelectList";
import SegmentInfoPanel from "./SegmentInfoPanel";

import { fetchImages } from "@/apiUtil/cloudflare";
import { RootState } from "@/store/store";
import { Segment } from "@/store/models";
import segmentData from "@/data";
import config from "../../../config/default.json";

const headerCloudflareIds = segmentData.map((segment: Segment) => segment.pois[0].cloudflareId);

const Drawer = () => {
    
    const activeSegmentId = useSelector((state:RootState) => state.segmentList.activeSegmentId);
    const [headerText, setHeaderText] = useState<string>(activeSegmentId > -1 ? segmentData[activeSegmentId].name : config.DEFAULT_TEXT.drawerHeaderText);    
    const [prevActiveSegment, setPrevActiveSegment] = useState<number>(activeSegmentId);

    //handle activeSegmentId change
    if (prevActiveSegment !== activeSegmentId) {
        setPrevActiveSegment(activeSegmentId);
        if (activeSegmentId === -1) setHeaderText(config.DEFAULT_TEXT.drawerHeaderText);
        else setHeaderText(segmentData[activeSegmentId].name);
    }

     //onload, get the header images for all segments
    const { isLoading, isError, data } = useQuery({
        queryKey: ["fetchImages", headerCloudflareIds],
        queryFn: () => fetchImages(headerCloudflareIds)
    });

    return (
        <div className="absolute top-0 right-0 z-450 h-full w-2/5 bg-red-100">
            <div className="fixed h-12 flex flex-row justify-start w-full py-5 pl-4 mb-5 text-4xl font-cursive font-bold shadow-md">
                <BackButton activeSegmentId={activeSegmentId} />
                <span className="ml-4">{headerText}</span>
            </div>
            {(isLoading || !data) ? 
                (<div className="fixed top-1/3 h-1/2 w-inherit flex flex-row justify-center overflow-x-hidden overflow-y-scroll">
                    <div className="h-full flex flex-col justify-center align-middle ">
                        <Oval 
                            height={80}
                            width={80}
                            color="#4fa94d"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#4fa94d"
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                        />
                    </div>
                </div>)
            : 
                (
                    <div className="fixed top-22 h-102 flex flex-col overflow-y-scroll">
                        {(activeSegmentId === -1) ? 
                            (<SegmentSelectList imageData={data} />) :
                            (<SegmentInfoPanel segment={segmentData[activeSegmentId]} imageString={data[activeSegmentId]} />)}
                    </div>
                )
            }
        </div>
    );
};

export default Drawer;