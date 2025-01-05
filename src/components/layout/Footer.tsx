"use client";

import { Box, Container, Typography, Link as MuiLink, IconButton, useTheme, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { usePathname } from "next/navigation";

const translations = {
    zh: {
        copyright: "© 2024 SFU团契. 保留所有权利.",
        contact: "联系我们",
    },
    en: {
        copyright: "© 2024 SFU Fellowship. All rights reserved.",
        contact: "Contact Us",
    },
} as const;

export default function Footer() {
    const theme = useTheme();
    const pathname = usePathname();
    const currentLang = pathname.includes("/en") ? "en" : "zh";

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "background.paper",
                py: 6,
                borderTop: `1px solid ${theme.palette.divider}`,
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" color="text.secondary" align="center">
                        {translations[currentLang].copyright}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton
                            component={MuiLink}
                            href="mailto:info@sfufellowship.org"
                            color="inherit"
                            aria-label={translations[currentLang].contact}
                        >
                            <EmailIcon />
                        </IconButton>
                        <IconButton
                            component={MuiLink}
                            href="https://github.com/sfu-fellowship"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                            aria-label="GitHub"
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
