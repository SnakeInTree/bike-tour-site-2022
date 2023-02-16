import { useQuery } from "react-query";

import Header from "./Header";
import StatsBlock from "./Stats";
import SegmentMenu from "./SegmentMenu";
import Loader from "./Loading";

import segmentData from "@/data/segments";
import text from "@/data/text";
import { Segment } from "@/store/models";
import { fetchImages } from "@/apiUtil/cloudflare";
import config from "@/config/default.json";
const headerCloudflareIds = [config.IMAGES.HEADER_IMG_ID, config.IMAGES.HEADSHOT, ...segmentData.map((segment: Segment) => segment.pois[0].cloudflareId)];

const DefaultContent = () => {
    
    const { isLoading, isError, data } = useQuery({
        queryKey: ["fetchImages", headerCloudflareIds],
        queryFn: () => fetchImages(headerCloudflareIds)
    });
    return (
        <>
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
        </>
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

const HeadshotChevron = ({ headshotString }: { headshotString:string }) => {
    return (
        <div className="flex flex-col justify-center align-middle text-center w-1/4 bg-tan p-4">
            <span className="text-statblack font-bold border-b-4 border-b-contributeborder pb-1">CONTRIBUTED BY</span>
            <img className="max-w-xxs max-h-40 my-4" src={config.HTML_IMG_BUFFER_TAG + headshotString} />
            <span className="text-statblack font-bold text-xl">KEES VANDENBERG</span>
        </div>
    );
};

export default DefaultContent;