"use client";

import { Box, Container, Typography, Grid, useTheme, alpha, List, ListItem, ListItemIcon, ListItemText, Modal } from "@mui/material";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState } from "react";
import { images } from "@/src/constants/images";
import GoogleCalendar from "@/src/components/forms/GoogleCalendar";
import GoogleForm from "@/src/components/forms/GoogleForm";
import CardCarousel from "@/src/components/carousel/CardCarousel";
import ActivityCard from "@/src/components/cards/ActivityCard";
import MemberCard from "@/src/components/cards/MemberCard";
import SectionHeader from "@/src/components/common/SectionHeader";
import { introduction } from "@/src/content/introduction";
import { activities } from "@/src/content/activities";
import { members } from "@/src/content/members";
import ImageCarousel from "@/src/components/carousel/ImageCarousel";

export default function Home({ params: { lang } }: { params: { lang: "zh" | "en" } }) {
    const theme = useTheme();
    const [openModal, setOpenModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string>("");

    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    // Create activity cards
    const activityCards = activities[lang].items.map((activity, index) => (
        <ActivityCard key={index} title={activity.title} description={activity.description} type={activity.type} image={activity.image} />
    ));

    // Create member cards
    const memberCards = members[lang].list.map((member, index) => (
        <MemberCard key={index} name={member.name} role={member.role} description={member.description} image={member.image} />
    ));

    return (
        <Box component="main">
            {/* Hero Section */}
            <Box
                id="home"
                sx={{
                    height: "100vh",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    pt: 8,
                }}
            >
                <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                    <Image src={images.sfuBg} alt="SFU Campus" fill style={{ objectFit: "cover" }} priority sizes="100vw" />
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: alpha(theme.palette.common.black, 0.6),
                            zIndex: 1,
                        }}
                    />
                </Box>
                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                    <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto", px: 3 }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            color="white"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                mb: 3,
                                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                            }}
                        >
                            {introduction[lang].title}
                        </Typography>
                        <Typography
                            variant="h5"
                            color="white"
                            sx={{
                                mb: 4,
                                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                                lineHeight: 1.6,
                            }}
                        >
                            {introduction[lang].subtitle}
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Welcome Section */}
            <Box id="welcome" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Typography variant="h4" component="h2" gutterBottom color="primary" sx={{ mb: 4 }}>
                                {introduction[lang].title}
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    lineHeight: 1.8,
                                    color: "text.secondary",
                                    mb: 3,
                                }}
                            >
                                {introduction[lang].description}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <ImageCarousel
                                images={[
                                    { src: images.fellowshipGroupPhoto, alt: "Fellowship Group Photo 1" },
                                    { src: images.fellowshipGroupPhoto2, alt: "Fellowship Group Photo 2" },
                                    { src: images.fellowshipGroupPhoto3, alt: "Fellowship Group Photo 3" },
                                    { src: images.fellowshipGroupPhoto4, alt: "Fellowship Group Photo 4" },
                                    { src: images.fellowshipGroupPhoto5, alt: "Fellowship Group Photo 5" },
                                    { src: images.fellowshipGroupPhoto6, alt: "Fellowship Group Photo 6" },
                                ]}
                                autoPlayInterval={5000}
                                onImageClick={handleImageClick}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="image-modal" aria-describedby="enlarged-image">
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "90vw",
                        height: "90vh",
                        bgcolor: "transparent",
                        outline: "none",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onClick={handleCloseModal}
                >
                    <Image
                        src={selectedImage}
                        alt="Enlarged fellowship photo"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                        }}
                        width={1920}
                        height={1080}
                    />
                </Box>
            </Modal>

            {/* Activities Section */}
            <Box id="activities" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "grey.50" }}>
                <Container maxWidth="lg">
                    <SectionHeader title={activities[lang].title} />
                    <CardCarousel items={activityCards} itemsPerPage={8} />
                </Container>
            </Box>

            {/* Members Section */}
            <Box id="members" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
                <Container maxWidth="lg">
                    <SectionHeader title={members[lang].title} />
                    <CardCarousel items={memberCards} itemsPerPage={8} />
                </Container>
            </Box>

            {/* Events Section */}
            <Box id="events" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "grey.50" }}>
                <Container maxWidth="lg">
                    <SectionHeader title={lang === "zh" ? "日历" : "Calendar"} />
                    <GoogleCalendar />
                </Container>
            </Box>

            {/* Contact Section */}
            <Box id="contact" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
                <Container maxWidth="lg">
                    <SectionHeader title="联系我们" />
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={5}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography variant="h5" gutterBottom>
                                    联系方式
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <LocationOnIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="8888 University Drive, Burnaby, BC, Canada" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <EmailIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="info@sfufellowship.org" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PhoneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="778-891-6881" />
                                    </ListItem>
                                </List>
                                <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                                    微信公众号二维码
                                </Typography>
                                <Box sx={{ position: "relative", width: "200px", height: "200px", mx: "auto", mt: 2 }}>
                                    <Image src={images.wechatQrCode} alt="WeChat QR Code" fill style={{ objectFit: "contain" }} sizes="200px" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <GoogleForm />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
