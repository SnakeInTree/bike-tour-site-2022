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
                content: "forces you off the beaten track. Cycling doesn't allow for an unbroken ‘greatest hits of Europe’ tour the same way interrailing does; you can't fall asleep in Paris and wake up in Berlin. Instead, commit yourself to finding the hidden attractions that exist between popular spots. Europe is uniquely well suited for this type of wandering travel. You can’t go more than a couple dozen kilometres without tripping over a site of some interest, often complete with English signage."
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
                content: "made by Frost River, an old-school outdoor supply company based out of Minnesota. Their bags are made from a water-resistant waxed canvas that's finished with brass and leather for a classic look. Despite the fact that the bags were “water-resistant”, rather than fully waterproof, none of my belongings ever got damp, even after getting caught in a storm in central Croatia."
            },
            {
                header: "For shelter I used a Lunar Solo Backpacking Tent,",
                content: "from Six Moon Designs -- a minimal tent that weighs just over a pound-and-a-half. I found it comfortable, even despite the lack of excess room for my 6'4\" frame."
            },
            {
                header: "For sleep, I used a Hammock Gear Economy Quilt,",
                content: "which worked well for the most part. The 'economy' is accurate in this case, as this quilt was neither the lightest nor the warmest. I went through three sleeping pads on the trip -- two Klymit Static v2 pads, which both developed leaks around the valve, and one pad from a no-name supplier I bought in Italy. This too developed a series of hairpin leaks. I don't know what's wrong with me. I'm still on the hunt for a durable sleeping pad."
            } 
        ] as SectionContent[]
    },
    {
        sectionId: 3,
        title: "Sleeping",
        Icon: GiCampingTent,
        content: [
            {
                header: "I reliably camped out 3 to 5 times a week,",
                content: "first at registered campgrounds, then in any piece of secluded land I could find. Campsites are plentiful and reliably offer access to fresh water and a shower, but by the time I was in Switzerland I became tired of paying for the service. As I headed East, I became better at finding wild camping spots, and I never again had to pitch my tent amidst a field of RVs. "
            },
            {
                header: "Wild Camping is illegal,",
                content: "mostly. The fact of the matter is that you can sleep most anywhere if you set up late and break camp early. I tried to plan my daily ride to end somewhere wooded, or near a park or patch of forest that I could scour for an adequate sleeping place. This can lead to some stressful situations if you get unlucky, but if you're not picky about your sleeping position, a persistent search will often be rewarded."
            },
            {
                header: "When not camping, I rotated between a selection of hostels, hotels and homestays.",
                content: "Hostels can have a lovely atmosphere, but aren't always the right place to recuperate after hours in the saddle. I slept better on my worst night wild camping, than on my best night at a hostel. Hotels were reliable for offering a bit of luxury on what was otherwise a pretty rough-and-tumble journey. As summer faded and I headed east, accommodation prices dropped and I was able to score many cheap stays as well. In my segment-by-segment breakdown, I've mentioned my favourite spots, and those I wish I had avoided."
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
                content: "Yes! And no. Cycling for six hours a day is hard, but so is everyday life. For three months, I didn't have any responsibilities beyond sleeping, sightseeing and convincing myself to eat something besides bread and pastries. In fact, cycling for multiple hours a day was a good way to make the endeavor feel less indulgent than it really was."
            },
            {
                header: "Was it worth it?",
                content: "God yes. I still find myself daydreaming about riding through the countryside of faraway places. I can't wait to do it again."
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
                    content: "mean you'll never have to share space with cars. Look out for the LF Routes, Holland's long-distance bicycle route network that highlights the country's most scenic rides."
                },
                {
                    header: "Haarlem and Rotterdam",
                    content: "are first-rate tourist destinations with excellent food and museums. The canal systems are boatloads of fun to explore too.                     "
                },
                {
                    header: "Dutch seafood is sorely underloved.",
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
                    content: "is available through  Natuurkampeerterreinen (lit. Nature Camping Grounds). These campsites are scattered all over the country and offer a consistent level of amenity for a decent price. Prices vary per campsite. I paid 5-15 Euro per night. "
                },
                {
                    header: "The coast is densely populated",
                    content: "(as is Holland in general) and there are few in the way of forests to hide within. Wild campers beware."
                },
                {
                    header: "Most mid-size Dutch cities are replete with hostels",
                    content: "providing affordable dorm-style lodging. I stayed at Hostel ROOM Rotterdam and had a blast."
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
                    content: "- https://www.hollandcyclingroutes.com/long-distance-cycle-routes"
                },
                {
                    header: "Dutch Bike Route Planner",
                    content: "- https://www.hollandcyclingroutes.com/online-cycle-route-planner"
                },
                {
                    header: "Nature Campsites",
                    content: "- https://www.natuurkampeerterreinen.nl/"
                },
                {
                    header: "Bikepacking Holland",
                    content: "- https://www.bikepackingholland.nl/"
                },
                {
                    header: "ROOM Hostel, Rotterdam",
                    content: "- https://www.roomrotterdam.nl/"
                },
                {
                    header: "Stayokay Hostel Network",
                    content: "- https://www.stayokay.com/en"
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
                    content: "are two world-class tourist destinations. Don't let Colin Farrell's negative reviews of the Belgian countryside turn you away."
                },
                {
                    header: "The legacy of the Great War",
                    content: "is unavoidable in Belgium, especially as you head south. Stop by the museums and monuments in Ypres, and try to imagine the titanic struggle that took place here."
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
                    header: "Camping Jeugdstadion",
                    content: "is a lovely small campsite within walking distance of Ypres. The town itself is quiet, and you can quickly reach the restaurant district by following a series of forested paths."
                },
                {
                    header: "Hostel Uppelink", 
                    content: "has a beautiful location in central Ghent, and was clean and quiet. I slept in a dorm with a dozen other people, and had a lovely time."
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
                    content: "- http://www.jeugdstadion.be/E/index.php"
                },
                {
                    header: "Hostel Uppelink",
                    content: "- https://www.hosteluppelink.com/"
                },
                {
                    header: "Iconic Cycling Routes",
                    content: "- https://www.flandersbybike.com/plan-your-cycling-holiday"
                },
                {
                    header: "Interactive Bike Route Map",
                    content: "- https://ravel.wallonie.be/en/home/carte-interactive.html"
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
                    header: "Enjoy some crumbly castles",
                    content: "in Domfront and Les Andleys. No, not the kind of castle that the marquis lived in and thought about human nature. The type of castle that Philip II hung out in during the twelfth century while plotting against the English dogs. The kind that you'll be amazed is still standing."
                },
                {
                    header: "French bakeries",
                    content: "are just the best. Cheap and ubiquitous, the presence of the French bakery in just about every small town guarantees that you can get by on an >10 Euro peasant diet. Just don't expect to be able to get a coffee with your croissant. In France, especially in the countryside, the bakery and the café occupy unrelated niches of gastronomy."
                },
                {
                    header: "Mont Saint-Michel",
                    content: "s gorgeous and absolutely worth your time. Go early, beat the crowds, and, if needed, find somewhere off the mediaeval streets to duck into and avoid the tourist crunch that develops as the sun reaches its zenith."
                },
                {
                    header: "Normandy is replete with charming small towns,",
                    content: "in which, if you visit, I guarantee you'll be the only tourist. These towns may only have a single sight to see, and the only restaurant might close at 6PM, but I appreciated getting off the beaten path, if only for a short while. "
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
                    content: "are cheap budget hotels that I hid out in during rainy nights. I was generally pleased with the provided value, as was I with the breakfast buffet. Thanks to B&B Hotel’s generosity, I often began my day with bike bags stuffed with leftover unwanted breakfast rolls. "
                },
                {
                    header: "Flower Camping",
                    content: "is a network of upscale French campsites which came equipped with pools and large concession stands. The price was often higher than I would have liked, but the facilities were well-kept and always situated close to the nearest town."
                },
                {
                    header: "Le Balcon de la Baie Campsite,",
                    content: "near Mont Saint-Michel was lovely and offered a magnificent cliff top view of the abbey. I was surprised with an offer of a dinner of mussels and fries upon my arrival. "
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
                    content: "- https://en.francevelotourisme.com/cycle-route"
                },
                {
                    header: "Lodging finder for France, can be pricey!",
                    content: "- https://www.gites-de-france.com/en"
                },
                {
                    header: "Flower Camping",
                    content: "- https://en.flowercampings.com/"
                },
                {
                    header: "Le Balcon de la Baie Campsite",
                    content: "- https://www.lebalcondelabaie.com/en/"
                },
                {
                    header: "B&B Hotel",
                    content: "- https://www.hotel-bb.com/en"
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
                    header: "Cycling on established bike routes,",
                    content: "like the Veloscenic and the Francette, makes all the difference. Enjoy a peaceful meander south through shady, forest covered byways that connect the best tourist attractions in the Pays de la Loire."
                },
                {
                    header: "Wild camping",
                    content: "is simple, thanks to bike paths that run through forests and rural areas. Often I was able to follow the trail to a forested region and quickly find a spot to sleep a few hundred feet from the route."
                },
                {
                    header: "Cosmopolitan cities,",
                    content: "like Laval and Angers are the flavor of the day. Enjoy a preponderance of museums, fine dining spots and elegant urban gardens."
                },
                {
                    header: "Goodbye cramped castles, hello ostentatious estates.",
                    content: "The Loire Valley is home to some of the most recognizable French castles including Chambord, Angers and Villandry. I recommend you see the crumbling castles of Normandy first, because it might be hard to go back."
                },
            ] as SectionContent[]
        },
        {
            sectionId: 1,
            title: "Sleeping",
            Icon: GiCampingTent,
            content: [
                {
                    header: "Logis Hôtel la Marjolaine",
                    content: "was a lovely stately hotel I stayed in, as a treat. It's situated beside the Mayenne River, just outside the town of Moulay."
                },
                {
                    header: "I don't recall paying for camping",
                    content: "anywhere in the Loire. I found wild camping spots easily in the woods, and on riverbanks. I was also blessed with phenomenal mid-August weather for sleeping outdoors."
                },
            ] as SectionContent[]
        },
        {
            sectionId: 2,
            title: "Links",
            Icon: FaLink,
            content: [
                {
                    header: "La Véloscénie Bike Route",
                    content: "- https://www.veloscenic.com/"
                },
                {
                    header: "Vélo Francette Bike Route",
                    content: "- https://www.lavelofrancette.com/"
                },
                {
                    header: "Logis Hôtel la Marjolaine",
                    content: "- https://www.logishotels.com/en/hotel/logis-hotel-la-marjolaine-3863?partid=1535"
                },
            ] as SectionContent[]
        },
    ],
    [ //Alsace
        {
            sectionId: 0,
            title: "Highlights",
            Icon: GiPhotoCamera,
            content: [
                {
                    header: "The Traversée du Massif Vosgien (TMV)",
                    content: "is the main draw of this segment. Though I only stuck with it for a little under a hundred miles, the experience of riding through Vosges Mountains on forested paths was an incredible and unique experience."
                },
                {
                    header: "The vineyards south of Colmar",
                    content: "are large and rich, and offer a fine snack for the hungry cyclist."
                },
                {
                    header: "Due to Alsace's position on the Franco-German border,",
                    content: "the region has a unique atmosphere that distinguishes it from the rest of France. Enjoy a German beer while looking at the timber frame architecture that surrounds cobbled town streets."
                },
            ] as SectionContent[]
        },
        {
            sectionId: 1,
            title: "Sleeping",
            Icon: GiCampingTent,
            content: [
                {
                    header: "I stayed at the lovely Auberge Jeunesse in Saverne",
                    content: "before departing on the TMV. This hostel was situated on the seventh floor of an old schoolhouse, allowing rooms to overlook the peaceful town square. My room was lovely and breakfast was perfect -- I highly recommend."
                },
                {
                    header: "Once on the TMV, I wild camped for the most part.",
                    content: "Vacant forest ground abounds, and I enjoyed night after night of peaceful rest under the open sky."
                },
            ] as SectionContent[]
        },
        {
            sectionId: 2,
            title: "Links",
            Icon: FaLink,
            content: [
                {
                    header: "Auberge de Jeuness de Saverne",
                    content: "- https://www.auberge-jeunesse-saverne.fr/en/home/"
                },
                {
                    header: "The Traversée du Massif Vosgien Bikepacking Route",
                    content: "- https://bikepacking.com/routes/bikepacking-france-traversee-du-massif-vosgien/"
                },
            ] as SectionContent[]
        },
    ],
    [ //Bernese Switzerland
        {
            sectionId: 0,
            title: "Highlights",
            Icon: GiPhotoCamera,
            content: [
                {
                    header: "Western Switzerland is a land of unbelievable natural beauty.",
                    content: "Rolling green hills, forested mountains, crystal clear cerulean lakes. Get thirty minutes outside of any urban center, and you'll find yourself in a landscape straight from a fantasy novel."
                },
                {
                    header: "Switzerland has an underrated network of bike routes",
                    content: "that stretches across the country, offering car-free access to just about anywhere."
                },
                {
                    header: "Off-road cycling is huge in Switzerland,",
                    content: "and routes like the Swiss Jura Explorer and Emmental Loop offer great excuses to get off the beaten path. The climbing is, as you might expect, completely insane, but the views and subsequent descents make enduring the quad pain worthwhile."
                },
            ] as SectionContent[]
        },
        {
            sectionId: 1,
            title: "Sleeping",
            Icon: GiCampingTent,
            content: [
                {
                    header: "The Lago Lodge Hostel",
                    content: "in Biel / Bienne is lovely, with quiet rooms and an amazing kitchen/outdoor bar combo."
                },
                {
                    header: "The Art Deco Hotel Elite,",
                    content: "also in Biel / Bienne, which I stayed in to recover from the climbs of the Swiss Jura Explorer. Lovely, large and in the center of town. "
                },
                {
                    header: "Wild camping is pretty easy here.",
                    content: "In addition to the phenomenal cycling route network, Switzerland also offers a national hiking path network that connects most of the country. More than once I found a camping spot by walking my bike a few hundred feet down the nearest trail."
                },
            ] as SectionContent[]
        },
        {
            sectionId: 2,
            title: "Links",
            Icon: FaLink,
            content: [
                {
                    header: "Swiss Bike/Hiking Route Network",
                    content: "- https://schweizmobil.ch/en/summer"
                },
                {
                    header: "Swiss Jura Explorer Bikepacking Route",
                    content: "- https://bikepacking.com/routes/swiss-jura-explorer/"
                },
                {
                    header: "Emmental (Sweet and Sour With Cheese) Bikepacking Route",
                    content: "- https://bikepacking.com/routes/emmental-switzerland/"
                },
                {
                    header: "The Art Deco Hotel Elite",
                    content: "- https://elite-biel.com/"
                },
                {
                    header: "The Lago Lodge Hostel",
                    content: "- https://www.lagolodge.ch/en/"
                },
            ] as SectionContent[]
        },
    ],
    [ //Alpine Switzerland
    {
        sectionId: 0,
        title: "Highlights",
        Icon: GiPhotoCamera,
        content: [
            {
                header: "Climbing the Alps",
                content: "via mountainous crossings like the Grimsel Pass and the Furka Pass should be on the bucket list of any cyclist looking for a challenge. The way up is brutal, but the way down is simply sublime."
            },
            {
                header: "Enjoy the high-altitude culture of Alpine towns",
                content: "like Andermatt and Hospental. Even if it isn't skiing season, you'll still find tons to do. "
            },
            {
                header: "The Italian-speaking southern province of Ticino",
                content: "possesses a unique character, and moves at a different pace to the French and German-speaking parts of Switzerland. Ticino's well-preserved capital city, Bellinzona, is also gorgeous and absolutely worth visiting."
            },
        ] as SectionContent[]
    },
    {
        sectionId: 1,
        title: "Sleeping",
        Icon: GiCampingTent,
        content: [
            {
                header: "The Hotel Grimsel Hospiz",
                content: "is a pricey but beautiful alpine hotel that rests at the peak of the Grimsel Pass. If you've ever wanted to stay at the Grand Budapest Hotel, this is just about the closest you can get. "
            },
            {
                header: "Jugendherberge Hospental",
                content: "is an unfussy youth hostel in Hospental that offers dorm beds and filling meals within a cozy small-town setting. The atmosphere was pleasant and welcoming and I couldn't recommend this place enough."
            },
            {
                header: "Ostello Montebello - Bellinzona Youth Hostel",
                content: "Another great, fairly spacious hostel."
            },
            {
                header: "Wild camping isn't a great idea here.",
                content: "There's little in the way of unexposed flat ground where you could avoid detection. Also, it's cold and misty in the peaks. I recommend finding alternative accommodations; doubly so for those without robust sleeping systems. "
            },
        ] as SectionContent[]
    },
    {
        sectionId: 2,
        title: "Links",
        Icon: FaLink,
        content: [
            {
                header: "Swiss National Bike Route 8, Stage 1 (Grimselpass)",
                content: "- https://schweizmobil.ch/en/cycling-in-switzerland/route-8/stage-1"
            },
            {
                header: "Swiss National Bike Route 1, Stage 1 (Furkapass)",
                content: "- https://schweizmobil.ch/en/cycling-in-switzerland/route-1/stage-1"
            },
            {
                header: "Hotel Grimsel Hospiz",
                content: "- https://www.grimselwelt.ch/en/hotels/grimsel-hospiz/"
            },
            {
                header: "Jugendherberge Hospental",
                content: "- https://www.jugendherberge-hospental.ch/news"
            },
            {
                header: "Ostello Montebello - Bellinzona Youth Hostel",
                content: "- http://ostellomontebello.ch/en/homepage/"
            }
            
        ] as SectionContent[]
    },
    ],
    [ //Lombardy
    {
        sectionId: 0,
        title: "Highlights",
        Icon: GiPhotoCamera,
        content: [
            {
                header: "The lake towns of Como and Bellagio",
                content: "possess a unique rarified aire, even if not one particularly suited to cyclists. Find a bench near the shore, buy an ice-cream and watch the yachts and sailboats drift by."
            },
            {
                header: "Lake Garda is gorgeous and far calmer than those lakes nearer to Milan.",
                content: "Numerous Roman relics, including the Grottoes of Catullus, surround the lake and give some insight as to life in Northern Italy centuries ago. "
            },
            {
                header: "The Veneto Divide Bikepacking route",
                content: "begins on the eastern shore of Lake Garda and picks its way up some beguiling elevation to the heights of the Dolomites. I only made it a few hundred kilometers in, but my time on the route comprised some of the best riding of my entire tour."
            },
            {
                header: "The Parco Naturale Regionale della Lessinia",
                content: " is a massive reserve that offers some respite after the challenging climb from Lake Garda. The roads here are flowy, chalk-white gravel, and made for excellent stress-free cycling after the chaos of the lake district. "
            },
        ] as SectionContent[]
    },
    {
        sectionId: 1,
        title: "Sleeping",
        Icon: GiCampingTent,
        content: [
            {
                header: "I found the areas east of Milan to be dry,",
                content: "and largely devoid of adequate cover for wild camping. Once I climbed into the hills east of Lake Garda I had more luck in finding scrubby brush to hide in, but pickings remained slim. "
            },
            {
                header: "The string of Italian cities that stretches between Milan and Venice",
                content: " includes some of Italy's most tourist spots, like Verona and Brescia. In retrospect, I would have used some of the hostels in these towns, rather than the quieter spots I ended up patronizing. "
            },
            {
                header: "7 Vizi Bed and Breakfast",
                content: "was a perfectly lovely spot in Cola, just east of Lake Garda. The Grottoes of Catullus were within cycling distance, as were a number a beaches and solid restaurants. "
            }
        ] as SectionContent[]
    },
    {
        sectionId: 2,
        title: "Links",
        Icon: FaLink,
        content: [
            {
                header: "Veneto Divide Bikepacking Route",
                content: "- https://bikepacking.com/routes/veneto-divide/"
            },
            {
                header: "Meet Garda Lake Hostel",
                content: "- https://www.meethostel.com/en/"
            },
            {
                header: "7 Vizi Bed and Breakfast",
                content: "- https://www.7vizi.it/en/"
            }
        ] as SectionContent[]
    },
    ],
    [ //Veneto
    {
        sectionId: 0,
        title: "Highlights",
        Icon: GiPhotoCamera,
        content: [
            {
                header: "The towns of Vicenza and Padova",
                content: "are really what you want to come to Italy for. Don't come to muck around the Po River Valley. Throw your bike on the train, take a load off, and spend a few days imbibing the great wine of this region. "
            },
            {
                header: "Venice is not overrated,",
                content: "so long as you still still have a pulse and your lungs still draw breath. The architecture is stunning, the history on display is wonderfully involved and the experience of exploring this flooded city was one of the highlights of my trip. "
            },
        ] as SectionContent[]
    },
    {
        sectionId: 1,
        title: "Sleeping",
        Icon: GiCampingTent,
        content: [
            {
                header: "My same warnings",
                content: "regarding wild camping in Lombardy apply here. Don’t expect to easily find camping spots on the coast. Don’t sleep on a beach next to Venice. You will have to be stealthy and when you wake up the mosquitoes will eat you alive."
            },
            {
                header: "In Gorizia, I stayed at the Klanjscek Wine & Stay",
                content: " for two nights to avoid a passing storm. The vineyards were gorgeous and the wine on offer was sublime.  "
            },
            
        ] as SectionContent[]
    },
    {
        sectionId: 2,
        title: "Links",
        Icon: FaLink,
        content: [
            {
                header: "Klanjscek Wine & Stay",
                content: "- https://www.klanjscek.it/it/"
            },
        ] as SectionContent[]
    },
    ],
    [ //Slovenia
    {
        sectionId: 0,
        title: "Highlights",
        Icon: GiPhotoCamera,
        content: [
            {
                header: "The Slovenia West Bikepacking Loop",
                content: " is a phenomenal way to see the country. Starting in the south west, my route took me through the densely forested western regions, north to Triglav National Park, and south east to end in Ljubljana. "
            },
            {
                header: "Triglav National Park ",
                content: "is an incredibly dynamic landscape, characterized by towering Alpine Peaks, pristine forests and crystal clear rivers. "
            },
            {
                header: "Intense climbs like the Vršič Pass ",
                content: " will spice up your ride and give you something to brag about after you reach the peak. This ten kilometer climb gains over 700 meters of straight elevation, and is all the more difficult with a loaded bike. "
            },
            {
                header: "Of all the countries I saw in Europe, Slovenia is where I felt closest to nature.",
                content: "With a relatively small population and wide expanses of forest, it was common to go hours of cycling through quiet roads underneath dense tree canopy without seeing a soul. If you need a place to get away from it all, but still want to retire at a cozy lodge each night, Slovenia is your best bet. "
            },
        ] as SectionContent[]
    },
    {
        sectionId: 1,
        title: "Sleeping",
        Icon: GiCampingTent,
        content: [
            {
                header: "Slovenia is the best country for wild camping",
                content: "that I had the pleasure of cycling through. The western regions are heavily forested, and I never had an issue finding a secluded, beautiful place to set up camp. Note that Triglav and Lake Bled are thick with park rangers."
            },
            {
                header: "Hotel Triglav Bled",
                content: " is a lovely spot with a phenomenal dinner and breakfast on offer. The experience of eating a succession of fine dishes while watching the sunset over Lake Bled will stick with me for years to come.  "
            },
            {
                header: "Hotel Lipa",
                content: "was a comfortable spot on the Italian-Slovenian Border that I used to avoid passing showers in early September.  "
            }
        ] as SectionContent[]
    },
    {
        sectionId: 2,
        title: "Links",
        Icon: FaLink,
        content: [
            {
                header: "Slovenia West Loop Bikepacking Route",
                content: "- https://bikepacking.com/routes/bikepacking-slovenia/"
            },
            {
                header: "Slovenia Travel Guide",
                content: "- https://www.slovenia.info/en"
            },
            {
                header: "Hotel Lipa",
                content: "- https://hotellipa.com/en/hotel/"
            },
            {
                header: "Hotel Triglav Bled",
                content: "- https://www.hoteltriglavbled.si/"
            },
            {
                header: "One66 Hotel ",
                content: "- https://www.one66hotel.com/"
            }
        ] as SectionContent[]
    },
    ],
    [ //Croatia
    {
        sectionId: 0,
        title: "Highlights",
        Icon: GiPhotoCamera,
        content: [
            {
                header: "Eurovelo 8 is a wonderful way to experience Croatia",
                content: " by bike, sticking close to the Adriatic and directing cyclists to all the sights on the coast. "
            },
            {
                header: "Plitvice National Park is a lush and gorgeous spot ",
                content: "in central Croatia, with plenty of gravel paths to reward adventurous cyclists.  "
            },
            {
                header: "Riding across the Croatian island of Hvar is like riding the coast,",
                content: " but better, since you're sandwiched by coastlines! A lovely ride, especially for those who are not afraid of some serious climbs. "
            },
            {
                header: "Balkan hospitality is a step above what is on offer in Western Europe.",
                content: "Expect warm welcomes, breakfast tables overflowing with fresh fruits and vittles, and offers of coffee and wine wherever you go. "
            },
        ] as SectionContent[]
    },
    {
        sectionId: 1,
        title: "Sleeping",
        Icon: GiCampingTent,
        content: [
            {
                header: "At this point in my ride, it was mid-September,",
                content: "and temperatures were reliably trending towards freezing in the nights. South of Slunj, I made a decided switch toward sleeping indoors, rather than camping. Accommodation costs are reliably lower in the Balkans, even on the coast, so this approach didn't sting too much financially."
            },
            {
                header: "Guest House Vučeta",
                content: "was charming and was run by some extremely kind and accommodating folks. "
            },
            {
                header: "Corona B&B",
                content: "in Sinj was modern and wonderfully clean."
            },
            {
                header: "Villa Riki",
                content: "in Živogošće, where I stayed after I popped three tyres in quick succession, was perfect and had a sublime view of the coast from the balcony. "
            },
        ] as SectionContent[]
    },
    {
        sectionId: 2,
        title: "Links",
        Icon: FaLink,
        content: [
            {
                header: "Croatian Segment of Eurovelo 8",
                content: "- https://eurovelo8.hr/en/"
            },
        ] as SectionContent[]
    },
    ],
    [ //South Balkans
    {
        sectionId: 0,
        title: "Highlights",
        Icon: GiPhotoCamera,
        content: [
            {
                header: "Coastal cycling is always an easy win with me.",
                content: "The views of the Adriatic that were so captivating in Croatia are still on full display in Montenegro, and into Albania."
            },
            {
                header: "Relics of a difficult history are everywhere in the Balkans,",
                content: " from the monuments to those lost in internecine conflicts of the late 90s, to the scarred castles and mosques created during centuries of Ottoman Rule. "
            },
            {
                header: "Ioannina is a lovely city to end a bike tour with.",
                content: "Sunny, tucked away in the mountains and seated next to a spectacular lake, I couldn’t have asked for a better spot to be afflicted with an intestinal virus. "
            },
            
        ] as SectionContent[]
    },
    {
        sectionId: 1,
        title: "Sleeping",
        Icon: GiCampingTent,
        content: [
            {
                header: "October in the southern Balkans",
                content: "isn't exactly warm, but it's also not cold. By this point in the tour, I had become something of a creature of comfort. The properties listed below are those I patronized and recommend for anyone traveling through the region."
            },
            {
                header: "Drini Hotel",
                content: "in Durrës, Albania."
            },
            {
                header: "Guesthouse Anila",
                content: "in Divjakë, Albania."
            },
            {
                header: "Guesthouse Belle View",
                content: "in Berat, Albania."
            },
            {
                header: "Kastro Guesthouse",
                content: "in Ioannina, Greece (This place was absolutely amazing and had a wonderful host)."
            },
        ] as SectionContent[]
    },
    ],
] as InfoPanelSection[][];

export {
    HomeScreenSectionContent,
    SegmentSectionContentList
};