import { Statistic } from "@/store/models";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiCookie } from "react-icons/bi";
import { BsSignpostSplit, BsThermometerSun } from "react-icons/bs";
import { GiBread, GiPathDistance, GiCastle, GiBeerStein } from "react-icons/gi";
import { RxPinBottom } from "react-icons/rx";
import { TbStairsUp, TbMountain } from "react-icons/tb";


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
            name: "Low Point",
            value: "6 M.",
            icon: RxPinBottom
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
            name: "Cookies enjoyed daily",
            value: "1 - 2",
            icon: BiCookie
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
            name: "Low Point",
            value: "6 M.",
            icon: RxPinBottom
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
            name: "Low Point",
            value: "6 M.",
            icon: RxPinBottom
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
            name: "# of Cookies",
            value: "1 - 2",
            icon: BiCookie
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
            name: "Low Point",
            value: "6 M.",
            icon: RxPinBottom
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
            name: "# of Cookies",
            value: "1 - 2",
            icon: BiCookie
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
            name: "Low Point",
            value: "6 M.",
            icon: RxPinBottom
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
            name: "# of Cookies",
            value: "1 - 2",
            icon: BiCookie
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
            name: "Low Point",
            value: "6 M.",
            icon: RxPinBottom
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
            name: "# of Cookies",
            value: "1 - 2",
            icon: BiCookie
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
            name: "Low Point",
            value: "6 M.",
            icon: RxPinBottom
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
            name: "# of Cookies",
            value: "1 - 2",
            icon: BiCookie
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
            name: "Low Point",
            value: "6 M.",
            icon: RxPinBottom
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
            name: "# of Cookies",
            value: "1 - 2",
            icon: BiCookie
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
            name: "Low Point",
            value: "6 M.",
            icon: RxPinBottom
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
            name: "# of Cookies",
            value: "1 - 2",
            icon: BiCookie
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
            name: "Low Point",
            value: "6 M.",
            icon: RxPinBottom
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
            name: "# of Cookies",
            value: "1 - 2",
            icon: BiCookie
        }
    ],
] as Statistic[][];

export {
    segmentStats,
    introStats
};