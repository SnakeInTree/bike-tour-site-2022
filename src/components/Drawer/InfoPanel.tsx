import { Dispatch, SetStateAction, useState } from "react";
import { IconContext } from "react-icons";
import { CgArrowLongRightR } from "react-icons/cg";

import { InfoPanelSection, SectionContent } from "@/store/models";

const InfoPanel = ({infoPanelText}: {infoPanelText:InfoPanelSection[]}) => {
    const [activeSectionId, setActiveSectionId] = useState<number>(0);
    return (
        <div className="flex flex-col">
            <SectionTitles infoPanelText={infoPanelText} activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId} />
            <SectionInfo infoPanelText={infoPanelText} activeSectionId={activeSectionId} />
        </div> 
    );
};

const SectionTitles = ({infoPanelText, activeSectionId, setActiveSectionId}: {infoPanelText: InfoPanelSection[], activeSectionId: number, setActiveSectionId:Dispatch<SetStateAction<number>>}) => {
    return (
        <div className="flex flex-row align-middle sm:justify-around md:justify-around lg:justify-around items-center pt-4 bg-tan drop-shadow-md">
            {infoPanelText.map((content:InfoPanelSection) => <SectionTitle key={content.title} content={content} activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId}/>)}
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

const SectionInfo = ({infoPanelText, activeSectionId}: {infoPanelText:InfoPanelSection[], activeSectionId: number}) => {
    const activeSection = infoPanelText[activeSectionId];
    return (
        <div className="w-full bg-headshotChevronBg py-8 pl-12 pr-16">
            {activeSection.content.map((content: SectionContent) => <SectionInfoContent key={content.header} content={content} />)}
        </div>
    );
};

const SectionInfoContent = ({ content }: { content:SectionContent }) => {
    const iconProps = {
        size: "2em",
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

