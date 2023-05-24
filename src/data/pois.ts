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
        desc: "This former Benedictine Abbey was once a grand estate. Sketches from the 17th century show a palatial commune, with a towering cathedral accompanied by dormitories and surrounding farmland. Unfortunately, following the French Revolution, the Abbey was seized and subsequently had its roof and riches carried away. Today, only a few columns and entryways still stand.",
        location: "Saint-Evroult-Notre-Dame-du-Bois, France",
        cloudflareId: "d0062a2c-4158-4ca6-b886-a30e1944bb00",
        position: [48.791, 0.462] as LatLngExpression,
        date: "8/4",
        iconType: "monument"
    }, 
    {
        title: "Château de Carrouges",
        desc: "This castle was originally built as a defensive structure (moat and all) before being turned into a comfortable estate. It was later used as a hunting lodge; the lower floor showcases unique decorative pins which were created each year by the aristocrats who used the lodge as a summer retreat. ",
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
        desc: "The abbey looks impossible, like something from fantasy. The closer I stepped, the more I felt that I was following in the footsteps of generations of pilgrims who had visited this site during journeys of their own. ",
        location: "Mont Saint-Michel, France",
        cloudflareId: "c87e36b9-f680-499a-d504-23ac9fcef700",
        position: [48.634, -1.511] as LatLngExpression,
        date: "8/7",
        iconType: "monument"
    }, 
    {
        title: "Abbey Streets",
        desc: "The streets are cramped and crowded with shoppers and stalls; less Rivendell, more Coney Island. The Abbey is aware of the chaos that goes on beneath them -- placards scattered about inform summer visitors that the tiny commune has always been crowded during the warmer months, complete with drawings of 16th century pilgrims bumping shoulders. In this sense, the claustrophobia is all part of an authentic pilgrimage!",
        location: "Mont Saint-Michel, France",
        cloudflareId: "032a154f-4912-4817-b820-7340e8efd700",
        position: [48.634, -1.511] as LatLngExpression,
        date: "8/7",
        iconType: "journal"
    }, 
    {
        title: "Inland Desert",
        desc: "The low tide leaves miles of barren sands standing between the Abbey and the sea. I could look down and see picnic blankets and umbrellas being set out by adventurous tourists.",
        location: "Mont Saint-Michel, France",
        cloudflareId: "e2380ff5-8324-4fc0-dea9-19c9a8beec00",
        position: [48.634, -1.511] as LatLngExpression,
        date: "8/7",
        iconType: "journal"
    }, 
],
[ //Seg Three
    {
        title: "Wild Camp",
        desc: "This forest just south of Domfront was my first time wild camping. At dusk, I left the bike path and wandered into the woods to find a flat patch of ground. The night was peaceful, but I awoke to a frightening sight -- dozens of daddy-long-leg spiders, hanging on the other side of the tent mesh, inches from my face. I brushed them off, and was on my way.",
        location: "Saint-Mars-d'Égrenne, France",
        cloudflareId: "e9811838-615c-4ee7-2e39-82fd225edd00",
        position: [48.55, -0.715] as LatLngExpression,
        date: "8/9",
        iconType: "nature"
    },
    {
        title: "River District",
        desc: "A well-signed gravel path follows the Mayenne river from Domfront to Laval, and, in my opinion, is one of the best places to cycle in France. Small kiosks on the river bank offer coffee, water and pastries to passing cyclists. Stately hotels and quiet campsites abound. Life doesn’t get much better than this. ",
        location: "Mayenne, France",
        cloudflareId: "bfae1933-b618-456d-28eb-88786d249500",
        position: [48.302, -0.605] as LatLngExpression,
        date: "8/9",
        iconType: "journal"
    },
    {
        title: "The Museum of Naïve Art",
        desc: "In Laval I stopped by a museum showcasing artwork deemed \"unclassifiable\", on account of its creator's originality. The results are kooky but engaging -- one of my favorite pieces was this lineup of lizard men lining up for kiosks run by grimacing clerks. The museum is free, and offered a great respite from the boiling heat.",
        location: "Laval, France",
        cloudflareId: "9dd15221-f979-471d-4ba2-97418da9b600",
        position: [48.0639, -0.767] as LatLngExpression,
        date: "8/10",
        iconType: "monument"
    },
    {
        title: "Riverside Brew",
        desc: "It was mid-August, and the evenings were warm. My lack of reservation resulted in a nearby restaurant turning me away, but I was able to buy a few beers before shoving off. I dipped my feet in the water and watched the clouds go by.",
        location: "La Jaille-Yvon, France",
        cloudflareId: "132f9d86-d7ab-43e1-949f-688240006000",
        position: [47.718, -0.667] as LatLngExpression,
        date: "8/10",
        iconType: "camp"
    },
    {
        title: "Apocalypse Tapestry",
        desc: "This set of tapestries was commissioned in the late 14th century by Louis I. The artwork, depicting the events of the Book of Revelation, is massive, totaling six meters high and one hundred and forty meters long in total. Myself not being versed in the good book, I had a hard time deciphering the piece, but I still enjoyed seeing such richly-preserved art. The panel shown above depicts the battle between Saint Michael (here taking the form of a many-headed lion) and the 7-headed Beast of the Apocalypse.",
        location: "Angers, France",
        cloudflareId: "c60c6e7b-7ad3-4c22-eb69-63ed1db86200",
        position: [47.470, -0.556] as LatLngExpression,
        date: "8/11",
        iconType: "monument"
    },
    {
        title: "Galerie David d'Angers",
        desc: " Pierre-Jean David, known as David d'Angers, was a prolific sculptor active during the early 19th century famous for his works depicting heroes of myth and (then) modern science. The museum shown is a nearly complete collection of his works, storing either an original or mold of each of his many statues, busts and carvings.",
        location: "Angers, France",
        cloudflareId: "bb3ede05-fef0-4c8d-faa4-98701e4d9d00",
        position: [47.470, -0.556] as LatLngExpression,
        date: "8/11",
        iconType: "monument"
    },
    {
        title: "Tranquil Garden",
        desc: "Angers is a major French city, but it's not hard to find a quiet spot. I sat outside this urban garden and enjoyed a croissant while bumblebees lazily flew about.",
        location: "Angers, France",
        cloudflareId: "9b5ca11d-1570-4d09-7a38-afa0baad7900",
        position: [47.470, -0.556] as LatLngExpression,
        date: "8/11",
        iconType: "nature"
    },
    {
        title: "Sunset",
        desc: "The Loire was low this year, with massive patches of sand breaching the middle of this vital waterway. Still, the French made the most of it. I passed a number of picnic goers and people camped out on the banks. It was Friday night, and I could already hear sounds of revelry from celebrants further down the river. ",
        location: "Turquant, France",
        cloudflareId: "049dd76c-4ebf-4e0a-eef4-a2398f8d8800",
        position: [47.257, -0.0741] as LatLngExpression,
        date: "8/11",
        iconType: "nature"
    },
    {
        title: "Dinner of Champions",
        desc: "I didn't go dancing, but I enjoyed myself all the same. I walked by some French youths passed out in hammocks on my way to the riverbank where I set up camp and watched the sunset.",
        location: "Montsoreau, France",
        cloudflareId: "a2290404-7ae1-4475-dbc6-ede28f8cb600",
        position: [47.211, 0.0811] as LatLngExpression,
        date: "8/11",
        iconType: "camp"
    },
    {
        title: "Loire Campsite",
        desc: "This wildcamping spot was a little more exposed than I was used to, but some fallen trees made for good cover.",
        location: "Montsoreau, France",
        cloudflareId: "b287469a-d4b5-49d1-8f27-7ddc82aa9d00",
        position: [47.211, 0.0811] as LatLngExpression,
        date: "8/11",
        iconType: "camp"
    }
],
[ //Seg Four
    {
        title: "Forest Totem",
        desc: "Upon entering the woods, I came across this Owl Totem, roosting in a hollow stump. I gave a greeting, asked that he forgive my trespass in the forest, and was on my way.",
        location: "Reinhardsmunster, France",
        cloudflareId: "e7770e65-d7ce-45aa-e854-de92e8620100",
        position: [48.694, 7.311] as LatLngExpression,
        date: "8/22",
        iconType: "nature"
    },
    {
        title: "Gravel Grinder",
        desc: "The Traversée du Massif Vosgien is mostly gravel, and goes through the spine of the Vosges Mountians which make up France's eastern border with Germany. The cycling is sublime, but watch out for deerflies -- I was swarmed during several climbs.",
        location: "Oberhaslach, France",
        cloudflareId: "23c2066f-c718-4433-9c8e-828cd2007600",
        position: [48.565, 7.317] as LatLngExpression,
        date: "7/22",
        iconType: "journal"
    },
    {
        title: "Woodland Warning",
        desc: "At several points during the TMV, I came across these rustic signs. I love the suggestion that dangerous bobcats and friendly (?) badgers await you, should you venture left.",
        location: "Oberhaslach, France",
        cloudflareId: "6daacb47-f60b-40a4-e010-92cf6f00ae00",
        position: [48.565, 7.317] as LatLngExpression,
        date: "7/22",
        iconType: "journal"
    },
    {
        title: "Woodland Warning V2",
        desc: "Dangerous bobcats and stags on the right; butterflies (?) sharks (?); the wolf pack holds court somewhere to the east; the friendly hedgehog awaits you, no matter what direction you take.",
        location: "Oberhaslach, France",
        cloudflareId: "e5b96999-2088-417b-6538-69026c693c00",
        position: [48.565, 7.317] as LatLngExpression,
        date: "7/22",
        iconType: "journal"
    },
    {
        title: "Beers and Views",
        desc: "I camped out atop a ridge overlooking a small town. As I set up my tent, I saw a fox quickly cross an open pass between stands of trees. I was worried that the swarm of flies that had been shadowing me during the afternoon would re-appear, but the evening air was quiet and calm. I drank my beer in peace.",
        location: "Ottrot, France",
        cloudflareId: "004dc273-64c5-4f36-ddc5-1514c7adc900",
        position: [48.464, 7.409] as LatLngExpression,
        date: "8/22",
        iconType: "camp"
    },
    {
        title: "Half-Timber",
        desc: "The picturesque forests covering Alsace have given rise to a unique kind of timber frame architecture that's common in the region. Squint, and you might end up thinking you're occupying a German fairy tale.",
        location: "Sélestat, France",
        cloudflareId: "e0c63e24-4095-4714-e062-7c30e0f6e000",
        position: [48.251, 7.448] as LatLngExpression, 
        date: "8/23",
        iconType: "journal"
    },
    {
        title: "Vineyard",
        desc: "Vineyards are abundant between Colmar and Mulhouse. Refreshingly sweet blue-purple grapes with tough skins and sour seeds made for the perfect mid-ride snack.",
        location: "Bergheim, France",
        cloudflareId: "8b14e408-bf2a-4d0b-8aab-1c504bf98000",
        position: [48.208, 7.407] as LatLngExpression, 
        date: "8/23",
        iconType: "journal"
    }
],
[ //Seg 5
    {
        title: "Gravel Byway",
        desc: "The transition into the Jura Region of north-eastern Switzerland is dramatic. The flat plains outside Mulhouse give way to rolling hills speckled with working farms. An extremely well-signed network of bike paths and gravel trails leads over the horizon.",
        location: "Moutier, Switzerland",
        cloudflareId: "fb3be411-0d43-4d44-b5de-5c334f0bc700",
        position:  [47.29, 7.368] as LatLngExpression,
        date: "8/26",
        iconType: "journal"
    },
    {
        title: "Cow in the Way",
        desc: "Cattle are ubiquitous in Switzerland, and are often given free reign to explore their immediate environment. Each cow is equipped with their own bell, so that the animals can be easily located and rounded up, come nightfall. Their sound is ceaseless -- bring some earplugs or you'll be listening to their gentle chimes all through the night.",
        location: "Moutier, Switzerland",
        cloudflareId: "0b54375e-5d42-4895-3569-aca95981a000",
        position:  [47.29, 7.368] as LatLngExpression,
        date: "8/26",
        iconType: "animal"
    },
    {
        title: "Climb Central",
        desc: "The route thus far has been fairly approachable. Outside of the Vosges mountains in Alsace, there weren't many days where I climbed over 3000 ft. This changed in Switzerland. Any bike route that doesn't follow a body of water will unfailingly contain several heavy climbs.",
        location: "Sonceboz-Sombeval, Switzerland",
        cloudflareId: "4959ccc8-3909-4cb6-e44d-d54b42a87e00",
        position:  [47.188, 7.182] as LatLngExpression,
        date: "8/27",
        iconType: "journal"
    },
    {
        title: "Close Calls",
        desc: "The Swiss Jura Explorer Route is a gravel loop that provides a great way to traverse north-western Switzerland. Dense forests with well-kept trails are available to any willing to tackle the punishing climbs.",
        location: "Biel/Benne, Switzerland",
        cloudflareId: "338359de-d819-4548-a9da-22f169e61e00",
        position:  [47.13, 7.158] as LatLngExpression,
        date: "8/28",
        iconType: "journal"
    },
    {
        title: "Swiss Signage",
        desc: "The Swiss cycling network is one of the best I found outside of Holland. Just about every spot in the country is accessible without sharing the road, especially for those willing to tackle some gnarly forested routes. This makes wild camping a cinch, since you're never too far from an off-road pathway.",
        location: "Lyssach, Switzerland",
        cloudflareId: "7c967806-4c59-4398-a30a-b050d78e8300",
        position:  [47.070, 7.566] as LatLngExpression,
        date: "8/29",
        iconType: "journal"
    },
    {
        title: "Lost in the Woods",
        desc: "I tried to find the Emmental (Sweet and Sour With Cheese) route, but ended up getting lost after my gps ran out of battery. ",
        location: "Brandiswald, Switzerland",
        cloudflareId: "55c98c1e-37f5-4ae1-1595-355f439a8b00",
        position:  [46.977, 7.649] as LatLngExpression,
        date: "8/30",
        iconType: "nature"
    },
    {
        title: "Valley Pass",
        desc: "Switzerland is an exceedingly peaceful country. All the farms I visited were quiet, and well-kept. The towns were sedate, save for a bit of bustle. The roads were immaculate. The air smelled good and the water was delicious. This is probably where I was happiest.",
        location: "Oberdiessbach, Switzerland",
        cloudflareId: "f909e644-ed1e-4b38-fb87-e4b425d85300",
        position:  [46.848, 7.620] as LatLngExpression,
        date: "8/30",
        iconType: "nature"
    },
    {
        title: "Lake District",
        desc: "Two Alpine Lakes, the Brienzersee and the Thunersee make up one of the most popular tourist attractions in Switzerland. Glacial runoff from the nearby mountains provides a consistent water source for these beauties, and is the cause of the distinctive blue coloring. Free parks and docks surround the lakes, inviting visitors to take a dip.",
        location: "Interlaken, Switzerland",
        cloudflareId: "9d1c95ab-1312-4bb3-d2d1-e8c905ebe800",
        position: [46.662, 7.740] as LatLngExpression,
        date: "8/30",
        iconType: "nature"
    },
    {
        title: "Rainbow",
        desc: "I was caught in a storm at the tail end of the day, but kept dry by hiding under a lawyer's office awning. The storm lasted about an hour, but on my departure I was met with a beautiful rainbow.",
        location: "Brienz, Switzerland",
        cloudflareId: "870d3f9d-a6fc-43d4-8ad0-6e8a1f96eb00",
        position:  [46.738, 8.044] as LatLngExpression,       
        date: "8/30",
        iconType: "nature"
    },
    {
        title: "Grandhotel Giessbach",
        desc: "This picture-perfect alpine hotel looks straight out of a Wes Anderson picture. Many relics, like the building pictured, harken back to the \"Golden Age of Alpinism\" during the late 19th century when many peaks were first being summited.",
        location: "Meiringen, Switzerland",
        cloudflareId: "df43401c-619c-413a-21fc-927d7ff29600",
        position:  [46.729, 8.181] as LatLngExpression,
        date: "8/30",
        iconType: "monument"
    },
],
[ //Seg 6 
    {
        title: "Grimsel Pass Ascent",
        desc: "The Grimsel Pass is a beautiful road that leads up and over the Bernese Alps. It's one of the only ways to get from Switzerland to Milan, and is a definite challenge, gaining over 5000 feet of elevation over 15 or so miles. You'll be climbing for over an hour, but the views will be worth it.",
        location: "Innertkirchen, Switzerland",
        cloudflareId: "de54e145-c895-4650-60ed-dbbfee1fa700",
        position: [46.697, 8.236] as LatLngExpression,
        date: "8/31",
        iconType: "mountain"
    },
    {
        title: "Grimsel Peak",
        desc: "Reach the top of the first peak, and revel in the superiority of having cycled there, rather than driven. The mountains are a tourist hotspot, so there are plenty of places to refill on snacks and water before continuing the ascent.",
        location: "Innertkirchen, Switzerland",
        cloudflareId: "34ae07b6-eb56-4246-da0b-b84396418b00", 
        position: [46.573, 8.338] as LatLngExpression,
        date: "8/31",
        iconType: "mountain"
    },
    {
        title: "Alpine Bliss",
        desc: "",
        location: "Oberwald, Switzerland",
        cloudflareId: "00a8818a-b6e3-4f04-5bc6-f026ce2b6800",
        position:  [46.561, 8.346] as LatLngExpression,
        date: "8/31",
        iconType: "journal"
    },
    {
        title: "Furka Peak",
        desc: "After Grimsel comes Furka, another mountainous pass. You won't lose all the elevation you've gained thus far, but be prepared for some punchy 1-2k climbs up sharp switchbacks.  ",
        location: "Innertkirchen, Switzerland",
        cloudflareId: "2d2eeb90-8924-4b15-46e0-3f033e6e5d00", 
        position: [46.576, 8.388] as LatLngExpression,
        date: "9/1",
        iconType: "mountain"
    },
    {
        title: "Furka Pass Descent",
        desc: "The pavement that constitutes the Furka Pass looks languid, like Dali's melting clocks. A 3k ft descent is followed immediately by a 3k ascent -- give and take, all the way through.",
        location: "Obergoms, Switzerland",
        cloudflareId: "abf9caa5-032d-4397-e606-5ab48c029b00",
        position: [46.573, 8.416] as LatLngExpression,
        date: "9/1",
        iconType: "journal"
    },
    {
        title: "Alpine Town",
        desc: "The charming town of Andermatt is mostly known for being a world-class ski destination, but it has summer charms as well. Green fields and hiking trails snake off in all directions, inviting the intrepid to explore the fantastical landscape. Clear, freezing water flows through the center of the town; runoff from the nearby Rhone glacier. I slept a tiny hostel and tried to be unbothered by the pain in my quads.",
        location: "Andermatt, Switzerland",
        cloudflareId: "85d3e412-0684-4d9e-af36-997e518b8900",
        position: [46.632, 8.593] as LatLngExpression,
        date: "9/1",
        iconType: "journal"
    },
    {
        title: "Low Vis",
        desc: "I awoke to find the air a split-pea-soup-like consistency. Normally I have no issue with diving into the unknown, but slick cobblestones combined with the threat of hidden switchbacks made me hug my brake levers. ",
        location: "Airolo, Switzerland",
        cloudflareId: "c403bc86-8f4c-44d3-0e7e-a80d51c67100",
        position: [46.568, 8.557] as LatLngExpression,
        date: "9/2",
        iconType: "journal"
    },
    {
        title: "Gottardpass Descent",
        desc: "The final mountain pass of my trip through Switzerland, on my way to Switzerland's southern-most province of Ticino.",
        location: "Giornico, Switzerland",
        cloudflareId: "5828460d-9237-4d08-126d-9a7c36b1be00",
        position: [46.403, 8.871] as LatLngExpression,
        date: "9/2",
        iconType: "mountain"
    },
    {
        title: "Montebello Castle",
        desc: "",
        location: "Bellinzona, Switzerland",
        cloudflareId: "dc3d7897-13ec-448c-9b14-fbbe87077100",
        position: [46.192, 9.023] as LatLngExpression,
        date: "9/2",
        iconType: "monument"
    },
    {
        title: "Rainy Sunday Market",
        desc: "",
        location: "Bellinzona, Switzerland",
        cloudflareId: "003d3fe1-6023-4df2-1db3-e55a51f3d200",
        position: [46.192, 9.023] as LatLngExpression,
        date: "9/3",
        iconType: "journal"
    }
],
[ //Seg 7
    {
        title: "Lake Cruise",
        desc: "Lake Como is not like the lakes of Switzerland. There are no relaxed bike paths here -- prepare to share space with speeding cars on narrow roadways. Try to balance your desire to enjoy the lake's beauty with your desire to stay alive.",
        location: "Varenna, Italy",
        cloudflareId: "0a136cd7-2445-4f2b-1036-997e76cade00",
        position: [46.0105, 9.283] as LatLngExpression,
        date: "9/4",
        iconType: "journal"
    },      
    {
        title: "Riverside Chapel",
        desc: "That's not to say there's no respite to be found in Italy. In between dusty industrial roads you'll find some gems, like the small towns bordering the Adda River on the outskirts of Milan.",
        location: "Trezzo sull'Adda, Italy",
        cloudflareId: "d690fad9-0411-4a78-1851-da43ed582200",
        position: [45.611, 9.520] as LatLngExpression,
        date: "9/5",
        iconType: "monument"
    },    
    {
        title: "Garda",
        desc: "There's evidence of humans occupying the land around Lake Garda stretching back thousands of years. Millenia-old stilts have been found in the silt that rests on the perimeter of the lake, used to support rustic abodes. Detritus from the conflicts between Rome and Germanic tribes can be found scattered deep in the earth. Even Italy's foremost poet, Dante makes mention of the beautiful lake that is Garda.        ",
        location: "Cola, Italy",
        cloudflareId: "052798fb-aae4-4d60-3de2-d2b71824a200",
        position: [45.444, 10.673] as LatLngExpression,
        date: "9/8",
        iconType: "monument"
    },    
    {
        title: "Grottoes of Catullus",
        desc: "The vacation homes of today don't have anything on those of the past. Pictured is an ancient Roman villa who's construction dates back to the late Roman Republic. Cycling through the picturesque idyll, it's hard to believe that anyone would leave this place to subjugate the Gauls. The size of the estate is prodigious. It doesn't take much imagination to dream of the vaulted ceilings and sun-drenched patios that once stood here. ",
        location: "Sirmione, Italy",
        cloudflareId: "1cc5e765-46e0-4ebd-971a-a182f679bd00",
        position: [45.501, 10.60] as LatLngExpression,
        date: "9/8",
        iconType: "monument"
    },     
    {
        title: "Olive Grove",
        desc: "Olive trees do not possess a common beauty. Gnarled bark curls in on itself, giving the plant's outer texture an unsettling look, as if a mess of concentric circles. And yet, the olive tree carries a strong position in Italian folklore, as well as within the Italian economy. Though these trees lack the millenia-old history enjoyed by other Italian olive groves, one can still imagine the Romans of old having worked here.        ",
        location: "Sirmione, Italy",
        cloudflareId: "1eb28bc5-0f7c-4523-42ff-36cbef1fde00",
        position: [45.501, 10.60] as LatLngExpression,
        date: "9/8",
        iconType: "nature"
    },     
    {
        title: "Drenched",
        desc: "Through my trip, I had been lucky enough to avoid being caught out in the open during rainfall. The streak ended here. While climbing through a wooded thicket, I was caught in a microburst that soaked me to my socks. Grin and bear it, indeed!        ",
        location: "Dolcè, Italy",
        cloudflareId: "957c7ac9-dfcb-4653-bf60-528ef1ca9200",
        position: [45.543, 10.838] as LatLngExpression,
        date: "9/9",
        iconType: "journal"
    },   
    {
        title: "Feline Friend?",
        desc: "I stopped next to a church to wring out my shirt. There I met the church's owner, a cantankerous small cat who wasted no time with introductions. Her aggressive display didn't keep her from keeping me company while I enjoyed a (slightly damp) lunch.        ",
        location: "Sant'Anna d'Alfaedo, Italy",
        cloudflareId: "9ebe487e-50fa-4618-80bd-3c04df5a1c00",
        position: [45.644, 10.928] as LatLngExpression,
        date: "9/9",
        iconType: "animal"
    },     
    {
        title: "A Long Long Way to Bike",
        desc: "After a brutal ~5000ft climb, I arrived in Lessinia Park, aka, prime Sound of Music territory. Called a 'pre-alpine' environment, this Park sits at the foot of the Dolomites, and consists of rolling meadows and gentle valleys. This region is calm and peaceful -- a 180 from the hectic nature of Como and the greater Po River Valley.",
        location: "Parco della Lessinia, Italy",
        cloudflareId: "d317827a-6f44-4c7e-1e6c-3b212a181200",
        position: [45.692, 11.0567] as LatLngExpression,
        date: "9/9",
        iconType: "mountain"
    },
    {
        title: "Dinner of Champions",
        desc: "I found that I had left Lake Garda inadequately prepared. After the day's massive climb, finding a secluded mountainside cafe was like finding an oasis in the desert. Dinner that night was two anonymous Italian beers, and 3 salami sandwiches on white bread. It was the best-tasting food I ate in Italy.        ",
        location: "Parco della Lessinia, Italy",
        cloudflareId: "1236c670-3b0a-4ef9-d095-5ed7b9848400",
        position: [45.692, 11.0567] as LatLngExpression,
        date: "9/9",
        iconType: "journal"
    }, 
    {
        title: "Trench Line",
        desc: "Amazingly, this alpine landscape was made a battleground during WWI, when Austrian and Italian soldiers clashed near Italy's northern border. Today, the scars of Italian trench lines are still visible, having been hewn through solid rock into the earth. One can hardly imagine the effort required to complete such a feat.        ",
        location: "Parco della Lessinia, Italy",
        cloudflareId: "85d6f759-6ecb-416a-e7fe-c51b78c78c00",
        position: [45.714, 11.055] as LatLngExpression,
        date: "9/9",
        iconType: "monument"
    }, 
    {
        title: "Golden Hour",
        desc: "Lessina is not a massive park, but I took all day to traverse it, soaking in each view of the rolling green hills that stretched into the horizon. Quiet gravel paths with gentle slopes guided me forward.",
        location: "Parco della Lessinia, Italy",
        cloudflareId: "4ebc6bf9-4ada-4280-dffb-8627b9c34900",
        position: [45.714, 11.055] as LatLngExpression,
        date: "9/9",
        iconType: "nature"
    }, 
    {
        title: "Marmot!",
        desc: "Introducing the Alpine Marmot. About the size of your average housecat, I caught this little guy enjoying the sunset. He let me approach before scurrying along, back to his abode.        ",
        location: "Parco della Lessinia, Italy",
        cloudflareId: "5798563d-f133-43a8-dde6-e100ce68a100",
        position: [45.709, 11.058] as LatLngExpression,
        date: "9/9",
        iconType: "animal"
    },
    {
        title: "Dolomite",
        desc: "I truly cannot recommend a visit to this region of Italy enough. Though the trek to get there is anything but straightforward, this region lacks the bustle that made the rest of Italy so tiring to me. If quiet roads and bucolic landscapes are more your thing, be sure to check the Prealps out.        ",
        location: "Parco della Lessinia, Italy",
        cloudflareId: "4314735a-76a5-4a6c-81c1-ed3804a17b00",
        position: [45.681, 11.066] as LatLngExpression,
        date: "9/9",
        iconType: "mountain"
    }
],
[ //Seg 8
    {
        title: "Plains of Veneto",
        desc: "Following the loss of my spare bike tyres, I was forced to descend from the prealps and venture back into the Po River Valley. While the roads before me were more of the paved, high-traffic variety, they weren't without this beautiful view of the farms and small townships outside of Vicenza.        ",
        location: "Bedin Paolini, Italy",
        cloudflareId: "241f39a5-a453-448d-ba85-51feebc24f00",
        position: [45.476, 11.484] as LatLngExpression,
        date: "9/10",
        iconType: "journal"
    },
    {
        title: "Monte Berico Stairways",
        desc: "This ornate covered path leads to the Basilica of Monte Berico, where the blessed virgin is said to have been witnessed by a humble working man in the fifteenth century. There's not much of consequence to see, but to climb and descent alongside an ornate marble pathway is surely unique.         ",
        location: "Vicenza, Italy",
        cloudflareId: "d12bc385-09ff-4dad-d775-b34a5b0c6400",
        position: [45.537, 11.548] as LatLngExpression,
        date: "9/11",
        iconType: "journal"
    },
    {
        title: "Piazza dei Signori",
        desc: "Just like the way a beautiful woman sucks the air out of a room, the string of mid-sized Italian cities between Milan and Venice suck the air and money out of Northern Italy. This region, also known as the Po River Valley, is anathema to bike tourists like myself who 'want to see the places inbetween'. Because the places between Vicenza and Padua are boring. Dusty, flat, industrial landscape with no good through-route for cyclists leads to hours of boring, uneventful riding. But, if you play your cards right, you can spend your evenings having the time of your life in the Italian cities.",
        location: "Padua, Italy",
        cloudflareId: "48ac5825-8ede-4566-aef8-557c545fbb00",
        position: [45.407, 11.873] as LatLngExpression,
        date: "9/11",
        iconType: "journal"
    },
    {
        title: "Mosquito Coast",
        desc: "I slept on a beach outside of Venice, rather than pay the exorbitant price for Venice hotels. I was greeted by a gorgeous sunrise, followed by an encounter with more mosquitos than I've ever laid eyes on. The Venetian Lagoon is famous for surprising tourists with this feature, and though I've experienced my share of buggy seasons, the hoards of Venice were nothing short of biblical. Still, I swam in the ocean to start my day before sprinting back to my tent.        ",
        location: "Lido, Italy",
        cloudflareId: "f0f51e7a-7241-48f3-ea23-7eddd96efc00",
        position: [45.416, 12.380] as LatLngExpression,
        date: "9/13",
        iconType: "journal"
    },
    {
        title: "Dogal Spendor",
        desc: "The Doge's Palace is a relic of The Most Serene Venetian Republic that ruled over the lagoon for over a thousand years. The wealth of the former Italian city-state is on full display in the Doge's palace. Paintings from Titian and Veronese adorn the walls and ceiling. Vast collections of ornamental weapons, jewelry and other lavish goods are displayed inside. Physical artifacts give an understanding of the complexity of Venetian politics, like the meeting rooms for the Signoria, the Collegio and the council of ten.        ",
        location: "Venice, Italy",
        cloudflareId: "72f857c4-da66-4d54-79aa-2943bc666a00",
        position: [45.433, 12.339] as LatLngExpression,
        date: "9/13",
        iconType: "monument"
    },
    {
        title: "Love in the Air",
        desc: "I couldn't help but love Venice. Yes, the restaurants and shops feel like tourist traps. Yes, everything is ludicrously expensive. Yes, it can feel a bit disney-ish at times. But beneath that is a fascinating city with an extremely unique history. My favorite part of the day was riding around in the ferries that shuttle tourists to and fro, and taking the time to appreciate the strange romance of this floating city.        ",
        location: "Venice, Italy",
        cloudflareId: "c1735299-3112-40b8-47dd-b285d7b82a00",
        position: [45.433, 12.339] as LatLngExpression,
        date: "9/13",
        iconType: "monument"
    },
    {
        title: "Gondola",
        desc: "The only way to get around town.",
        location: "St. Mark's Plaza, Venice, Italy",
        cloudflareId: "9256da07-15c5-4cf6-5322-8a8b1c685e00",
        position: [45.433, 12.339] as LatLngExpression,
        date: "9/13",
        iconType: "monument"
    },
    {
        title: "Weedy Campsite",
        desc: "A note to any prospective Venetian wild campers -- it's very hard to find a good place to sleep anywhere near the city. This is true really anytime you're trying to find a good campsite near the coast. Luckily I found this little depression that gave me time to get a peaceful rest, but it was the product of a little over two hours of evening searching.        ",
        location: "Caorle, Italy",
        cloudflareId: "7f4d7f04-9ba8-40e4-d350-30d3bc36d100",
        position: [45.626, 12.893] as LatLngExpression,
        date: "9/14",
        iconType: "camp"
    },
],
[ //Seg 9
    {
        title: "Wine & Stay",
        desc: "I was greeted by rain upon entering Slovenia. Luckily I found a Wine & Stay, a lovely hotel on the outskirts of a border town called Gorizia. I spent a day drinking, moving inside and out to avoid the showers.        ",
        location: "Gorizia, Italy",
        cloudflareId: "306b5b11-8e03-4b63-806a-99e0fd9f4e00",
        position: [45.967, 13.612] as LatLngExpression,
        date: "9/15",
        iconType: "journal"
    },  
    {
        title: "Cloudside Camping",
        desc: "One of my favorite wild camping spots. Tired from a day of climbing, I walked off the road and into a grassy meadow, filled with sparse trees and patchy grass.",
        location: "Tolmin, Slovenia",
        cloudflareId: "32d7118c-390e-4991-47b8-2b13d6087b00",
        position: [46.183, 13.663] as LatLngExpression,
        date: "9/18",
        iconType: "camp"
    },    
    {
        title: "Exposure",
        desc: "The Slovenia West Loop is a gravel path with some serious climbs. Expect switchback upon switchback, but revel in the views you'll experience. Mountain meets sky in the distance.        ",
        location: "Kobarid, Slovenia",
        cloudflareId: "38b12e9a-1254-4f10-b2b3-3719df13b900",
        position: [46.249, 13.54] as LatLngExpression,
        date: "9/18",
        iconType: "journal"
    },    
    {
        title: "Vrši",
        desc: "Traversing Slovenia's north-eastern corridor means climbing the insane Vršič Pass (not pictured). This entails navigating over 50 hairpin switchbacks, and wearing out yet another set of brake pads. Rather than be assaulted by more mountainous views, enjoy this picturesque view of turquoise mountainous water.        ",
        location: "Kobarid, Slovenia",
        cloudflareId: "cefbb5fa-9537-4718-c8fa-20ab7176d800",
        position: [46.250, 13.496] as LatLngExpression,
        date: "9/18",
        iconType: "journal"
    },   
    {
        title: "Dr. Julius Kugy Monument",
        desc: "Mountaineer and advocate for peace between the bellicose populations of ethnic Austrians, Germans and Slovenians, Kugy is venerated today for his role in exploring the Julian Alps. He rests there still, looking out over the forested peaks from a quiet spot off the Vršič Pass.        ",
        location: "Soča Valley, Slovenia",
        cloudflareId: "5be9f633-ec7b-4e3c-db09-8f759546c100",
        position: [46.404, 13.742] as LatLngExpression,
        date: "9/19",
        iconType: "monument"
    },  
    {
        title: "Rest",
        desc: "It's like a different realm up there. Times like this, it really struck me how far I'd come. A long way from Holland's flat hills, indeed!        ",
        location: "Kranjska Gora, Slovenia",
        cloudflareId: "e74c7a97-12b5-4c7f-6bba-527a17887f00",
        position: [46.415, 13.741] as LatLngExpression,
        date: "9/19",
        iconType: "mountain"
    },     
    {
        title: "Mountain Sound",
        desc: "It took me a few hours of steady climbing to conquer Vršič. I couldn't have asked for a better day in the saddle. The sun streamed down, the elevation ticked up, and even the German camper vans were polite in transit.        ",
        location: "Kranjska Gora, Slovenia",
        cloudflareId: "5eafea34-f4e0-4ee0-8df8-56029b033a00",
        position: [46.441, 13.753] as LatLngExpression,
        date: "9/19",
        iconType: "mountain"
    },    
    {
        title: "Sponge Dinner",
        desc: "My prize after a day of climbing: an array of sponges! I kid -- there were several courses after this pictured, but it stands out as one of the better formal meals I had while in Europe. You just can't beat good bread and wine.        ",
        location: "Lake Bled, Slovenia",
        cloudflareId: "afbe1d1d-d494-4663-ab52-cda4e5f2f100",
        position: [46.369, 14.083] as LatLngExpression,
        date: "9/19",
        iconType: "mountain"
    },
    {
        title: "Island Chapel",
        desc: "Not to let Mont St. Michel have all the fun, Slovenia has its own island of worship in the center of Lake Bled. Like the French castle, the pictured chapel was erected on a small island partially for the defensive advantage that a lake-sized moat provides.        ",
        location: "Lake Bled, Slovenia",
        cloudflareId: "46f25b16-ac46-4ba4-4172-f17ecc11b900",
        position: [46.358, 14.088] as LatLngExpression,
        date: "9/20",
        iconType: "monument"
    },
    {
        title: "Arboreal Respite",
        desc: "East of Bled, the Slovenia West Loop starts to wind down. Most of the major climbs have passed at this point, and the dramatic alpine vistas give way to serene forest scenes. This broken-down picnic table gave me the perfect place to enjoy a peanut-butter sandwich beside an empty gravel byway.",
        location: "Medvode, Slovenia",
        cloudflareId: "b7bf3496-7956-48cb-8bef-0788cef9f000",
        position: [46.323, 14.192] as LatLngExpression,
        date: "9/20",
        iconType: "nature"
    },
    {
        title: "Above the Clouds",
        desc: "You might notice that all my photos from Slovenia are from the first half of my journey through the country. This is largely due to the Slovenia West Loop directing me towards dramatic vistas and bicycle-friendly gravel routes that provided ample opportunity for solid photos. The second half of the trip was a far more subdued journey though small Balkan towns on my way to Croatia. Still, I will never forget the sights of Triglav.        ",
        location: "Medvode, Slovenia",
        cloudflareId: "86181367-8e08-499f-960a-ce16280ce800",
        position: [46.123, 14.373] as LatLngExpression,
        date: "9/21",
        iconType: "nature"
    }
],
[ //Seg 10
    {
        title: "Safe Haven",
        desc: "I arrived at my lodging for my first night in Croatia after twelve hours of straight riding. Luckily, after sleeping off a chilly-late night arrival, I awoke to the soft sounds of a running stream. While I ate my morning eggs, I watched tiny fish dart between the rocks in the riverbed.        ",
        location: "Slunj, Croatia",
        cloudflareId: "c3362350-668d-4a3a-1ea3-37f8fb1fea00",
        position: [45.116, 15.585] as LatLngExpression,
        date: "9/24",
        iconType: "journal"
    },
    {
        title: "Gloomy Forest",
        desc: "Plitvice Lakes National Park is renowned for its crystal clear waters, but I'm here to advocate for its relatively clean gravel byways.        ",
        location: "Plitvička jezera, Croatia",
        cloudflareId: "9b10719e-4820-48ea-ff9a-e7709ef75f00",
        position: [ 44.862, 15.582] as LatLngExpression,
        date: "9/25",
        iconType: "nature"
    },
    {
        title: "Nor Glom of Night",
        desc: "I hit my first heavy rain in Croatia. Up to this point, I had largely been able to avoid getting wet through proper planning and hiding from the occasional surprise shower. The consistent showers in early October made this impossible, and I ended up getting soaked repeatedly as I trudged on to the coastline.",
        location: "Ličko Lešće, Croatia",
        cloudflareId: "9c579ccb-304d-4603-9792-ba9c8e784d00",
        position: [44.796, 15.330] as LatLngExpression,
        date: "9/25",
        iconType: "journal"
    },
    {
        title: "Interior Jungle",
        desc: "The interior of Croatia is often overlooked compared to the more developed coast, but inland has charms all its own. Here you'll find smaller towns and cozy accommodations, along with quintessential Balkan hospitality. The overflowing homemade breakfast buffets were well appreciated when it came time to conquer some hills.        ",
        location: "Otrić, Croatia",
        cloudflareId: "b855a2b5-50b3-4bf4-d295-f029f488d700",
        position: [ 44.249, 16.063] as LatLngExpression,
        date: "9/27",
        iconType: "mountain"
    },
    {
        title: "Crljivica Archelogical Site",
        desc: "An ancient necropolis rests beside a nondescript highway, with so few markings that one could easily drive right by it, and not know they were missing an archaeological site dating back to the Middle Ages. This site is home to a series of ancient mounds, wells and gravestones that tell the story of millenia of continuous human habitation.",
        location: "Cista Provo, Croatia",
        cloudflareId: "5a4842a9-610e-495c-faec-1d8f71946000",
        position: [43.515, 16.928] as LatLngExpression,
        date: "9/29",
        iconType: "journal"
    },
    {
        title: "Primeval Man",
        desc: "Dozens of gravestones, or 'Stećci', can be found at Cista Provo, each adorned with unique iconography. Crosses, flowers and groups of people are present alongside Keith Herring-like stick figures. I found myself drawn to these depictions more than the average gravestone. Who was this person, who was remembered, not by name, but for their horse-rearing ability? What kind of life did they lead?        ",
        location: "Cista Provo, Croatia",
        cloudflareId: "d8ebac04-9cec-4b8a-0f4f-365ea7129700",
        position: [43.515, 16.928] as LatLngExpression,
        date: "9/29",
        iconType: "journal"
    },
    {
        title: "Coastal Bliss",
        desc: "After a week of soggy inland traveling, I finally hit the coast alongside some sun. One main highway, Route 8, hugs the clifftop, while a string of seaside towns can be accessed by those brave enough to descend the steep switchbacks. Hats off to the road's engineers -- the mile or so between the road and the sea allows each town to feel like its own secluded piece of paradise.        ",
        location: "Zadvarje, Croatia",
        cloudflareId: "38e25ec0-86d8-419d-df28-6db2375a2100",
        position: [43.403, 16.889] as LatLngExpression,
        date: "9/30",
        iconType: "mountain"
    },
    {
        title: "Close Quarters",
        desc: "I found the bike routes in Croatia to be troubling. Eurovelo 8, which promises a continuous route around the Mediterranean, consistently pointed me to sandy beach passes, like the one pictured. While this could work on an unoccupied beach, the reality of trying to weave a loaded bike around fellow beachgoers while on sand is that I ended up doing a lot of walking.        ",
        location: "Baška Voda, Croatia",
        cloudflareId: "7b43b2f1-5ff7-4f18-de14-8d6db3c2f600",
        position: [43.355, 16.949] as LatLngExpression,
        date: "9/30",
        iconType: "journal"
    },
    {
        title: "Take a Break",
        desc: "In Makarska, I got two subsequent flat tyres. Then I found out my last spare tube had a hole in it. And that I had lost my patch kit somewhere in the last 1,000 km. This bothered me for a bit, as I was in a tiny town, and none of the residents I bothered had a fresh tube to sell. I calmed down though when I took a minute to enjoy the ocean view from my accommodation's rooftop. I felt foolish -- how could I be angry with a view like this?        ",
        location: "Makarska, Croatia",
        cloudflareId: "49eb8287-8128-438a-c79e-594799810500",
        position: [43.298, 17.015] as LatLngExpression,
        date: "9/30",
        iconType: "journal"
    },
    {
        title: "Sunset",
        desc: "There's a magic to racing along the coastline in Croatia that's hard to replicate elsewhere. Islands rise lazily out of the horizon.",
        location: "Baćina, Croatia",
        cloudflareId: "9c7ab8b5-55ea-495e-7c8a-6d325d6c7e00",
        position: [43.080, 17.388] as LatLngExpression,
        date: "10/1",
        iconType: "nature"
    },
    {
        title: "Gradual Descent",
        desc: "In order to avoid the double border crossing that would be required if I had headed straight down the coast, I took a ferry to the long skinny island of Hvar. Here, the Karstic landscape of exposed rock and stout shrubbery is augmented by the presence of lush pine forests and quintessential vistas.        ",
        location: "Janjina, Croatia",
        cloudflareId: "7d3a7d35-7cb9-4b11-d030-c51309bfff00",
        position: [42.946, 17.359] as LatLngExpression,
        date: "10/2",
        iconType: "nature"
    },
    {
        title: "City Wall",
        desc: "Originally built by the Republic of Dubrovnik in the 14th century, (but completed by the expansionist Venetian Republic in the 16th century), the Walls of Ston are a surprisingly well-preserved example of medieval fortification. I didn't enter myself, but I enjoyed watching my fellow tourists ascend the 1000 step staircases that extend into the surrounding hills.        ",
        location: "Ston, Croatia",
        cloudflareId: "56171c54-5cd1-4ff6-b4ca-d80d52b44700",
        position: [42.839, 17.698] as LatLngExpression,
        date: "10/2",
        iconType: "monument"
    },
],
[ //Seg 11
    {
        title: "Pink",
        desc: "The scenic views around Kotor Bay continued to offer that unique sense of Adriatic charm. The profusion of regional tourist activity have treated the surrounding area well, resulting in an abundance of well-kept homes and small hotels. The greenery is lush, and I get to enjoy another sunset as I navigate through the tight provincial streets.         ",
        location: "Herceg Novi, Montenegro",
        cloudflareId: "04149ed2-32f0-434a-1dc0-3f3bd989d800",
        position: [ 42.454, 18.5312] as LatLngExpression,
        date: "10/3",
        iconType: "journal"
    },
    {
        title: "Rozafa Castle",
        desc: "",
        location: "Shkodër, Albania",
        cloudflareId: "3ebe06cd-8068-442c-a39b-0d0132bfb600",
        position: [42.044, 19.490] as LatLngExpression,
        date: "10/4",
        iconType: "monument"
    },
    {
        title: "Public Works",
        desc: "The road quality in Albania can be hit or miss. I was pleasantly surprised by the main roads in Albania that hug the coastline: nothing but smooth asphalt, and wide shoulders that roused my American envy. Off the main roads, it's a different story.",
        location: "Rrogozhine, Albania",
        cloudflareId: "e9878229-1d1d-4abd-da96-a9b55e1a4b00",
        position: [41.067, 19.654] as LatLngExpression,
        date: "10/4",
        iconType: "journal"
    },
    {
        title: "Hilltop Fortifications",
        desc: "",
        location: "Berat, Albania",
        cloudflareId: "2241c3e5-c21e-465a-48c5-33ca40cf9000",
        position: [40.709, 19.939] as LatLngExpression,
        date: "10/7",
        iconType: "monument"
    },
    {
        title: "Cursed Croissant",
        desc: "The last meal I remember enjoying on my Bike Trip was an individually weapped, store bought chocolate croissant. It was a far cry from those produced by the pastry wizards of Western Europe, but I am not one to look down upon sugar and carbs. Following my departure from Berat, I developed a case of giardia, a relatively benign (if uncomfortable) gut infection that greatly reduced my enthusiasm for spending multiple hours a day far from a working restroom. ",
        location: "Berat, Albania",
        cloudflareId: "6fa2676b-3675-4ec0-f31a-da1ccf700b00",
        position: [40.709, 19.939] as LatLngExpression,
        date: "10/7",
        iconType: "journal"
    },
    {
        title: "Moments Before Disaster",
        desc: "Despite my physical state, I was convinced that I had to make it to Greece. My birthday was approaching, and I wanted to spend it in Ioannina, a city in Northern Greece. Ignoring my stomach cramps, and inability to retain water, I made a two-day route between Berat and Ioannina. I brought this plan up with my accomodation's hotelier, who  rebuked me, stating 'there's no road between Berat and Përmet'. I scoffed at this. Why let good advice get in the way of beautiful delusion?        ",
        location: "Çorovoda, Albania",
        cloudflareId: "1601001b-5da8-48fe-a469-076a75071200",
        position: [ 40.504, 20.226] as LatLngExpression,
        date: "10/8",
        iconType: "nature"
    },
    {
        title: "Goat Path",
        desc: "The hotelier was correct. There is no road between Berat and Përmet. Or, if there is, I didn't find it. Instead I found mile after mile of sandy, thorn-ridden goat track -- unrideable with my touring setup. I settled in for six hours of hike-a-bike. The hills were largely uninhabited. I passed one old woman who was minding a pair of donkeys tied up outside an old dwelling. We made eye contact, and she seemed surprised to see me, but we didn't exchange any words.        ",
        location: "Muzhakë, Albania",
        cloudflareId: "1b3598a5-6ad4-4579-fc59-f12753cdbe00",
        position: [ 40.392, 20.222 ] as LatLngExpression,
        date: "10/8",
        iconType: "nature"
    },
    {
        title: "Fading Light",
        desc: "Once the sun started to set, I began to descend from the mountain range I had unwittingly found myself crossing. The mountain-side was made up from large-panels of loosely-connected rock slabs -- making for a bone jarring descent as I re-mounted my bike. I reached my accommodation late in the night -- cold and sore and frazzled from a sketchy after-dusk gravel descent. Getting myself to Përmet (and to a working restroom) was one of the hardest things I've ever done.        ",
        location: "Muzhakë, Albania",
        cloudflareId: "4b2f1fbe-e2cb-4772-72e8-4e07393dd600",
        position: [ 40.356, 20.167 ] as LatLngExpression,
        date: "10/8",
        iconType: "mountain"
    },
    {
        title: "Streets After Rain",
        desc: "Lying on the edge of a lake, tucked into the mountains of Northern Greece, lies the small city of Ioannina. Rings of tight streets surround a bustling city centre, bolstered with activity from a nearby university. I decided to end the journey shortly after arriving here. My stomach bug was sapping all of my enthusiasm for riding, and I knew I wouldn't be able to enjoy Greece to its fullest extent. I booked a bus ticket to Athens, and spent a few days recuperating and wandering through the cobbled streets.        ",
        location: "Ioannina, Greece",
        cloudflareId: "b8606bac-9169-495f-1d97-05f09de52000",
        position: [39.670, 20.856] as LatLngExpression,
        date: "10/11",
        iconType: "journal"
    },
    {
        title: "End of Tour",
        desc: "What a journey! From Holland to Greece, almost entirely by bicycle. ",
        location: "Ioannina, Greece",
        cloudflareId: "87181588-1eb8-4498-d186-f45a3ad44e00",
        position: [39.670, 20.856] as LatLngExpression,
        date: "10/11",
        iconType: "journal"
    }
]];

export default PoiList;