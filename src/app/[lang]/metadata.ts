import { Metadata } from "next";

const commonKeywords = [
    "SFU团契",
    "SFU大学生团契",
    "SFU学生团契",
    "SFU华人学生团契",
    "SFU青年团契",
    "SFU基督教社团",
    "SFU基督徒",
    "Simon Fraser University团契",
    "Simon Fraser University大学生团契",
    "Simon Fraser University学生团契",
    "Simon Fraser University青年团契",
    "Simon Fraser University基督教社团",
    "Simon Fraser University基督徒",
    "Burnaby大学生团契",
    "本拿比大学生团契",
    "本拿比学生团契",
    "温哥华基督徒",
    "温哥华留学生团契",
    "温哥华大学生团契",
    "温哥华学生团契"
    "SFU",
    "Fellowship",
    "Christian",
    "Community",
    "Simon Fraser University",
    "基督教",
    "团契",
    "大学生团契",
    "青年团契",
    "留学生团契",
];

export const metadata: Metadata = {
    metadataBase: new URL("https://sfufellowship.org"),
    title: {
        default: "SFU团契 | 加拿大西门菲莎大学 (Simon Fraser University) 校园基督团契",
        template: "%s | SFU团契",
    },
    description: "SFU团契是加拿大西门菲莎大学(Simon Fraser University)的基督教大学生团契，我们欢迎所有SFU的学生参加我们的聚会活动来更多的认识神。",
    keywords: commonKeywords,
    authors: [{ name: "SFU Fellowship" }],
    alternates: {
        canonical: "https://sfufellowship.org",
        languages: {
            "zh-CN": "/zh",
            "en-US": "/en",
        },
    },
    openGraph: {
        title: "SFU团契 | Simon Fraser University基督教团契",
        description:
            "SFU团契是加拿大西门菲莎大学(Simon Fraser University)的基督教大学生团契，我们欢迎所有SFU的学生参加我们的聚会活动来更多的认识神。",
        url: "https://sfufellowship.org",
        siteName: "SFU团契",
        locale: "zh_CN",
        type: "website",
        images: [
            {
                url: "/images/og-image.jpg", // Make sure to add this image
                width: 1200,
                height: 630,
                alt: "SFU团契 - Simon Fraser University基督教团契",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "mWyl9WNg10EIIzmW52MJOFwekPTyZANbXG9YDChHxxQ",
    },
    other: {
        "format-detection": "telephone=no",
    },
};
