import { LatLngExpression } from "leaflet";
import { Poi } from "@/store/models";

const PoiList: Poi[][] = [[
    {
        title: "Header",
        desc: "The Schermerhorn Windmills, built in the 17th century to drain the peat bogs of northern Holland.",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "fbf8b0ef-1628-4a22-4de8-c2060ce8c100",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "monument"
    },
    {
        title: "Building the Bike",
        desc: "Unpacking and building a bike in my hotel outside of Schipol Airport. There was some surface damage around the collar, but it could have been far worse!",
        locationTown: "Schipol Airport",
        locationCountry: "Holland",
        cloudflareId: "ae250e5f-801d-4976-21ac-030eb867cc00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"
    },
    {
        title: "Share the Road!",
        desc: "On the bike paths from Amsterdam to Alkmaar, it was common to come across some organic barriers. Farm animals are everywhere in holland, even in suburban areas, so it's only right that they get to use public infrastructure as well.",
        locationTown: "Hoofddorp",
        locationCountry: "Holland",
        position: [52.30, 4.67] as LatLngExpression,
        date: "7/21/2022",
        cloudflareId: "ead8a2d7-8582-4f96-fe04-c9b4c5e69200",
        iconType: "animal"
    },
    {
        title: "Manual River Crossing",
        desc: "I love these little guys. They're very whimsical and a hundred times more fun than a bridge. Check out the heron relaxing next to the riverbank.",
        locationTown: "Hoofddorp",
        locationCountry: "Holland",
        position: [52.30, 4.67] as LatLngExpression,
        date: "7/21/2022",
        cloudflareId: "1ca1cb22-d592-4c97-c599-da2176c1ef00",
        iconType: "journal"
    },
    {
        title: "Beachfront Fortifications",
        desc: "Remnants of the Nazi Occupation of Holland (1940-45) are plentiful on Holland's coastline. Today, bunkers and trench lines bear plaques of rememberance and offer blank canvases for those interested in leaving a mark.",
        locationTown: "Egmond aan Zee",
        locationCountry: "Holland",
        position: [52.61, 4.62] as LatLngExpression,
        date: "7/23/2022",
        cloudflareId: "ad1ccf6c-a42a-4f02-a624-0ee753135b00",
        iconType: "monument"
    },
    {
        title: "Bike Safes",
        desc: "A collection of mini-storage lockers outside of a train station in Uitgeest.",
        locationTown: "Uitgeest",
        locationCountry: "Holland",
        position: [52.61, 4.62] as LatLngExpression,
        date: "7/24/2022",
        cloudflareId: "89eb3f3a-3b68-44db-8e42-528cdef65b00",
        iconType: "journal"
    },
    {
        title: "Boat Tour!",
        desc: "I went on a Boat tour of the Canals of Haarlem. What a vibe.",
        locationTown: "Haarlem",
        locationCountry: "Holland",
        position: [52.37, 4.63] as LatLngExpression,
        date: "7/24/2022",
        cloudflareId: "82f27f98-8bd0-4bef-6746-51f98f777c00",
        iconType: "monument"
    },
    {
        title: "Bike Check",
        desc: "The steel horse I ride",
        locationTown: "Noordwijk",
        locationCountry: "Holland",
        position: [52.24, 4.44] as LatLngExpression,
        date: "7/25/2022",
        cloudflareId: "e0798968-83ec-494b-cd09-13373be67900",
        iconType: "camp"
    },
    {
        title: "Plompe Toren",
        desc: "In Dutch Legend, this tower is the last remnant of a drowned town. There's little else to know about this out-of-the-way oddity.",
        locationTown: "Haamstede",
        locationCountry: "Holland",
        position: [51.68, 3.77] as LatLngExpression,
        date: "7/27/2022",
        cloudflareId: "d311b7dc-eb86-4c29-4850-ce6436b83b00",
        iconType: "monument"
    }
],
[ //Seg 1
    {
        title: "Header",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "6d14c828-ab6e-40a9-3aab-6f9d757b0300",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "monument"
    },
    {
        title: "old",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "32ae0cc5-e28e-4843-b473-152481f5eb00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "monument"
    },
    {
        title: "Belfry of Bruges",
        desc: "",
        locationTown: "Bruges",
        locationCountry: "Belgium",
        position: [51.208, 3.224] as LatLngExpression,
        date: "7/28/2022",
        cloudflareId: "41fdf113-d382-4a99-9bc9-85039de16600",
        iconType: "monument"
    },
    {
        title: "Bike Routes of Belgium",
        desc: "",
        locationTown: "Bruges",
        locationCountry: "Belgium",
        position: [51.242, 3.252] as LatLngExpression,
        date: "7/28/2022",
        cloudflareId: "f67d9ce2-5a11-4be5-9bbf-effa142c5900",
        iconType: "nature"
    },
    {
        title: "Zommerbar",
        desc: "",
        locationTown: "Vivenkapelle",
        locationCountry: "Belgium",
        position: [51.232, 3.284] as LatLngExpression,
        date: "7/28/2022",
        cloudflareId: "fe690de5-bebf-436d-ffb6-10b006227c00",
        iconType: "journal"

    },
    {
        title: "Ghent in the Sun",
        desc: "",
        locationTown: "Ghent",
        locationCountry: "Belgium",
        position: [51.057, 3.720] as LatLngExpression,
        date: "7/29/2022",
        cloudflareId: "ebd55eb5-f2e2-4702-51cd-b3ade8cd3e00",
        iconType: "monument"
    },
    {
        title: "Gravenstein - The Castle of the Counts",
        desc: "",
        locationTown: "Ghent",
        locationCountry: "Belgium",
        position: [51.057, 3.720] as LatLngExpression,
        date: "7/29/2022",
        cloudflareId: "caf822a2-a553-4b89-2478-1b42a4981700",
        iconType: "monument"
    },
    {
        title: "Menenpoort - Gate of Ypres",
        desc: "",
        locationTown: "Ypres",
        locationCountry: "Belgium",
        position: [50.85, 2.89] as LatLngExpression,
        date: "7/29/2022",
        cloudflareId: "8e394aca-555a-4e3f-cd99-d230569ac700",
        iconType: "monument"
    },
    {
        title: "Belgian Beer",
        desc: "",
        locationTown: "Menenpoort",
        locationCountry: "Belgium",
        position: [50.85, 2.89] as LatLngExpression,
        date: "7/29/2022",
        cloudflareId: "4e9eaef2-bee4-4b64-5e16-41efc40f8e00",
        iconType: "journal"
    },
],
[ //Seg Two 
    {
        title: "Header",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "e2380ff5-8324-4fc0-dea9-19c9a8beec00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"
    },
    {
        title: "old",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "cbcde6da-ab2b-4362-c108-7b6f38c75d00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"
    }
],
[ //Seg Three
    {
        title: "Header",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "9b5ca11d-1570-4d09-7a38-afa0baad7900",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"
    },
    {
        title: "old",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "8d27af43-7184-4fe4-3fbc-7299880ef500",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"
    }
],
[ //Seg Four
    {
        title: "Header",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "23c2066f-c718-4433-9c8e-828cd2007600",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"
    }
],
[ //Seg 5
    {
        title: "old",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "9d1c95ab-1312-4bb3-d2d1-e8c905ebe800",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"
    }
],
[ //Seg 6 
    {
        title: "Header",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "00a8818a-b6e3-4f04-5bc6-f026ce2b6800",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"
    },
    {
        title: "old",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "53898331-df1f-451d-d8eb-25c26d669c00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"
    }
],
[ //Seg 7
    {
        title: "Header",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "d317827a-6f44-4c7e-1e6c-3b212a181200",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"
    },    
    {
        title: "old",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "81f7ba5b-f362-482f-54cc-71a1cca81200",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"
    }
],
[ //Seg 8
    {
        title: "Header",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "241f39a5-a453-448d-ba85-51feebc24f00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"

    }
],
[ //Seg 9
    {
        title: "old",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "46f25b16-ac46-4ba4-4172-f17ecc11b900",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"

    }
],
[ //Seg 10
    {
        title: "Header",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "5a4842a9-610e-495c-faec-1d8f71946000",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
        iconType: "journal"

    }
],
[ //Seg 11
    {
        title: "Header",
        desc: "",
        locationTown: "",
        locationCountry: "",
        cloudflareId: "1601001b-5da8-48fe-a469-076a75071200",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20/2022",
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