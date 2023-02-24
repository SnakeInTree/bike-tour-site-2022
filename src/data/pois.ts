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
        title: "Header",
        desc: "",
        location: "",
        cloudflareId: "6d14c828-ab6e-40a9-3aab-6f9d757b0300",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "monument"
    },
    {
        title: "old",
        desc: "",
        location: "",
        cloudflareId: "32ae0cc5-e28e-4843-b473-152481f5eb00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "monument"
    },
    {
        title: "Belfry of Bruges",
        desc: "",
        location: "Bruges, Belgium",
        position: [51.208, 3.224] as LatLngExpression,
        date: "7/28",
        cloudflareId: "41fdf113-d382-4a99-9bc9-85039de16600",
        iconType: "monument"
    },
    {
        title: "Bike Routes of Belgium",
        desc: "",
        location: "Bruges, Belgium",
        position: [51.242, 3.252] as LatLngExpression,
        date: "7/28",
        cloudflareId: "f67d9ce2-5a11-4be5-9bbf-effa142c5900",
        iconType: "nature"
    },
    {
        title: "Zommerbar",
        desc: "",
        location: "Vivenkapelle, Belgium",
        position: [51.232, 3.284] as LatLngExpression,
        date: "7/28",
        cloudflareId: "fe690de5-bebf-436d-ffb6-10b006227c00",
        iconType: "journal"

    },
    {
        title: "Ghent in the Sun",
        desc: "",
        location: "Ghent, Belgium",
        position: [51.057, 3.720] as LatLngExpression,
        date: "7/29",
        cloudflareId: "ebd55eb5-f2e2-4702-51cd-b3ade8cd3e00",
        iconType: "monument"
    },
    {
        title: "Gravenstein - The Castle of the Counts",
        desc: "",
        location: "Ghent, Belgium",
        position: [51.057, 3.720] as LatLngExpression,
        date: "7/29",
        cloudflareId: "caf822a2-a553-4b89-2478-1b42a4981700",
        iconType: "monument"
    },
    {
        title: "Menenpoort - Gate of Ypres",
        desc: "",
        location: "Ypres, Belgium",
        position: [50.85, 2.89] as LatLngExpression,
        date: "7/29",
        cloudflareId: "8e394aca-555a-4e3f-cd99-d230569ac700",
        iconType: "monument"
    },
    {
        title: "Belgian Beer",
        desc: "",
        location: "Menenpoort, Belgium",
        position: [50.85, 2.89] as LatLngExpression,
        date: "7/29",
        cloudflareId: "4e9eaef2-bee4-4b64-5e16-41efc40f8e00",
        iconType: "journal"
    },
],
[ //Seg Two 
    {
        title: "Header",
        desc: "",
        location: "",
        cloudflareId: "e2380ff5-8324-4fc0-dea9-19c9a8beec00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"
    },
    {
        title: "old",
        desc: "",
        location: "",
        cloudflareId: "cbcde6da-ab2b-4362-c108-7b6f38c75d00",
        position: [52.31, 4.76] as LatLngExpression,
        date: "7/20",
        iconType: "journal"
    }
],
[ //Seg Three
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