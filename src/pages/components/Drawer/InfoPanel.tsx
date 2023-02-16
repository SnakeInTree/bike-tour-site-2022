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
        title: "Gear List"
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
    return (
        <div className="flex flex-col w-full h-4/5">
            <SectionTitles />
        </div> 
    );
};

const SectionTitles = () => {
    return (
        <div className="flex flex-row w-full h-1/6 -translate-y-48 py-8 bg-tan">
            {SectionContentList.map((content:SectionContent) => <SectionHeader key={content.title} content={content} />)}
        </div>
    );
};

const SectionHeader = ({content}: {content:SectionContent}) => {
    return (
        <div className="p-4 w-1/6 cursor-pointer text-center font-mapheader text-lg font-semibold text-segmentHoverBg hover:text-statblack">{content.title.toUpperCase()}</div>
    );
};

export default InfoPanel;

