import {GiPhotoCamera, GiInspiration, GiLightBackpack, GiCampingTent, GiMirrorMirror } from "react-icons/gi";
import { InfoPanelSection, SectionContent, SegmentText } from "@/store/models";

const text = {
    intro: {
        para1: "In 2022, I left home to explore Europe by bicycle. Over the course of three months, I cycled alongisde castles in France, crossed the Swiss Alps, and slept under the stars in hundered-year-old forests.",
        para2: "Most people don't think of bicycles as a good way to travel long distances. There's no built-in radio. There's no wait staff to feed you pretzels. Most bikes don't even have cupholders! How can the modern traveler be expected to cope?",
        para3: "The truth is that traveling by bicycle (called alternatively bike touring, bikepacking, biketrekking etc.) has been happenning ever since the 1800s when people were introduced to two-wheel travel. You can find magazines from the 1920's that list which Atlantic City hotels will \"accept a man in a bicycle costume into the dining room\". Though the recent surge of cycling products branded as 'bikepacking-ready' is somewhat recent, the practice of strapping a stove and sleeping bag to a bicycle is anything but.", 
        para4: "With this in mind, my decision to quit my job and embark on a 90 day pedal-powered journey across the European continent was, in fact, quite normal! I had long held a desire to travel, and thought that using a bicycle as my main source of locomotion would give me the chance to really savor the adventure.",
        para5: "This website is the chronicle of my experience. I've done my best to document all the highlights, along with every mistake and bump in the road I encountered along the way. I've broken up the full account into 12 sections, each containing a selection of photos and stories. I've also made sure to add a list of personal reccommendations for restaurents, campsites, bike routes etc. to each writeup. My sincere hope is that this inspires someone else to embark on their own biking journey -- it can be difficult, but I'm convinced that there's no better way to travel.",
        post: "Thanks for reading, and happy trails!"
    },
    segmentText: [
        { //Segment 1 -- Holland
            "header": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
            "paragraphs": [
                "For the car-phobic cyclists among us, there's no better destination than Holland. Nearly every road, no matter how minor, has an adjacent cyclepath beside it that provides a high degree of separation between bikes and motorized vehicles. Better yet, many cyclepaths possess yet another adjacent path for walking, thus avoiding any potential crossing of the streams. On warm summer days, these roadways become a pedestrian paradise -- allowing Dutchies of all ages equitable access to their surroundings.",
                "This being said, be warned! These lands will not test your climbing legs, nor will they challenge your aerobic engine. Attempts to speed through the beautiful streets of tight-knit Dutch towns will result in near collisions with the ubiquitious outdoor Dutch child. In my experience, your best bet is to let your competitive streak take a backseat and vibe out to cycling by the beautiful Dutch landscape.",
            ]
        },
        { //Segment 2 -- Belgium
            "header": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
            "paragraphs": []
        },
        { //Segment 3 -- Normandy
            "header": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
            "paragraphs": []
        },
        { //Segment 4 -- Loire
            "header": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
            "paragraphs": []
        },
        { //Segment 5 -- Alsace
            "header": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
            "paragraphs": []
        },
        { //Segment 6 -- Swiss Jura
            "header": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
            "paragraphs": []
        },
        { //Segment 7 -- Swiss Alps
            "header": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
            "paragraphs": []
        },
        { //Segment 8 -- Lombardy
            "header": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
            "paragraphs": []
        },
        { //Segment 9 -- Veneto
            "header": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
            "paragraphs": []
        },
        { //Segment 10 -- Slovenia
            "header": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
            "paragraphs": []
        },
        { //Segment 11 -- Croatia
            "header": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
            "paragraphs": []
        },
        { //Segment 12 -- South Balkans
            "header": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
            "paragraphs": []
        }
    ] as SegmentText[]
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