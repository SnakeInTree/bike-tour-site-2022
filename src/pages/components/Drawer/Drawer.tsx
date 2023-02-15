/**
 * Drawer is responsible for showing off any info - SegmentInfo, Poi Info etc. 
 */
import { useQuery } from "react-query";
import { Oval } from "react-loader-spinner";

import StatsBlock from "./Stats";
import { HeadshotChevron } from "./Chevrons";
import SegmentMenu from "./SegmentMenu";
import Header from "./Header";

import { fetchImages } from "@/apiUtil/cloudflare";
import { Segment } from "@/store/models";
import segmentData from "@/data/segments";
import text from "../../../data/text";
import config from "../../../config/default.json";

const headerCloudflareIds = [config.IMAGES.HEADER_IMG_ID, config.IMAGES.HEADSHOT, ...segmentData.map((segment: Segment) => segment.pois[0].cloudflareId)];

const Drawer = () => {
    
     //onload, get the header images for all segments
    const { isLoading, isError, data } = useQuery({
        queryKey: ["fetchImages", headerCloudflareIds],
        queryFn: () => fetchImages(headerCloudflareIds)
    });

    return (
        <div className="absolute top-0 right-0 z-450 h-full w-7/12 bg-statgreen overflow-scroll">
            {(isLoading || !data) ? 
                <Loader />
                :
                <div>
                    <img className="relative" src={config.HTML_IMG_BUFFER_TAG + data[0]}/>
                    <Header />
                    <StatsBlock />
                    <IntroParagraph headshotString={data[1]} />
                    <SegmentMenu segments={segmentData} imgStrings={data.slice(2)} />
                </div>
            }
        </div>
    );
};

const IntroParagraph = ({ headshotString }: { headshotString:string }) => {
    return (
        <div className="flex flex-row justify-center w-full py-10 bg-tan md:-translate-y-0 lg:-translate-y-48">
            <div className="flex flex-col w-10/12">
                <div className="flex flex-row mb-10">
                    <p className="pl-4 pr-12 w-3/4 text-2xl font-playfair font-semibold border-l-statgreenborder border-l-6">{text.intro.para1}</p>
                    <HeadshotChevron headshotString={headshotString} />
                </div>
                <p className="text-lg font-playfair mb-10">{text.intro.para2}</p>
                <h1 className="text-3xl font-semibold mb-10">SEGMENTS</h1>
                <p className="text-lg font-playfair">{text.intro.para3}</p>

            </div>
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