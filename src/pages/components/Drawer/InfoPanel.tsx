import { Dispatch, SetStateAction, useState } from "react";
import { IconContext, IconType } from "react-icons";
import { GiInspiration, GiLightBackpack, GiCampingTent, GiMirrorMirror } from "react-icons/gi";
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
    sectionId: number;
    title: string;
    Icon: IconType;
}   

const SectionContentList = [
    {
        sectionId: 0,
        title: "Inspiration",
        Icon: GiInspiration
    },
    {
        sectionId: 1,
        title: "Req. Gear",
        Icon: GiLightBackpack
    },
    {
        sectionId: 2,
        title: "Camping",
        Icon: GiCampingTent
    },
    {
        sectionId: 4,
        title: "Reflections",
        Icon: GiMirrorMirror
    }
] as SectionContent[];

const InfoPanel = () => {
    const [activeSectionId, setActiveSectionId] = useState<number>(0);
    
    
    return (
        <div className="flex flex-col w-full h-4/5 md:-translate-y-0 lg:-translate-y-48">
            <SectionTitles activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId} />
        </div> 
    );
};

const SectionTitles = ({activeSectionId, setActiveSectionId}: {activeSectionId: number, setActiveSectionId:Dispatch<SetStateAction<number>>}) => {
    return (
        <div className="flex flex-col w-full h-1/6 align-middle justify-center items-center pt-8 bg-tan">
            <div className="flex flex-row w-5/6 h-1/12">
                {SectionContentList.map((content:SectionContent) => <SectionHeader key={content.title} content={content} activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId}/>)}
            </div>
        </div>
    );
};

const SectionHeader = ({activeSectionId, setActiveSectionId, content}: {content:SectionContent, activeSectionId: number, setActiveSectionId:Dispatch<SetStateAction<number>>}) => {
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

