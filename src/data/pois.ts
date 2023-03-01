import { LatLngExpression } from "leaflet";
import { Poi } from "@/store/models";

const PoiList: Poi[][] = [[
    {
        title: "Building the Bike",
        desc: "After landing, I retreived my bike and put it together in my hotel room. There was some surface damage to a headset bearing, but nothing trip-stopping.",
        location: "citizenM Hotel outside Schipol Airport, Holland",
        cloudflareId: "ae250e5f-801d-4976-21ac-030eb867cc00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"
    },
    {
        title: "Share the Road!",
        desc: "On the bike paths from Amsterdam to Alkmaar, it was common to come across some organic barriers. Farm animals are everywhere in Holland, even in suburban areas, so it's only right that they get to use public infrastructure as well.",
        location: "Hoofddorp, Holland",
        position: [52.30, 4.67] as LatLngExpression,
        date: "7/21",
        cloudflareId: "ead8a2d7-8582-4f96-fe04-c9b4c5e69200",
        iconType: "animal"
    },
    {
        title: "Cable Ferry",
        desc: "I love these little guys. They're very whimsical and a hundred times more fun than a bridge. Check out the heron relaxing next to the riverbank. Does someone pull them out during the winter?",
        location: "Hoofddorp, Holland",
        position: [52.30, 4.67] as LatLngExpression,
        date: "7/21",
        cloudflareId: "1ca1cb22-d592-4c97-c599-da2176c1ef00",
        iconType: "journal"
    },
    {
        title: "Beachfront Fortifications",
        desc: "Remnants of the Nazi Occupation of Holland (1940-45) are plentiful on Holland's coastline. Today, bunkers and trench lines bear plaques of rememberance and offer blank canvases for those interested in leaving a mark.",
        location: "Egmond aan Zee, Holland",
        position: [52.61, 4.62] as LatLngExpression,
        date: "7/23",
        cloudflareId: "ad1ccf6c-a42a-4f02-a624-0ee753135b00",
        iconType: "monument"
    },
    {
        title: "The Schermerhorn Windmills",
        desc: "Built in the 17th century to drain the peat bogs of northern Holland.",
        location: "Schermerhorn, Holland",
        cloudflareId: "fbf8b0ef-1628-4a22-4de8-c2060ce8c100",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "monument"
    },
    {
        title: "Bike Safes",
        desc: "Need to catch a train, but don't want your bike left out in the rain? No problem! Own a decent bike but not a matching D-Lock? No problem! These safes are beautiful and I wish they were the norm outside public transit.",
        location: "Uitgeest, Holland",
        position: [52.61, 4.62] as LatLngExpression,
        date: "7/24",
        cloudflareId: "89eb3f3a-3b68-44db-8e42-528cdef65b00",
        iconType: "journal"
    },
    {
        title: "Boat Tour!",
        desc: "Haarlem is the perfect place to take a lazy summer cruise. A main canal rings the city, with watery tendrils snaking their way to the interior, allowing a savvy helmsman access to any number of riverside bars. Find a friend with a boat and enjoy.",        
        location: "Haarlem, Holland",
        position: [52.37, 4.63] as LatLngExpression,
        date: "7/24",
        cloudflareId: "82f27f98-8bd0-4bef-6746-51f98f777c00",
        iconType: "monument"
    },
    {
        title: "Bike Check",
        desc: "After a quiet night at a local campground, my trip began in earnest. The bike pictured is a 2021 Fuji Touring Bike, with a Chromoly Steel frame, Deore groupset and Disc brakes. I traveled light -- all of my clothing and camping gear I stored in my panniers, besides my tent that I strapped to my handlebars.",
        location: "Noordwijk, Holland",
        position: [52.24, 4.44] as LatLngExpression,
        date: "7/25",
        cloudflareId: "e0798968-83ec-494b-cd09-13373be67900",
        iconType: "camp"
    },
    {
        title: "Plompe Toren",
        desc: "In Dutch Legend, this tower is the last remnant of a drowned town. There's little else to know about this out-of-the-way oddity.",
        location: "Haamstede, Holland",
        position: [51.68, 3.77] as LatLngExpression,
        date: "7/27",
        cloudflareId: "d311b7dc-eb86-4c29-4850-ce6436b83b00",
        iconType: "monument"
    }
],
[ //Seg 1
    {
        title: "Canalside",
        desc: "After leaving Holland, my goal was to visit Bruges. Luckily, I wasn't the first one to want a quick route between Southern Holland and Bruges. Napoleon Bonaparte ordered the construction of the canal pictured in 1809, to ensure that the port cities lining the North Sea could be quickly reinforced in case of British incursions. Today, the Damme Canal ferries tourists and pleasure cruisers rather than Napoleonic armies, and provides an excellent through-route for cycle tourists.",
        location: "Damme, Belgium",
        cloudflareId: "b3add237-f751-468b-beb2-e9137c981c00",
        position: [51.277, 3.309] as LatLngExpression,
        date: "7/28",
        iconType: "journal"
    },
    {
        title: "Venice of the North",
        desc: "Bruges is immaculate. Well-kept gardens mirror the secluded pathways as you saunter from sight to sight . You stop to enjoy the view of a picturesque lakeside castle, only for a pair of swans to lazily glide by. You can’t quite accept that the streets are as clean as they are. How do they do it? You half expect that your restaurant’s staff are poised and ready to break into song. Something has to shatter this illusion. Is this place even real?",
        location: "Bruges, Belgium",
        cloudflareId: "564f270d-2e7d-4601-541b-94b57e33a400",
        position: [51.22, 3.23] as LatLngExpression,
        date: "7/28",
        iconType: "journal"
    },
    {
        title: "How is this place real?",
        desc: "Fortunately, Bruges is a real place and not, as I feared, a strange Westworld-like simulation. The gothic architecture isn't aftermarket; it is the product of Bruges' good fortune of not being flattened during the world wars. Cars are kept from the city centre not to promote a themepark-like sterility, but to advocate the supremacy of the pedestrian and the cyclist. Sure, Bruges should not be the destination of the thrill-seeking traveler. But for the person who wants to spend their time visiting somewhere truly beautiful, I don't think you can do better than Bruges.",
        location: "Bruges, Belgium",
        cloudflareId: "7a72780e-733c-4ece-62dc-df871b58d800",
        position: [51.22, 3.23] as LatLngExpression,
        date: "7/28",
        iconType: "journal"
    },
    {
        title: "Bike Routes of Belgium",
        desc: "While most Dutchmen would turn up their noses at the Belgian bicycle infrastructure, I was pleasantly surprised by the routes on offer. The Flemish tourist authority has created 9 separate bike touring routes that criss-cross Flanders, offering low-to-no traffic byways connecting major cities like Antwerp, Brussels, Bruges and Ghent. The gravel path shown is part of the Art Cities route or Kunststedenroute which connects Bruges and Ghent. Find more information on this bike route in the 'Links' section below.",
        location: "Aalter, Belgium",
        position: [51.113, 3.399] as LatLngExpression,
        date: "7/28",
        cloudflareId: "f67d9ce2-5a11-4be5-9bbf-effa142c5900",
        iconType: "nature"
    },
    {
        title: "BBQ Stoppelparty",
        desc: "Sadly I was 2 weeks too early to attend the Stoppelparty. 'Till next time my stoppelpeople.",
        location: "Vivenkapelle, Belgium",
        position: [51.093, 3.547] as LatLngExpression,
        date: "7/28",
        cloudflareId: "fe690de5-bebf-436d-ffb6-10b006227c00",
        iconType: "journal"

    }, 
    {
        title: "Living City",
        desc: "It's hard not to compare Ghent to Bruges. They're all of 50 KM apart, both occupy riverfront space and both possess some of the most impressive examples of Gothic architecture in Western Europe. But  Bruges can feel like a diorama. I have a hard time imagining what it'd be like to live there. Ghent, on the other hand, has a pulse. Autos, pedestrians, bikes and tram lines all vie for space within the same cramped cobble roads. University students hustle about between modernist libraries and ancient lecture halls. Ghent feels like it could be home to someone.",
        location: "Ghent, Belgium",
        position: [51.057, 3.720] as LatLngExpression,
        date: "7/28",
        cloudflareId: "03bab1bc-2770-4ee1-69cc-8f3ae40c6d00",
        iconType: "journal"
    },
    {
        title: "Gravensteen - The Castle of the Counts",
        desc: "The story of Gravensteen is one of great preservation being performed consistently, over centuries. Originally constructed in the 12th century to be the residence of the Counts of Flanders, Gravensteen only served this purpose for two hundred years before the local seat of power was moved elsewhere. This left the citizens of Ghent to figure out what to do with such a property. The castle was used as a private residence, a mint and even a cotton mill before it was rennovated and brought to its current glory in the early 20th century.",
        location: "Ghent, Belgium",
        position: [51.057, 3.720] as LatLngExpression,
        date: "7/29",
        cloudflareId: "6d14c828-ab6e-40a9-3aab-6f9d757b0300",
        iconType: "monument"
    },
    {
        title: "Sunny Day on the Scheldt",
        desc: "Leaving Ghent in the mid-afternoon, I started the 100 KM ride to Ypres by following the Scheldt river south. The flat bikeway was quiet, and I didn't see a soul for some hours.",
        location: "Melden, Belgium",
        position: [50.840, 3.606] as LatLngExpression,
        date: "7/29",
        cloudflareId: "b9866342-428d-4c5b-62ab-1c8a3814f600",
        iconType: "nature"
    },
    {
        title: "Menenpoort - Gate of Ypres",
        desc: "The Menin Gate, constructed in 1927 to memorialize one of the roads that led soldiers to the frontlines of the Battle of Ypres, during WWI. Each and every night, stretching back to the memorial's creation, volunteers gather at this bridge to perform the Last Post ceremony by playing a  British bugle call meant to signal an end to the day's activities. I was lucky enough to be entering Ypres at the same time the ceremony was beginning, and watched with a crowd of onlookers. This picture was taken after the mass had dispersed.",
        location: "Ypres, Belgium",
        position: [50.85, 2.89] as LatLngExpression,
        date: "7/29",
        cloudflareId: "8e394aca-555a-4e3f-cd99-d230569ac700",
        iconType: "monument"
    },
    {
        title: "Belgian Beer",
        desc: "I'm not a massive beer guy. But damn if this isn't some of the best beer I've ever tasted. Brewed in Watou, Belgium for the last hundred years, the St. Bernardus Abt 12 is somehow robust yet light -- complex without seeming indulgent. Even if Belgium's reputation for stupendous brews doesn't interest you, make sure to give this one a try.",
        location: "Menenpoort, Belgium",
        position: [50.85, 2.89] as LatLngExpression,
        date: "7/30",
        cloudflareId: "4e9eaef2-bee4-4b64-5e16-41efc40f8e00",
        iconType: "journal"
    },
    {
        title: "Joyeux Noël",
        desc: "WWI history is inescapable on the border between Belgian and France. Mass graveyards show up every few miles between Ypres and Amiens, alongside monuments to honor the dead. The monument pictured honors the Christmas Truce of 1914, when soldiers on both sides of the trench put down their weapons and came together to spend the night in celebration.",
        location: "Mesen, Belgium",
        cloudflareId: "4d75f555-aa5b-448c-dc62-208fe5e54b00",
        position: [50.761, 2.895] as LatLngExpression,
        date: "7/31",
        iconType: "monument"
    },
    {
        title: "War is Over",
        desc: "Inscription Reads: 'To all those who experienced the small peace during the Great War'.",
        location: "Mesen, Belgium",
        cloudflareId: "38d84aca-c1f1-4331-dbe0-c053dbf47200",
        position: [50.761, 2.895] as LatLngExpression,
        date: "7/31",
        iconType: "monument"
    },
],
[ //Normandy 
    {
        title: "Entering France",
        desc: "Leaving Belgium, I entered the Hauts-de-France, France's northernmost administrative region. At first glance, France appeared positively empty compared to Holland and Belgium. I rolled through hayfields and deadly quiet border towns, seeing only a few souls.",
        location: "Miraumont, France",
        cloudflareId: "9a96f194-56e0-4aa3-b85c-9c633f9d0000",
        position: [50.112, 2.712] as LatLngExpression,
        date: "8/1",
        iconType: "journal"
    },
    {
        title: "Amiens Cathedral",
        desc: "The Amiens Cathedral was first built in the 13th century, and remains largely complete thanks to the nearly millenia-long labor of French believers. Despite being in on the front-line during the closing days of WWI, this relic managed to avoid major damage.",
        location: "Amiens, France",
        cloudflareId: "fcb84c3d-fb2d-401a-afa8-c00f58329500",
        position: [49.892, 2.303] as LatLngExpression,
        date: "8/1",
        iconType: "monument"
    },
    {
        title: "Château Gaillard Ruin",
        desc: "On an embankment overlooking the Seine lies the medieval ruin of Château Gaillard. Built in the 12th century, this stocky fortress saw action during the French effort to conquer Normandy in 1204 and later during the Hundred Years' war in the 15th century. It was destroyed in 1599 by Henry IV, so that future invaders wouldn't benefit from its defensive capabilities.",
        location: "Les Andleys, France",
        cloudflareId: "75ae4fb6-da9a-4fa7-a53e-a8056a853c00",
        position: [49.235, 1.409] as LatLngExpression,
        date: "8/2",
        iconType: "monument"
    }, 
    {
        title: "Prix du Pain",
        desc: "The French bakery is a friend of the bicycle tourist. They are ubiquitous, being found in any town with more than 50 residents. The bread sold there is affordable, with a fresh baguette costing only a Euro. And best of all, as pictured, bread is easily transportable!",
        location: "Houetteville, France",
        cloudflareId: "9a059aae-e7bc-44af-d8ef-e4118406ca00",
        position: [49.12, 1.11] as LatLngExpression,
        date: "8/2",
        iconType: "journal"
    }, 
    {
        title: "Baguette-o-matic",
        desc: "The Baguette of the future, today! These vending machines can be found in some out-of-the-way areas, and are stocked daily (?) with fresh bread. I performed a blind taste test and couldn't tell the difference between a vending machine baguette and one bakery-procured.",
        location: "Les Baux-de-Breteuil, France",
        cloudflareId: "86110c7c-4153-4711-4686-30f9467dee00",
        position: [48.875, 0.798] as LatLngExpression,
        date: "8/3",
        iconType: "journal"
    }, 
    {
        title: "Abbey of Saint-Evroul",
        desc: "",
        location: "Saint-Evroult-Notre-Dame-du-Bois, France",
        cloudflareId: "d0062a2c-4158-4ca6-b886-a30e1944bb00",
        position: [48.791, 0.462] as LatLngExpression,
        date: "8/4",
        iconType: "monument"
    }, 
    {
        title: "Château de Carrouges",
        desc: "",
        location: "Carrouges, France",
        cloudflareId: "32d24b71-245f-4bf9-84d1-3095edd2a800",
        position: [48.561, -0.154] as LatLngExpression,
        date: "8/6",
        iconType: "monument"
    }, 
    {
        title: "Roche Torin",
        desc: "Mont Saint-Michel is visible from many kilometers away thanks to the tidal plains that surround the structure. When the tides recede, local farmers graze sheep on the salty marshland that's revealed. I took a gravel path up the coast to find the main causeway connecting Mont-Saint Michel to the mainland, dodging fellow tourists all the while.",
        location: "Courtils, France",
        cloudflareId: "6a2a0aeb-88a9-424e-1564-f1340011f100",
        position: [48.643, -1.425] as LatLngExpression,
        date: "8/7",
        iconType: "nature"
    }, 
    {
        title: "Mont Saint-Michel",
        desc: "",
        location: "Mont Saint-Michel, France",
        cloudflareId: "c87e36b9-f680-499a-d504-23ac9fcef700",
        position: [48.634, -1.511] as LatLngExpression,
        date: "8/7",
        iconType: "monument"
    }, 
    {
        title: "Abbey Streets",
        desc: "",
        location: "Mont Saint-Michel, France",
        cloudflareId: "032a154f-4912-4817-b820-7340e8efd700",
        position: [48.634, -1.511] as LatLngExpression,
        date: "8/7",
        iconType: "journal"
    }, 
    {
        title: "Inland Sea",
        desc: "",
        location: "Mont Saint-Michel, France",
        cloudflareId: "e2380ff5-8324-4fc0-dea9-19c9a8beec00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "8/7",
        iconType: "journal"
    }, 
],
[ //Seg Three
    {
        title: "Wild Camp",
        desc: "",
        location: "",
        cloudflareId: "e9811838-615c-4ee7-2e39-82fd225edd00",
        position: [48.55, -0.715] as LatLngExpression,
        date: "8/8",
        iconType: "nature"
    },
    {
        title: "Header",
        desc: "",
        location: "",
        cloudflareId: "9b5ca11d-1570-4d09-7a38-afa0baad7900",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"
    },
    {
        title: "old",
        desc: "",
        location: "",
        cloudflareId: "8d27af43-7184-4fe4-3fbc-7299880ef500",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"
    }
],
[ //Seg Four
    {
        title: "Wild Camp",
        desc: "",
        location: "",
        cloudflareId: "e9811838-615c-4ee7-2e39-82fd225edd00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "nature"
    },
    {
        title: "Header",
        desc: "",
        location: "",
        cloudflareId: "23c2066f-c718-4433-9c8e-828cd2007600",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"
    }
],
[ //Seg 5
    {
        title: "old",
        desc: "",
        location: "",
        cloudflareId: "9d1c95ab-1312-4bb3-d2d1-e8c905ebe800",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"
    }
],
[ //Seg 6 
    {
        title: "Header",
        desc: "",
        location: "",
        cloudflareId: "00a8818a-b6e3-4f04-5bc6-f026ce2b6800",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"
    },
    {
        title: "old",
        desc: "",
        location: "",
        cloudflareId: "53898331-df1f-451d-d8eb-25c26d669c00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"
    }
],
[ //Seg 7
    {
        title: "Header",
        desc: "",
        location: "",
        cloudflareId: "d317827a-6f44-4c7e-1e6c-3b212a181200",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"
    },    
    {
        title: "old",
        desc: "",
        location: "",
        cloudflareId: "81f7ba5b-f362-482f-54cc-71a1cca81200",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"
    }
],
[ //Seg 8
    {
        title: "Header",
        desc: "",
        location: "",
        cloudflareId: "241f39a5-a453-448d-ba85-51feebc24f00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"

    }
],
[ //Seg 9
    {
        title: "old",
        desc: "",
        location: "",
        cloudflareId: "46f25b16-ac46-4ba4-4172-f17ecc11b900",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"

    }
],
[ //Seg 10
    {
        title: "Header",
        desc: "",
        location: "",
        cloudflareId: "5a4842a9-610e-495c-faec-1d8f71946000",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"

    }
],
[ //Seg 11
    {
        title: "Header",
        desc: "",
        location: "",
        cloudflareId: "1601001b-5da8-48fe-a469-076a75071200",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"

    }
]];

export default PoiList;
/**
     * Soccer Monument 
     * Amiens Cathedral
     * Forest Corridor
     * Hayfields
     * Rolling Plains
     * Les Andleys Castle
     * Baguette Bike
     * Baguette-o-matic
     * Breteiul Forcast
     * Avg. French Square
     * Ruined Abbey
     * Sees Cathedral
     * Hunting Lodge
     * Bike Progress Pic (Signpost)
     * Castle Brigands
     * Approach to Mont St Michel
     * The Mont Proper
     * Views of the Plains
     */