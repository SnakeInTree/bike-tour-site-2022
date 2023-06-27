import { useQuery } from "react-query";
import Image from "next/image";

import Header from "./Header";
import StatsBlock from "./Stats";
import SegmentMenu from "./SegmentMenu";
import Loader from "./Loading";
import InfoPanel from "./InfoPanel";
import Footer from "./Footer";

import segmentData from "@/data/segments";
import { introStats } from "@/data/stats";
import { text } from "@/data/text";
import { HomeScreenSectionContent } from "@/data/segmentText";
import { Segment } from "@/store/models";
import { fetchImages } from "@/apiUtil/cloudflare";
import config from "@/config/default.json";

import signature from "../../../public/signature.png";
import BreadcrumbMenu from "./BreadcrumbMenu";
const headerCloudflareIds = [config.IMAGES.HEADER_IMG_ID, config.IMAGES.HEADSHOT, ...segmentData.map((segment: Segment) => segment.pois[segment.headerImageIndex].cloudflareId)];

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
                    <Header headerImage={data[0]} />
                    <StatsBlock statList={introStats} />
                    <IntroParagraph headshotString={data[1]} />
                    <BreadcrumbMenu segments={segmentData} />
                    <InfoPanel infoPanelText={HomeScreenSectionContent} />
                    <Footer activeSegmentId={-1} />
                </div>
            }   
        </>
    );
};

const IntroParagraph = ({ headshotString }: { headshotString:string }) => {
    return (
        <div className="flex flex-row justify-center w-full py-10 bg-tan drop-shadow-top-md">
            <div className="flex flex-col w-10/12">
                <div className="flex flex-row mb-10 items-center">
                    <p className="pl-4 pr-12 w-3/4 text-2xl font-playfair font-semibold border-l-statgreenborder border-l-6">{text.intro.para1}</p>
                    <HeadshotChevron headshotString={headshotString} />
                </div>
                <p className="text-lg font-playfair mb-10">{text.intro.para2}</p>
                <p className="text-lg font-playfair mb-10">{text.intro.para3}</p>
                <p className="text-lg font-playfair mb-10">{text.intro.para4}</p>
                <p className="text-lg font-playfair mb-10">{text.intro.para5}</p>
                <p className="text-lg font-playfair mb-10">{text.intro.post}</p>
                <div className="mb-24">
                    <Image
                        src={signature}
                        alt="Kees Signature"
                        placeholder="blur"
                        width={150}
                        height={150}
                    />
                </div>
            </div>
            <TitleChevron />
        </div>
    );
};

const HeadshotChevron = ({ headshotString }: { headshotString:string }) => {
    return (
        <div className="flex flex-col justify-center align-middle text-center w-1/4 bg-tan p-4 font-bobs">
            <span className="text-statblack text-3xl font-bold border-b-4 border-b-contributeborder pb-1">CONTRIBUTED BY</span>
            <img className="max-w-xxs max-h-40 my-4 drop-shadow-xl self-center" src={config.HTML_IMG_BUFFER_TAG + headshotString} />
            <span className="text-statblack font-bold font-bobs text-3xl ">KEES VANDENBERG</span>
        </div>
    );
};

const TitleChevron = () => {
    const before = "before:content-[''] before:border-y-22 before:border-l-22 before:border-l-statgreen before:border-y-transparent before:absolute before:-right-5.5 before:bottom-0 before:w-0 before:h-0";
    const after = "after:content-[''] after:border-y-22 after:border-r-22 after:border-r-statgreen after:border-y-transparent after:absolute after:-left-5.5 after:bottom-0 after:w-0 after:h-0";
    const text = "font-bobs text-black-50 text-2xl bg-info-section bg-top bg-repeat-y"; 
    
    return (
        <div className={`absolute bottom-0 w-1/3 h-11 bg-statgreen -translate-y-5.5 flex flex-row justify-center items-center drop-shadow-md ${text} ${before} ${after}`}>
            <span className="text-4xl">Segments</span>
        </div>
    );
};

export default DefaultContent;