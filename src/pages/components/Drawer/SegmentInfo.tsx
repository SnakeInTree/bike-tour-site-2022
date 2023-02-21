import { useQuery } from "react-query";
import { MdLocationOn } from "react-icons/md";

import Loader from "./Loading";
import StatsBlock from "./Stats";
import PhotoGallery from "./PhotoGallery";
import InfoPanel from "./InfoPanel";

import { fetchImages } from "@/apiUtil/cloudflare";
import segmentData from "@/data/segments";
import { segmentStats } from "@/data/stats";
import { text } from "@/data/text";
import { Poi, Segment } from "@/store/models";
import config from "@/config/default.json";

const SegmentInfo = ({activeSegmentId}: {activeSegmentId: number}) => {
    
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
                    <img className="relative" src={config.HTML_IMG_BUFFER_TAG + data[0]}/>
                    <Chevron location={segment.location} />
                    <Title text={segment.displayTitle} activeSegmentId={activeSegmentId} />
                    <CondensedHeader displayTitle={segment.displayTitle} location={segment.location} />
                    <div className="w-full bg-statgreen flex flex-row justify-center items-center sm:translate-y-4 md:translate-y-16 lg:-translate-y-16">
                        <StatsBlock statList={segmentStats[activeSegmentId]} />
                    </div>  
                    <IntroParagraph segmentText={text.segmentText[segment.segmentId]} />
                    <PhotoGallery poiList={segment.pois} images={data} />
                    <InfoPanel />
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
        <div className={`nil:hidden sm:hidden md:hidden -translate-y- lg:flex w-${width} h-8 bg-statblack -translate-y-4 translate-x-6 flex flex-row justify-center items-center drop-shadow-md ${text} ${before}`}>
            <MdLocationOn />
            <span className="ml-4">{location.toUpperCase()}</span>
        </div>
    );
};

//TO-DO: Refactor this plz
const styles = [
    "pl-8 -translate-y-36 text-7xl",
    "pl-10 -translate-y-36 text-7xl",
    "pl-8 -translate-y-36 text-7xl",
    "pl-8 -translate-y-36 text-7xl",
    "pl-8 -translate-y-72 text-7xl",
    "pl-8 -translate-y-36 text-7xl",
    "pl-8 -translate-y-36 text-7xl",
    "pl-8 -translate-y-36 text-7xl",
    "pl-8 -translate-y-36 text-7xl",
    "pl-8 -translate-y-36 text-7xl",
    "pl-8 -translate-y-44 text-7xl",
    "pl-8 -translate-y-36 text-7xl"
];

const Title = ({text, activeSegmentId}: {text: string, activeSegmentId:number}) => {    
    return (
        <div className={`nil:hidden sm:hidden md:hidden lg:flex flex-row font-mapheader font-medium text-center text-tan ${styles[activeSegmentId]}`}>
                {text.toUpperCase()}
        </div>
    );
};

const IntroParagraph = ({segmentText}: {segmentText: any}) => {
    
    return (
        <div className="flex flex-row justify-center w-full py-10 bg-tan sm:translate-y-24 md:translate-y-24 lg:-translate-y-16">
            <div className="flex flex-col w-10/12">
                <div className="flex flex-row mb-10">
                    <p className="pl-4 pr-12 w-3/4 text-2xl font-playfair font-semibold border-l-statgreenborder border-l-6">{segmentText.para1}</p>
                </div>
                <p className="text-lg font-playfair mb-10">{text.intro.para1}</p>
            </div>
        </div>
    );
};

export default SegmentInfo;