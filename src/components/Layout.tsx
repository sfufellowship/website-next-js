"use client";

import React, { ReactElement } from "react";
import { AppBar, Toolbar, Container, Button, IconButton, Box, useScrollTrigger, Slide } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
    children: React.ReactNode;
}

type Lang = "zh" | "en";

type TranslationKey = "home" | "activities" | "members" | "events" | "contact";

const translations = {
    zh: {
        home: "主页",
        activities: "活动介绍",
        members: "团契成员",
        events: "团契活动",
        contact: "联系我们",
    },
    en: {
        home: "Home",
        activities: "Activities",
        members: "Members",
        events: "Events",
        contact: "Contact",
    },
} as const;

function HideOnScroll({ children }: { children: ReactElement }) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Layout({ children }: Props) {
    const pathname = usePathname();
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const currentLang = (pathname.split("/")[1] || "zh") as Lang;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { text: translations[currentLang].home, href: `/${currentLang}` },
        { text: translations[currentLang].activities, href: `/${currentLang}#activities` },
        { text: translations[currentLang].members, href: `/${currentLang}#members` },
        { text: translations[currentLang].events, href: `/${currentLang}#events` },
        { text: translations[currentLang].contact, href: `/${currentLang}#contact` },
    ];

    const toggleLanguage = () => {
        const newLang: Lang = currentLang === "zh" ? "en" : "zh";
        const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`);
        router.push(newPathname || `/${newLang}`);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <HideOnScroll>
                <AppBar position="fixed" color="default" elevation={0}>
                    <Container maxWidth="lg">
                        <Toolbar>
                            <Box sx={{ display: { xs: "block", md: "none" } }}>
                                <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>

                            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                                {menuItems.map((item) => (
                                    <Button key={item.text} component={Link} href={item.href} sx={{ mx: 1 }}>
                                        {item.text}
                                    </Button>
                                ))}
                            </Box>

                            <Button onClick={toggleLanguage}>{currentLang === "zh" ? "EN" : "中文"}</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Toolbar /> {/* Spacer */}
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
        </Box>
    );
}
