"use client";

import { Box, Container, Typography, Link as MuiLink, IconButton, useTheme, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { usePathname } from "next/navigation";
import { contact } from "@/src/content/contact";

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
                <Grid container spacing={4}>
                    {/* Contact Information */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" color="primary" gutterBottom>
                            {contact[currentLang].title}
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <EmailIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText>
                                    <a href={contact[currentLang].email.href}>{contact[currentLang].email.text}</a>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOnIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText>
                                    <a href={contact[currentLang].address.href} target="_blank" rel="noopener noreferrer">
                                        {contact[currentLang].address.text}
                                    </a>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <PhoneIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText>
                                    <a href={contact[currentLang].phone.href}>{contact[currentLang].phone.text}</a>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>

                    {/* Social Media and Copyright */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-end" }, height: "100%" }}>
                            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                                <IconButton
                                    component={MuiLink}
                                    href={contact[currentLang].social.instagram.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    aria-label={contact[currentLang].social.instagram.ariaLabel}
                                >
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton
                                    component={MuiLink}
                                    href={contact[currentLang].social.facebook.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    aria-label={contact[currentLang].social.facebook.ariaLabel}
                                >
                                    <FacebookIcon />
                                </IconButton>
                            </Box>
                            <Typography variant="body2" color="text.secondary" align="right" sx={{ mt: "auto" }}>
                                {currentLang === "zh" ? "© 2024 SFU团契. 保留所有权利." : "© 2024 SFU Fellowship. All rights reserved."}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
