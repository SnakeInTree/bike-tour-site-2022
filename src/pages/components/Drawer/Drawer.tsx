/**
 * Drawer is responsible for showing off any info - SegmentInfo, Poi Info etc. 
 */
import { useQuery } from "react-query";
import { Oval } from "react-loader-spinner";

import StatsBlock from "./Stats";

import { fetchImages } from "@/apiUtil/cloudflare";
import { Segment } from "@/store/models";
import segmentData from "@/data/segments";
import config from "../../../config/default.json";

const headerCloudflareIds = [config.HEADER_IMG_ID, ...segmentData.map((segment: Segment) => segment.pois[0].cloudflareId)];

const Drawer = () => {
    
     //onload, get the header images for all segments
    const { isLoading, isError, data } = useQuery({
        queryKey: ["fetchImages", headerCloudflareIds],
        queryFn: () => fetchImages(headerCloudflareIds)
    });

    return (
        <div className="absolute top-0 right-0 z-450 h-full w-1/2 bg-tan overflow-scroll">
            {(isLoading || !data) ? 
                <Loader />
                :
                <div>
                    <img src={config.HTML_IMG_BUFFER_TAG + data[0]} />
                    <Header />
                    <StatsBlock />
                </div>
            }
        </div>
    );
};

const Header = () => {
    return (
        <div className="flex flex-col text-7xl font-mapheader font-medium text-center text-slate-50 -translate-y-72 pl-80">
            <span>BIKE</span>
            <span>TOUR</span>
            <span>2022</span>
        </div>
    );
};

const Loader = () => {
    return (
        <div className="fixed top-1/3 h-1/2 w-inherit flex flex-row justify-center overflow-x-hidden overflow-y-scroll">
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
        </div>
    );
};

export default Drawer;