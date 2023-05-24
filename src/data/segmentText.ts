import { GiPhotoCamera, GiInspiration, GiLightBackpack, GiCampingTent, GiMirrorMirror } from "react-icons/gi";
import { FaLink } from "react-icons/fa";
import { InfoPanelSection, SectionContent } from "@/store/models";

const HomeScreenSectionContent = [
    {
        sectionId: 0,
        title: "Highlights",
        Icon: GiPhotoCamera,
        content: [
            {
                header: "Slow Travel",
                content: "forces you off the beaten track. Cycling doesn't allow for a \"greatest hits of Europe\" tour the same way interrailing does; you can't fall asleep in Paris and wake up in Berlin. Instead you have to resign yourself to exist in the space between known places. Every person who grew up watching Rick Steves or Anthony Bourdain has a mental image of what it would be like to walk around Paris or Zurich. But what lies in the small towns and natural spaces between these metropolitan areas? Take a bike, rather than a plane, and you'll find out."
            },
            {
                header: "Balling on a Budget",
                content: "is absolutely possible when bike touring. Don't let any fears of flying a bike overseas fool you -- most airlines won't charge any more for a bike than they do for checked baggage, and once you've landed, you have permenant, accessible transportation! After you've built your bike, the benefits keep stacking. Paying for parking? Out of the question. Forking over fistfulls of Euros to access the EU's toll highway network? Not an issue. Many tourism bureaus even subsidize bicycle friendly lodging to allow bicycle tourists discounts on their lodging costs! You're losing money not traveling by bike!"
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
                content: "What, you've never wanted to give up all your responsibilities and live life on the road for a while? In all seriousness, I wanted to travel post-COVID, but do so in a way I thought was interesting.",
            },
            {
                header: "How did you come up with this route?",
                content: "The route is a product of me picking a few dozen \"must-see\" sights between Amsterdam and Greece, and then connecting the dots while trying to use established bicycle routes and greenways whenever possible. Some must-see sights included Mont-Sainte Michel in Western France, the Swiss Alps and Slovenia's Triglav national park. The hole in central France is the result of a trip to Paris with friends after meeting in the Loire, after which I decided on a change of scenery."
            }
        ] as SectionContent[]
    },
    {
        sectionId: 2,
        title: "Req. Gear",
        Icon: GiLightBackpack,
        content: [
            {
                header: "The bike",
                content: "I used was a 2021 Fuji Touring Bike, with a chromoly steel frame, disk brakes, a Deore 48/36/26T crankset and 11-36T, 10-speed rear cassette. I rode 37mm WTB Riddler tyres for the majority of the trip."
            },
            {
                header: "I used panniers and a bike trunk",
                content: "made by Frost River, an old-school outdoor supply company based out of Minnesota in the U.S. Their bags are made from a water-resistant waxed canvas that's finished with brass and leather for a classic look."
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
];

const SegmentSectionContentList = [
    [ //Holland
        {
            sectionId: 0,
            title: "Highlights",
            Icon: GiPhotoCamera,
            content: [
                {
                    header: "The world-famous Dutch bike paths",
                    content: "mean you'll never have to share space with cars. Look out for the LF Routes, Holland's long-distance bicycle route network that highlights the country's most senic rides."
                },
                {
                    header: "Haarlem and Rotterdam",
                    content: "are first-rate tourist destinations with excellent food and museums, alongside their charming systems of canals."
                },
                {
                    header: "Dutch seafood is sorely underappreciated.",
                    content: "Bring an appreciation for briney tastes and find some salted herring -- a historic delicacy in the Low Countries!"
                },
                {
                    header: "The Dutch serve the best coffee in Europe.",
                    content: "Every cup is strong, and comes with a little biscuit to enjoy while your coffee's cooling. I can't fathom why this hasn't caught on worldwide."
                },
            ] as SectionContent[]
        },
        {
            sectionId: 1,
            title: "Sleeping",
            Icon: GiCampingTent,
            content: [
                {
                    header: "A national network of campsites",
                    content: "is available through  Natuurkampeerterreinen (lit. Nature Camping Grounds). These campsites are scattered all over the country and offer a consistent level of amenity for a decent price. Prices vary per campsite, I paid between 5-15 Euro."
                },
                {
                    header: "The coast is densely populated",
                    content: "(as is Holland in general) and there are few in the way of forests to hide within. Wild campers beware."
                },
                {
                    header: "Most mid-size Dutch cities are replete with hostels",
                    content: "providing affordable dorm-style lodging. I stayed at Hostel ROOM Rotterdam and had a blast, high marks."
                }
            ] as SectionContent[]
        },
        {
            sectionId: 2,
            title: "Links",
            Icon: FaLink,
            content: [
                {
                    header: "Long Distance Bike Routes in Holland",
                    content: "https://www.hollandcyclingroutes.com/long-distance-cycle-routes"
                },
                {
                    header: "Dutch Bike Route Planner",
                    content: "https://www.hollandcyclingroutes.com/online-cycle-route-planner"
                },
                {
                    header: "Nature Campsites",
                    content: "https://www.natuurkampeerterreinen.nl/"
                },
                {
                    header: "Bikepacking Holland",
                    content: "https://www.bikepackingholland.nl/"
                },
                {
                    header: "ROOM Hostel, Rotterdam",
                    content: "https://www.roomrotterdam.nl/"
                },
                {
                    header: "Stayokay Hostel Network",
                    content: "https://www.stayokay.com/en"
                },
            ] as SectionContent[]
        },
    ],
    [ //Belgium
        {
            sectionId: 0,
            title: "Highlights",
            Icon: GiPhotoCamera,
            content: [
                {
                    header: "Bruges and Ghent,",
                    content: "two fairytale cities with decidedly different vibes."
                },
                {
                    header: "WWI History through the south.",
                    content: "Ypres, the living museum."
                },
                {
                    header: "Belgian Beer.",
                    content: "It really is that good!"
                },
            ] as SectionContent[]
        },
        {
            sectionId: 1,
            title: "Sleeping",
            Icon: GiCampingTent,
            content: [
                {
                    header: "While in Ypres,",
                    content: "I stayed at Camping Jeugdstadion. It was quiet, and only a 10 minute walk from my tent to the Menenpoort and entering Ypres proper. Full marks!"
                },
                {
                    header: "While in Ghent,", 
                    content: "I stayed at the Hostel Uppelink and was sorely disappointed."
                },
            ] as SectionContent[]
        },
        {
            sectionId: 2,
            title: "Links",
            Icon: FaLink,
            content: [
                {
                    header: "Camping Jeugdstadion",
                    content: "http://www.jeugdstadion.be/E/index.php"
                },
                {
                    header: "Iconic Cycling Routes",
                    content: "https://www.flandersbybike.com/plan-your-cycling-holiday"
                },
                {
                    header: "Interactive Bike Route Map",
                    content: "https://ravel.wallonie.be/en/home/carte-interactive.html"
                },
            ] as SectionContent[]
        },
    ],
    [ //Normandy
        {
            sectionId: 0,
            title: "Highlights",
            Icon: GiPhotoCamera,
            content: [
                {
                    header: "Castle Ruins, Les Andleys, Domfront:",
                    content: "memories of when this land was the subject of a century-long turf war between England and France."
                },
                {
                    header: "French bakeries.",
                    content: "They're just the best."
                },
                {
                    header: "Mont Saint Michel",
                    content: "is glorious."
                },
                {
                    header: "Off the beaten track.",
                    content: "Enjoy authentic French small towns."
                },
            ] as SectionContent[]
        },
        {
            sectionId: 1,
            title: "Sleeping",
            Icon: GiCampingTent,
            content: [
                {
                    header: "B&B Hotels",
                    content: "- relatively cheap, lifesavers!"
                },
                {
                    header: "Flower Camping",
                    content: "in Les Andelys."
                },
            ] as SectionContent[]
        },
        {
            sectionId: 2,
            title: "Links",
            Icon: FaLink,
            content: [
                {
                    header: "General French Bike Routes",
                    content: "https://en.francevelotourisme.com/cycle-route"
                },
                {
                    header: "Lodging finder for France, can be pricey!",
                    content: "https://www.gites-de-france.com/en"
                },
                {
                    header: "Flower Camping",
                    content: "https://en.flowercampings.com/"
                },
            ] as SectionContent[]
        },
    ],
    [ //Loire Valley
        {
            sectionId: 0,
            title: "Highlights",
            Icon: GiPhotoCamera,
            content: [
                {
                    header: "Castle Ruins, Les Andleys, Domfront:",
                    content: "memories of when this land was the subject of a century-long turf war between England and France."
                },
                {
                    header: "French bakeries.",
                    content: "They're just the best."
                },
                {
                    header: "Mont Saint Michel",
                    content: "is glorious."
                },
                {
                    header: "Off the beaten track.",
                    content: "Enjoy authentic French small towns."
                },
            ] as SectionContent[]
        },
        {
            sectionId: 1,
            title: "Sleeping",
            Icon: GiCampingTent,
            content: [
                {
                    header: "B&B Hotels",
                    content: "- relatively cheap, lifesavers!"
                },
                {
                    header: "Flower Camping",
                    content: "in Les Andelys."
                },
            ] as SectionContent[]
        },
        {
            sectionId: 2,
            title: "Links",
            Icon: FaLink,
            content: [
                {
                    header: "General French Bike Routes",
                    content: "https://en.francevelotourisme.com/cycle-route"
                },
                {
                    header: "Lodging finder for France, can be pricey!",
                    content: "https://www.gites-de-france.com/en"
                },
                {
                    header: "Flower Camping",
                    content: "https://en.flowercampings.com/"
                },
            ] as SectionContent[]
        },
    ],
    [ //Alsace
        {
            sectionId: 0,
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
    ],
    [ //Bernese Switzerland
        {
            sectionId: 0,
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
    ],
    [ //Alpine Switzerland
        {
            sectionId: 0,
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
    ],
    [ //Lombardy
        {
            sectionId: 0,
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
    ],
    [ //Veneto
        {
            sectionId: 0,
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
    ],
    [ //Slovenia
        {
            sectionId: 0,
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
    ],
    [ //Croatia
        {
            sectionId: 0,
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
    ],
    [ //South Balkans
        {
            sectionId: 0,
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
    ],
] as InfoPanelSection[][];

export {
    HomeScreenSectionContent,
    SegmentSectionContentList
};