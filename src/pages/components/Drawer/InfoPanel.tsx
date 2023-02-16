import { Dispatch, SetStateAction, useState } from "react";
import { IconContext } from "react-icons";
import { CgArrowLongRightR } from "react-icons/cg";

import { SectionContentList } from "@/data/text";
import { InfoPanelSection, SectionContent } from "@/store/models";
/**
 * InfoPanel is responsible for showcasing the following:
 * - Highlights
 * - Why did you do this?
 * - What kind of gear did you use? 
 * - Where did you sleep? 
 * - How can I do this too? 
 * - Trail Notes
 */

const InfoPanel = () => {
    const [activeSectionId, setActiveSectionId] = useState<number>(0);
    
    return (
        <div className="flex flex-col w-full h-4/5 md:-translate-y-0 lg:-translate-y-48">
            <SectionTitles activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId} />
            <SectionInfo activeSectionId={activeSectionId} />
        </div> 
    );
};

const SectionInfo = ({activeSectionId}: {activeSectionId: number}) => {
    
    const activeSection = SectionContentList[activeSectionId];

    return (
        <div className="w-full h-4/5 bg-headshotChevronBg py-8 px-16">
            {activeSection.content.map((content: SectionContent) => <SectionInfoHeader key={content.header} content={content} />)}
        </div>
    );
};

const SectionInfoHeader = ({ content }: { content:SectionContent }) => {
    const iconProps = {
        size: "2rem",
        color: "#A23D3B"
    };
    
    return (
        <IconContext.Provider value={iconProps}>
            <div className="flex flex-row font-playfair">
                <div className="mr-4"><CgArrowLongRightR /></div>
                <p className="inline-block"><strong className="text-lg font-semibold">{content.header}</strong> {content.content}</p>
            </div>
        </IconContext.Provider>
       
    );
};

const SectionTitles = ({activeSectionId, setActiveSectionId}: {activeSectionId: number, setActiveSectionId:Dispatch<SetStateAction<number>>}) => {
    return (
        <div className="flex flex-col w-full h-1/6 align-middle justify-center items-center pt-8 bg-tan">
            <div className="flex flex-row w-5/6 h-1/12">
                {SectionContentList.map((content:InfoPanelSection) => <SectionHeader key={content.title} content={content} activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId}/>)}
            </div>
        </div>
    );
};

const SectionHeader = ({activeSectionId, setActiveSectionId, content}: {content:InfoPanelSection, activeSectionId: number, setActiveSectionId:Dispatch<SetStateAction<number>>}) => {
    //const before = "before:content-[''] before:border-y-42 before:border-l-24 before:border-l-statgrey before:border-y-transparent before:absolute before:rotate-90 before:-translate-y-8";
    const isActive = activeSectionId === content.sectionId;

    const handleClick = () => setActiveSectionId(content.sectionId);
    const iconProps = {
        size: "3rem",
        color: isActive ? "#f2ebeb" : "#A23D3B"
    };

    return (
        <IconContext.Provider value={iconProps}>
            <div className="flex flex-col w-full items-center" onClick={handleClick}>
                <div className={`nil:hidden sm:hidden md:hidden lg:block relative p-4 text-center font-mapheader text-lg ${isActive ? "bg-statgrey text-tan" : "text-segmentHoverBg hover:text-statblack ease-in-out"} font-semibold whitespace-nowrap`}>{content.title.toUpperCase()}</div>
                <div className={`nil:block sm:block md:block lg:hidden relative p-4 text-center z-450 ${isActive ? "bg-statgrey" : ""}`}><content.Icon /></div>
            </div>
        </IconContext.Provider>
        
    );
};

export default InfoPanel;

