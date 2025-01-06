import { images } from "@/src/constants/images";

export const activities = {
    zh: {
        title: "活动介绍",
        items: [
            {
                title: "感恩节活动",
                description: "感恩节晚宴，大家一起吃火鸡，分享感恩的故事",
                type: "感恩节",
                image: images.imgSquare1,
            },
            {
                title: "篮球赛",
                description: "在大温哥华圣道堂举办的篮球友谊赛，增进团契间的友谊",
                type: "室内活动",
                image: images.imgSquare2,
            },
            {
                title: "欢迎新生",
                description: "在SFU校园内，每个学期开学都会有活动，让大家相互认识，一起走进信仰",
                type: "开学活动",
                image: images.imgSquare3,
            },
            {
                title: "户外爬山",
                description: "夏天户外活动包括爬山，烧烤，海边活动等",
                type: "户外活动",
                image: images.imgSquare4,
            },
            {
                title: "音乐布道会",
                description: "每年都会有精彩的音乐会，让大家感受信仰带来新的力量",
                type: "音乐会",
                image: images.imgSquare5,
            },
            {
                title: "查经学习",
                description: "学期中会有大家一起学圣经的活动",
                type: "查经",
                image: images.bibleStudy,
            },
            {
                title: "圣诞节庆祝",
                description: "一起庆祝圣诞节，交换礼物，分享节日的喜悦",
                type: "节日活动",
                image: images.imgSquare1,
            },
            {
                title: "春节联欢",
                description: "农历新年庆祝活动，包括包饺子、游戏和文艺表演",
                type: "节日活动",
                image: images.imgSquare2,
            },
            {
                title: "郊游野餐",
                description: "在温哥华美丽的公园和海滩举行野餐活动",
                type: "户外活动",
                image: images.imgSquare3,
            },
            {
                title: "祷告会",
                description: "定期举行祷告会，彼此代祷和分享",
                type: "灵修活动",
                image: images.imgSquare4,
            },
            {
                title: "福音电影",
                description: "观看富有意义的基督教电影，之后进行讨论",
                type: "文化活动",
                image: images.imgSquare5,
            },
        ],
    },
    en: {
        title: "Activities",
        items: [
            {
                title: "Thanksgiving Celebration",
                description: "Thanksgiving dinner with turkey and sharing gratitude stories",
                type: "Thanksgiving",
                image: images.imgSquare1,
            },
            {
                title: "Basketball Game",
                description: "Friendly basketball matches at Vancouver Chinese Alliance Church",
                type: "Indoor Activity",
                image: images.imgSquare2,
            },
            {
                title: "Welcome Event",
                description: "Welcome events at the beginning of each semester to help new students connect",
                type: "Welcome Event",
                image: images.imgSquare3,
            },
            {
                title: "Hiking",
                description: "Summer outdoor activities including hiking, BBQ, and beach activities",
                type: "Outdoor Activity",
                image: images.imgSquare4,
            },
            {
                title: "Gospel Concert",
                description: "Annual concerts that share the power of faith through music",
                type: "Concert",
                image: images.imgSquare5,
            },
            {
                title: "Bible Study",
                description: "Regular Bible study sessions during the semester",
                type: "Bible Study",
                image: images.bibleStudy,
            },
            {
                title: "Christmas Celebration",
                description: "Celebrating Christmas together with gift exchange and festivities",
                type: "Holiday Event",
                image: images.imgSquare1,
            },
            {
                title: "Chinese New Year",
                description: "Lunar New Year celebration with dumpling making, games, and performances",
                type: "Holiday Event",
                image: images.imgSquare2,
            },
            {
                title: "Picnic",
                description: "Picnics in Vancouver's beautiful parks and beaches",
                type: "Outdoor Activity",
                image: images.imgSquare3,
            },
            {
                title: "Prayer Meeting",
                description: "Regular prayer meetings for sharing and intercession",
                type: "Spiritual Activity",
                image: images.imgSquare4,
            },
            {
                title: "Gospel Movies",
                description: "Watching and discussing meaningful Christian movies",
                type: "Cultural Activity",
                image: images.imgSquare5,
            },
        ],
    },
} as const;
