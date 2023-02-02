/**
 * Segment Select List displays a List of Buttons allowing user to select a Segment
 */
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import {Oval} from "react-loader-spinner";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";

import { fetchImages } from "@/apiUtil/cloudflare";
import segmentData from "@/data";
import { Segment } from "@/store/models";
import config from "../../../config/default.json";
import { updateActiveSegment } from "@/store/reducers/segmentList";

const headerCloudflareIds = segmentData.map((segment: Segment) => segment.pois[0].cloudflareId);

const SegmentSelectList = () => {

    //onload, get the header images for all segments
    const { isLoading, isError, data } = useQuery({
        queryKey: ["fetchImages", headerCloudflareIds],
        queryFn: () => fetchImages(headerCloudflareIds)
    });

    return (
        <>
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
            <ButtonList imageData={data} />
        }
        </>
    );
};

const ButtonList = ({ imageData }: { imageData: string[]}) => {
    return (
        <div className="fixed top-24 h-102 flex flex-col overflow-y-scroll">
            {segmentData.map((segment: Segment, index: number) => 
                <SegmentSelectButton key={segment.name} segment={segment} imageString={imageData[index]} />
            )}
        </div>
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