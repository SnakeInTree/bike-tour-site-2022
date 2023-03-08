import { Dispatch, SetStateAction, useState } from "react";
import { IconContext } from "react-icons";
import { CgArrowLongRightR } from "react-icons/cg";

import { SectionContentList } from "@/data/text";
import { InfoPanelSection, SectionContent } from "@/store/models";

const InfoPanel = () => {
    const [activeSectionId, setActiveSectionId] = useState<number>(0);
    return (
        <div className="flex flex-col">
            <SectionTitles activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId} />
            <SectionInfo activeSectionId={activeSectionId} />
        </div> 
    );
};

const SectionTitles = ({activeSectionId, setActiveSectionId}: {activeSectionId: number, setActiveSectionId:Dispatch<SetStateAction<number>>}) => {
    return (
        <div className="flex flex-row align-middle sm:justify-around md:justify-around lg:justify-center items-center pt-12 bg-tan drop-shadow-md">
            {SectionContentList.map((content:InfoPanelSection) => <SectionTitle key={content.title} content={content} activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId}/>)}
        </div>
    );
};

const SectionTitle = ({activeSectionId, setActiveSectionId, content}: {content:InfoPanelSection, activeSectionId: number, setActiveSectionId:Dispatch<SetStateAction<number>>}) => {
    const isActive = activeSectionId === content.sectionId;
    const handleClick = () => setActiveSectionId(content.sectionId);
    const iconProps = {
        size: "3em",
        color: isActive ? "#f2ebeb" : "#A23D3B"
    };

    return (
        <IconContext.Provider value={iconProps}>
            <div className="flex flex-col items-center" onClick={handleClick}>
                <div className={`nil:hidden sm:hidden md:hidden lg:block relative p-4 text-center font-mapheader text-lg ${isActive ? "bg-statgrey text-tan" : "text-segmentHoverBg hover:text-statblack ease-in-out"} font-semibold whitespace-nowrap`}>{content.title.toUpperCase()}</div>
                <div className={`nil:block sm:block md:block lg:hidden relative p-4 text-center z-450 ${isActive ? "bg-statgrey" : ""}`}><content.Icon /></div>
            </div>
        </IconContext.Provider>
        
    );
};

const SectionInfo = ({activeSectionId}: {activeSectionId: number}) => {
    const activeSection = SectionContentList[activeSectionId];
    return (
        <div className="w-full bg-headshotChevronBg py-8 pl-12 pr-16">
            {activeSection.content.map((content: SectionContent) => <SectionInfoContent key={content.header} content={content} />)}
        </div>
    );
};

const SectionInfoContent = ({ content }: { content:SectionContent }) => {
    const iconProps = {
        size: "1em",
        color: "#A23D3B"
    };
    return (
        <IconContext.Provider value={iconProps}>
            <div className="flex flex-row font-playfair w-10/12 pb-4 last:pb-0">
                <div className="mr-4"><CgArrowLongRightR /></div>
                <p className="inline-block"><strong className="text-lg font-semibold">{content.header}</strong> {content.content}</p>
            </div>
        </IconContext.Provider>
       
    );
};

export default InfoPanel;

