import { LegacyRef, MutableRefObject } from "react";
import { useQuery } from "react-query";
import { MdLocationOn } from "react-icons/md";

import Loader from "./Loading";
import StatsBlock from "./Stats";
import PhotoGallery from "./PhotoGallery";
import InfoPanel from "./InfoPanel";
import Footer from "./Footer";
import ElevationGraph from "./ElevationGraph";

import { fetchImages } from "@/apiUtil/cloudflare";
import segmentData from "@/data/segments";
import { segmentStats } from "@/data/stats";
import { SegmentSectionContentList } from "@/data/segmentText";
import { text } from "@/data/text";
import { Poi, Segment, SegmentText } from "@/store/models";
import config from "@/config/default.json";

const SegmentInfo = ({activeSegmentId, topOfDrawerRef}: {activeSegmentId: number, topOfDrawerRef: MutableRefObject<HTMLImageElement | null>}) => {
    
    const segment:Segment = segmentData[activeSegmentId];
    const cloudflareIds = segment.pois.map((poi:Poi) => poi.cloudflareId);

    const { isLoading, isError, data } = useQuery({
        queryKey: ["fetchImages", cloudflareIds],
        queryFn: () => fetchImages(cloudflareIds)
    });

    return (
        <>
            {(isLoading || !data) ? 
                <Loader />
                :
                <div>
                    <img src={config.HTML_IMG_BUFFER_TAG + data[segment.headerImageIndex]} ref={topOfDrawerRef as LegacyRef<HTMLImageElement>} />
                    <Title text={segment.displayTitle} activeSegmentId={activeSegmentId} />
                    <Chevron location={segment.location} />
                    <CondensedHeader displayTitle={segment.displayTitle} location={segment.location} />
                    <StatsBlock statList={segmentStats[activeSegmentId]} />
                    <Paragraphs segmentText={text.segmentText[segment.segmentId]} />
                    <PhotoGallery poiList={segment.pois} images={data} />
                    <InfoPanel infoPanelText={SegmentSectionContentList[activeSegmentId]} />
                    <Footer activeSegmentId={activeSegmentId} /> 
                </div>
            }   
        </>
    );        
};

const CondensedHeader = ({displayTitle, location}: {displayTitle: string, location:string}) => {
    return (
        <div className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden p-8 justify-evenly flex-col w-full bg-titleGrey text-tan font-mapheader">
            <div className="flex flex-row items-center mb-0.5">
                <MdLocationOn />
                <span>{location.toUpperCase()}</span>
            </div>
            <p className="text-5xl font-semibold">{displayTitle.toUpperCase()}</p>
        </div>
    );
};

const Chevron = ({location}: {location:string}) => {
    const before = "before:content-[''] before:border-y-16 before:border-l-16 before:border-l-statblack before:border-y-transparent before:absolute before:-right-4 before:bottom-0 before:w-0 before:h-0";
    const text = "font-mapheader text-slate-50";
    const width = location.length > 19 ? "7/12" : "5/12";
    
    return (
        <div className={`nil:hidden sm:hidden md:hidden lg:flex w-${width} h-8 bg-statblack ml-8 mb-4 flex flex-row justify-center items-center drop-shadow-md ${text} ${before}`}>
            <MdLocationOn />
            <span className="ml-4">{location.toUpperCase()}</span>
        </div>
    );
};

const Title = ({text, activeSegmentId}: {text: string, activeSegmentId:number}) => {    
    return (
        <div className="nil:hidden sm:hidden md:hidden lg:flex flex-row font-bobs font-medium text-center text-tan pl-8 -mt-38 mb-6 text-8.5xl">
                {text.toUpperCase()}
        </div>
    );
};

const Paragraphs = ({segmentText}: {segmentText: SegmentText}) => {
    return (
        <div className="flex flex-row justify-center w-full py-10 bg-tan drop-shadow-top-md">
            <div className="flex flex-col w-10/12">
                <div className="flex flex-row mb-10">
                    <p className="pl-4 pr-12 w-3/4 text-2xl font-playfair font-semibold border-l-statgreenborder border-l-6">{segmentText.header}</p>
                </div>
                {segmentText.paragraphs.map((para: string, index: number) => <p key={index} className="text-lg font-playfair mb-10">{para}</p> )}
            </div>
        </div>
    );
};

export default SegmentInfo;