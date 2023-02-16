import {GiPhotoCamera, GiInspiration, GiLightBackpack, GiCampingTent, GiMirrorMirror } from "react-icons/gi";
import { InfoPanelSection, SectionContent } from "@/store/models";

const text = {
    intro: {
        para1: "My bike route started in Amsterdam and followed the Atlantic costline west through Normandy, before dipping South to Central France and the Loire. I then reversed course and headed east, cutting through Swizerland, Italy, and Baltic nations bordering the Adriatic before reaching terminus at Ioannina, Greece.",
        para2: "I tried to follow established bike routes as much as possible, and in the central part of the journey I experimented with some off-road gravel and mountain bike routes. This being said, I wouldn't reccommend anyone attempting their own European tour follow my route exactly -- I ended up cycling beside more than a few unexpected highways and enduring some hellacious hike-a-bike sessions. Besides, making your own route and figuring out how to get to the places you want to see is the best part or planning!",
        para3: "I've divided my tour into 12 sections based on location, length and general vibe."
    }
};

const SectionContentList = [
    {
        sectionId: 0,
        title: "Highlights",
        Icon: GiPhotoCamera,
        content: [
            {
                header: "Slow Travel",
                content: "by bicycle presents some interesting challenges and opportunities."
            },
            {
                header: "Balling on a Budget",
                content: "because why pay for lodging?"
            }
        ] as SectionContent[]
    },
    {
        sectionId: 1,
        title: "Inspiration",
        Icon: GiInspiration,
        content: [
            {
                header: "Why did you want to do this?",
                content: ""
            },
            {
                header: "How did you come up with this route?",
                content: ""
            }
        ] as SectionContent[]
    },
    {
        sectionId: 2,
        title: "Req. Gear",
        Icon: GiLightBackpack,
        content: [
            {
                header: "The Bike",
                content: ""
            },
            {
                header: "Panniers and Bike Trunk",
                content: ""
            }
        ] as SectionContent[]
    },
    {
        sectionId: 3,
        title: "Sleeping",
        Icon: GiCampingTent,
        content: [
            {
                header: "Did you camp the whole time?",
                content: ""
            },
            {
                header: "What are some tips for wild camping?",
                content: ""
            }
        ] as SectionContent[]
    },
    {
        sectionId: 4,
        title: "Reflections",
        Icon: GiMirrorMirror,
        content: [
            {
                header: "Was it hard?",
                content: ""
            },
            {
                header: "Was it worth it?",
                content: ""
            }
        ] as SectionContent[]
    }
] as InfoPanelSection[];

export {
    SectionContentList,
    text
};