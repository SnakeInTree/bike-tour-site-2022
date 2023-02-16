import { Dispatch, SetStateAction, useState } from "react";

/**
 * InfoPanel is responsible for showcasing the following:
 * - Highlights
 * - Why did you do this?
 * - What kind of gear did you use? 
 * - Where did you sleep? 
 * - How can I do this too? 
 * - Trail Notes
 */
interface SectionContent {
    sectionId: number, 
    title: string
}   

const SectionContentList = [
    {
        sectionId: 0,
        title: "Inspiration"
    },
    {
        sectionId: 1,
        title: "Gear"
    },
    {
        sectionId: 2,
        title: "Camping"
    },
    {
        sectionId: 3,
        title: "Advice"
    },
    {
        sectionId: 4,
        title: "Reflections"
    }
] as SectionContent[];

const InfoPanel = () => {
    const [activeSectionId, setActiveSectionId] = useState<number>(0);
    
    
    return (
        <div className="flex flex-col w-full h-4/5">
            <SectionTitles activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId} />
        </div> 
    );
};

const SectionTitles = ({activeSectionId, setActiveSectionId}: {activeSectionId: number, setActiveSectionId:Dispatch<SetStateAction<number>>}) => {
    return (
        <div className="flex flex-col w-full h-1/6 align-middle justify-center items-center -translate-y-48 pt-4 bg-tan">
            <div className="flex flex-row w-5/6 h-1/12">
                {SectionContentList.map((content:SectionContent) => <SectionHeader key={content.title} content={content} activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId}/>)}
            </div>
        </div>
    );
};

const SectionHeader = ({activeSectionId, setActiveSectionId, content}: {content:SectionContent, activeSectionId: number, setActiveSectionId:Dispatch<SetStateAction<number>>}) => {
    const before = "before:content-[''] before:border-y-42 before:border-l-24 before:border-l-statblack before:border-y-transparent before:absolute before:rotate-90 before:-translate-y-8";
    const isActive = activeSectionId === content.sectionId;

    const handleClick = () => setActiveSectionId(content.sectionId);

    return (
        <div className="flex flex-col w-full items-center cursor-pointer" onClick={handleClick}>
            <div className="relative p-4 text-center font-mapheader text-lg font-semibold text-segmentHoverBg hover:text-statblack">{content.title.toUpperCase()}</div>
            {isActive ? <div className={`${before} w-1/5 h-0`}></div> : null}
        </div>
    );
};

export default InfoPanel;

