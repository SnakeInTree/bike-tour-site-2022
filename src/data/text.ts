import {GiPhotoCamera, GiInspiration, GiLightBackpack, GiCampingTent, GiMirrorMirror } from "react-icons/gi";
import { InfoPanelSection, SectionContent } from "@/store/models";

const text = {
    intro: {
        para1: "In 2022, I left home to explore Europe by bicycle. Over the course of three months, I cycled alongisde the castles of the Loire, traversed the Swiss Alps, and slept under the stars in five-hundered-year-old Slovenian forests.",
        para2: "The idea of taking a prolonged bike tour had been bouncing around my head for close to five years before I finally got the money and time together to make my dream a reality. I remember during my University studies in Montreal, being in a library sometime during the frigid midwinter and daydreaming of cycling under the sun alongside French castles. At the time, and for years later I wrote the fantasy off and returned to the business of completing my degree.",
        para3: "Nevertheless, the idea stuck. In the following years, I'd often close my eyes and imagine what it'd really be like to embark on a multi-month odyssey by bicycle. In 2021, with some newfound \"adult\" money and ready for a break from remote work, I started working on plan to purchase a bike and the requisite supplies for camping. Then in 2022, armed with a steel Fuji Touring Bike, a few thousand dollars in savings and a Google Map marked with every conceivable point of interest, I boarded a flight from Toronto to Amsterdam.", 
        para4: "I've broken up the full account of my journey into 12 sections, each containing a selection of photos and stories from my travels. Each segment writeup also includes a list of resources including campsites, restaurents and bicycle paths for anyone looking to go on their own European excursion.",
        post: "Thanks for reading, and happy trails!"
    },
    segmentText: [
        { //Segment 1 -- Holland
            "para1": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
        },
        { //Segment 2 -- Belgium
            "para1": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
        },
        { //Segment 3 -- Normandy
            "para1": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
        },
        { //Segment 4 -- Loire
            "para1": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
        },
        { //Segment 5 -- Alsace
            "para1": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
        },
        { //Segment 6 -- Swiss Jura
            "para1": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
        },
        { //Segment 7 -- Swiss Alps
            "para1": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
        },
        { //Segment 8 -- Lombardy
            "para1": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
        },
        { //Segment 9 -- Veneto
            "para1": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
        },
        { //Segment 10 -- Slovenia
            "para1": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
        },
        { //Segment 11 -- Croatia
            "para1": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
        },
        { //Segment 12 -- South Balkans
            "para1": "Holland provides an exceptionally easy start point for a bike tour, thanks to its flat terrain and world-class cycling infrastructure. If the safe cycling conditions don't win you over, then the sandy dunes that blanket the low country's western seaboard will, by providing ample opportunity for some fun in the sun.",
        }
    ]
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