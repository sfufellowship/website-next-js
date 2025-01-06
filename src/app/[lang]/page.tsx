"use client";

import { Suspense } from "react";
import { Box, Container, Typography, Grid, useTheme, alpha, List, ListItem, ListItemIcon, ListItemText, Modal } from "@mui/material";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
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
import { contact } from "@/src/content/contact";
import ImageCarousel from "@/src/components/carousel/ImageCarousel";
import { StaticImageData } from "next/image";
import { ErrorBoundary } from "@/src/components/ErrorBoundary";
import LoadingSpinner from "@/src/components/LoadingSpinner";

export default function Home({ params: { lang } }: { params: { lang: "zh" | "en" } }) {
    const theme = useTheme();
    const [openModal, setOpenModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<StaticImageData | string>("");

    const handleImageClick = (imageSrc: StaticImageData | string) => {
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
        <ErrorBoundary>
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
                        <Image src={images.sfuBg} alt="SFU Campus" fill style={{ objectFit: "cover" }} priority sizes="100vw" placeholder="blur" />
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
                                <ErrorBoundary>
                                    <Suspense fallback={<LoadingSpinner />}>
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
                                    </Suspense>
                                </ErrorBoundary>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Activities Section */}
                <Box id="activities" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "grey.50" }}>
                    <Container maxWidth="lg">
                        <SectionHeader title={activities[lang].title} />
                        <ErrorBoundary>
                            <Suspense fallback={<LoadingSpinner />}>
                                <CardCarousel items={activityCards} itemsPerPage={8} />
                            </Suspense>
                        </ErrorBoundary>
                    </Container>
                </Box>

                {/* Members Section */}
                <Box id="members" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
                    <Container maxWidth="lg">
                        <SectionHeader title={members[lang].title} />
                        <ErrorBoundary>
                            <Suspense fallback={<LoadingSpinner />}>
                                <CardCarousel items={memberCards} itemsPerPage={8} />
                            </Suspense>
                        </ErrorBoundary>
                    </Container>
                </Box>

                {/* Events Section */}
                <Box id="events" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "grey.50" }}>
                    <Container maxWidth="lg">
                        <SectionHeader title={lang === "zh" ? "日历" : "Calendar"} />
                        <ErrorBoundary>
                            <Suspense fallback={<LoadingSpinner />}>
                                <GoogleCalendar />
                            </Suspense>
                        </ErrorBoundary>
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
                            priority
                        />
                    </Box>
                </Modal>

                {/* Contact Form Section */}
                <Box id="contact" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={5}>
                                <Box sx={{ mb: { xs: 4, md: 0 } }}>
                                    <Typography variant="h4" component="h2" gutterBottom color="primary">
                                        {contact[lang].title}
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EmailIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <a href={contact[lang].email.href}>{contact[lang].email.text}</a>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <LocationOnIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <a href={contact[lang].address.href} target="_blank" rel="noopener noreferrer">
                                                    {contact[lang].address.text}
                                                </a>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PhoneIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <a href={contact[lang].phone.href}>{contact[lang].phone.text}</a>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <InstagramIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <a href={contact[lang].social.instagram.href} target="_blank" rel="noopener noreferrer">
                                                    {contact[lang].social.instagram.text}
                                                </a>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FacebookIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <a href={contact[lang].social.facebook.href} target="_blank" rel="noopener noreferrer">
                                                    {contact[lang].social.facebook.text}
                                                </a>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                    <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                                        {contact[lang].wechatQrTitle}
                                    </Typography>
                                    <Box sx={{ position: "relative", width: "200px", height: "200px", mx: "auto", mt: 2 }}>
                                        <Image src={images.wechatQrCode} alt="WeChat QR Code" fill style={{ objectFit: "contain" }} sizes="200px" />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <ErrorBoundary>
                                    <Suspense fallback={<LoadingSpinner />}>
                                        <GoogleForm />
                                    </Suspense>
                                </ErrorBoundary>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ErrorBoundary>
    );
}
