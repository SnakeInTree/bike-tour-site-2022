import { Statistic } from "@/store/models";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiCookie } from "react-icons/bi";
import { BsSignpostSplit, BsThermometerSun, BsFillCloudRainHeavyFill } from "react-icons/bs";
import { FaStroopwafel, FaSwimmer, FaBell, FaMountain, FaCarCrash, FaWineGlass } from "react-icons/fa";
import { GiBread, GiPathDistance, GiCastle, GiBeerStein, GiCastleRuins, GiFly, GiTreasureMap, GiCroissant, GiFlatTire, GiGrapes, GiSmokeBomb, GiCruiser, GiWaveCrest, GiForestCamp } from "react-icons/gi";
import { RxPinBottom } from "react-icons/rx";
import { TbStairsUp, TbMountain } from "react-icons/tb";
import {IoMdBeer} from "react-icons/io";
import {MdSick} from "react-icons/md";

const introStats = [
    {
        name: "DISTANCE",
        value: "4,363 KM",
        icon: GiPathDistance
    },
    {
        name: "DAYS",
        value: "90",
        icon: AiOutlineClockCircle
    },
    {
        name: "# OF COUNTRIES",
        value: "10",
        icon: BsSignpostSplit
    },
    {
        name: "TOTAL ASCENT",
        value: "2,000 M",
        icon: TbStairsUp
    },
    {
        name: "HIGH POINT",
        value: "4,000 M",
        icon: TbMountain
    },
    {
        name: "# OF BAGUETTES",
        value: "INF.",
        icon: GiBread
    }
] as Statistic[];

const segmentStats = [
    [ //Holland Stats
        {
            name: "DISTANCE",
            value: "311 KM",
            icon: GiPathDistance
        },
        {
            name: "Days",
            value: "7",
            icon: AiOutlineClockCircle
        },
        {
            name: "Low Point",
            value: "-6 M.",
            icon: RxPinBottom
        },
        {
            name: "TOTAL ASCENT",
            value: "655 M",
            icon: TbStairsUp
        },
        {
            name: "HIGH POINT",
            value: "12 M",
            icon: TbMountain
        },
        {
            name: "Cookies enjoyed daily",
            value: "1 - 2",
            icon: BiCookie
        }
    ],
    [ //Belgium Stats
        {
            name: "DISTANCE",
            value: "175 KM",
            icon: GiPathDistance
        },
        {
            name: "Days",
            value: "3",
            icon: AiOutlineClockCircle
        },
        {
            name: "Beverages imbibed",
            value: "++",
            icon: IoMdBeer
        },
        {
            name: "TOTAL ASCENT",
            value: "442 M",
            icon: TbStairsUp
        },
        {
            name: "HIGH POINT",
            value: "70 M",
            icon: TbMountain
        },
        {
            name: "Waffles devoured",
            value: "> 10",
            icon: FaStroopwafel
        }
    ],
    [ //Normandy Stats
        {
            name: "DISTANCE",
            value: "568 KM",
            icon: GiPathDistance
        },
        {
            name: "Days",
            value: "8",
            icon: AiOutlineClockCircle
        },
        {
            name: "Ruins Visited",
            value: "8",
            icon: GiCastleRuins
        },
        {
            name: "TOTAL ASCENT",
            value: "3,800 M",
            icon: TbStairsUp
        },
        {
            name: "HIGH POINT",
            value: "408 M",
            icon: TbMountain
        },
        {
            name: "Highest Recorded Temp.",
            value: "35° C",
            icon: BsThermometerSun
        }
    ],
    [ //Loire Stats
        {
            name: "DISTANCE",
            value: "312 KM",
            icon: GiPathDistance
        },
        {
            name: "Days",
            value: "6",
            icon: AiOutlineClockCircle
        },
        {
            name: "Riverside Beers",
            value: "8",
            icon: GiBeerStein
        },
        {
            name: "TOTAL ASCENT",
            value: "1,905 M",
            icon: TbStairsUp
        },
        {
            name: "HIGH POINT",
            value: "163 M",
            icon: TbMountain
        },
        {
            name: "Castles Visited", //Beers
            value: "5",
            icon: GiCastle
        }
    ],
    [ //Alsace Stats
        {
            name: "DISTANCE",
            value: "321 KM",
            icon: GiPathDistance
        },
        {
            name: "Days",
            value: "4",
            icon: AiOutlineClockCircle
        },
        {
            name: "Bunches of Grapes Rustled",
            value: "> 15",
            icon: GiGrapes
        },
        {
            name: "TOTAL ASCENT",
            value: "7,109 M",
            icon: TbStairsUp
        },
        {
            name: "HIGH POINT",
            value: "814 M",
            icon: TbMountain
        },
        {
            name: "# of Deerflies Encountered",
            value: "14k (approx.)",
            icon: GiFly
        }
    ],
    [ //Bern Stats
        {
            name: "DISTANCE",
            value: "223 KM",
            icon: GiPathDistance
        },
        {
            name: "Days",
            value: "5",
            icon: AiOutlineClockCircle
        },
        {
            name: "Cow's Favorite Instrument?",
            value: "BELL",
            icon: FaBell
        },
        {
            name: "TOTAL ASCENT",
            value: "4,450 M",
            icon: TbStairsUp
        },
        {
            name: "HIGH POINT",
            value: "1,305 M",
            icon: TbMountain
        },
        {
            name: "Lakeside Swims",
            value: "3",
            icon: FaSwimmer
        }
    ],
    [ //Alps Stats
        {
            name: "DISTANCE",
            value: "193 KM",
            icon: GiPathDistance
        },
        {
            name: "Days",
            value: "3",
            icon: AiOutlineClockCircle
        },
        {
            name: "Mountain Passes Climbed",
            value: "3",
            icon: FaMountain
        },
        {
            name: "TOTAL ASCENT",
            value: "3,800 M",
            icon: TbStairsUp
        },
        {
            name: "HIGH POINT",
            value: "2,414 M",
            icon: TbMountain
        },
        {
            name: "Brake Pads Worn Out",
            value: "2",
            icon: GiSmokeBomb
        }
    ],
    [ //Lombardy Stats
        {
            name: "DISTANCE",
            value: "300 KM",
            icon: GiPathDistance
        },
        {
            name: "Days",
            value: "6",
            icon: AiOutlineClockCircle
        },
        {
            name: "# of Lake Cruises",
            value: "3",
            icon: GiCruiser
        },
        {
            name: "TOTAL ASCENT",
            value: "3,410 M",
            icon: TbStairsUp
        },
        {
            name: "HIGH POINT",
            value: "1,715 M",
            icon: TbMountain
        },
        {
            name: "# of Near Misses",
            value: "TOO MANY",
            icon: FaCarCrash
        }
    ],
    [ //Veneto Stats
        {
            name: "DISTANCE",
            value: "352 KM",
            icon: GiPathDistance
        },
        {
            name: "Days",
            value: "5",
            icon: AiOutlineClockCircle
        },
        {
            name: "Fine Wines Enjoyed ",
            value: "> 10",
            icon: FaWineGlass
        },
        {
            name: "TOTAL ASCENT",
            value: "940 M",
            icon: TbStairsUp
        },
        {
            name: "HIGH POINT",
            value: "777 M",
            icon: TbMountain
        },
        {
            name: "# of Dips in the Sea",
            value: "1",
            icon: GiWaveCrest
        }
    ],
    [ //Slovenia Stats
        {
            name: "DISTANCE",
            value: "405 KM",
            icon: GiPathDistance
        },
        {
            name: "Days",
            value: "9",
            icon: AiOutlineClockCircle
        },
        {
            name: "Nights under the Stars",
            value: "7",
            icon: GiForestCamp
        },
        {
            name: "TOTAL ASCENT",
            value: "9,040 M",
            icon: TbStairsUp
        },
        {
            name: "HIGH POINT",
            value: "1,665 M",
            icon: TbMountain
        },
        {
            name: "Böreks Enjoyed",
            value: "> 15",
            icon: GiCroissant
        }
    ],
    [ //Croatia Stats
        {
            name: "DISTANCE",
            value: "656 KM",
            icon: GiPathDistance
        },
        {
            name: "Days",
            value: "9",
            icon: AiOutlineClockCircle
        },
        {
            name: "# of Rainy Days",
            value: "6",
            icon: BsFillCloudRainHeavyFill
        },
        {
            name: "TOTAL ASCENT",
            value: "9,390 M",
            icon: TbStairsUp
        },
        {
            name: "HIGH POINT",
            value: "847 M",
            icon: TbMountain
        },
        {
            name: "Flat Tyres",
            value: "4",
            icon: GiFlatTire
        }
    ],
    [ //South Balkans Stats
        {
            name: "DISTANCE",
            value: "547 KM",
            icon: GiPathDistance
        },
        {
            name: "Days",
            value: "11",
            icon: AiOutlineClockCircle
        },
        {
            name: "Days Spent Ill",
            value: "7",
            icon: MdSick
        },
        {
            name: "TOTAL ASCENT",
            value: "6,920 M",
            icon: TbStairsUp
        },
        {
            name: "HIGH POINT",
            value: "943 M",
            icon: TbMountain
        },
        {
            name: "Hours Spent Lost",
            value: "6 ",
            icon: GiTreasureMap
        }
    ],
] as Statistic[][];

export {
    segmentStats,
    introStats
};