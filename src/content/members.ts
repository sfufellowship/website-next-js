import { images } from "@/src/constants/images";

export const members = {
    zh: {
        title: "团契成员",
        list: [
            {
                name: "Simon Chen",
                role: "团契辅导员",
                description: "SFU CS Master毕业",
                image: images.simonPhoto,
            },
            {
                name: "Ruihan Zhang",
                role: "团契主席",
                description: "SFU Big Data Master毕业",
                image: images.ruihanPhoto,
            },
            {
                name: "Selena Song",
                role: "团契副主席",
                description: "SFU Business在读",
                image: images.selenaPhoto,
            },
            {
                name: "Justin Wang",
                role: "团契副主席",
                description: "SFU Geography毕业",
                image: images.justinPhoto,
            },
            {
                name: "Yang Yang",
                role: "团契同工",
                description: "SFU CS毕业",
                image: images.yangPhoto,
            },
            {
                name: "Ray Lei",
                role: "团契同工",
                description: "SFU Engineer Master毕业",
                image: images.songhePhoto,
            },
            {
                name: "Jonathan Yang",
                role: "团契同工",
                description: "SFU Data Science在读",
                image: images.jonathanPhoto,
            },
            {
                name: "Kristen Gao",
                role: "团契同工",
                description: "SFU Business在读",
                image: images.kristenPhoto,
            },
            // Add more members as needed
        ],
    },
    en: {
        title: "Fellowship Members",
        list: [
            {
                name: "Simon Chen",
                role: "Fellowship Counselor",
                description: "SFU CS Master Graduate",
                image: images.simonPhoto,
            },
            {
                name: "Ruihan Zhang",
                role: "Fellowship President",
                description: "SFU Big Data Master Graduate",
                image: images.ruihanPhoto,
            },
            {
                name: "Selena Song",
                role: "Fellowship Vice President",
                description: "SFU Business Student",
                image: images.selenaPhoto,
            },
            {
                name: "Justin Wang",
                role: "Fellowship Vice President",
                description: "SFU Geography Graduate",
                image: images.justinPhoto,
            },
            {
                name: "Yang Yang",
                role: "Fellowship Staff",
                description: "SFU CS Graduate",
                image: images.yangPhoto,
            },
            {
                name: "Ray Lei",
                role: "Fellowship Staff",
                description: "SFU Engineering Master Graduate",
                image: images.songhePhoto,
            },
            {
                name: "Jonathan Yang",
                role: "Fellowship Staff",
                description: "SFU Data Science Student",
                image: images.jonathanPhoto,
            },
            {
                name: "Kristen Gao",
                role: "Fellowship Staff",
                description: "SFU Business Student",
                image: images.kristenPhoto,
            },
            // Add more members as needed
        ],
    },
} as const;
