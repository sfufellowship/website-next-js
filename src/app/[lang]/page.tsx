"use client";

import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Paper,
    Divider,
    useTheme,
    alpha,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { images } from "@/src/images";
import GoogleCalendar from "@/src/components/GoogleCalendar";
import GoogleForm from "@/src/components/GoogleForm";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const translations = {
    zh: {
        welcome: {
            title: "SFU团契",
            subtitle: "SFU团契面向SFU校园内來自中国的学生学者, 分享信仰，传播福音",
            description:
                "SFU团契面向SFU校园内來自中国的学生学者，定期查经和分享信息。帮助慕道友来信靠神，基督徒灵里共同扎根长进。使大家在神纯正的話語里得造就，在基督的信心和爱心里成为一体。并且彼此相爱，彼此鼓励，在校园里为主多得人心。无论你是来此求学的青年学生，还是短暂停留的访问学者，SFU团契都会是你在这里一个温暖的家。让我们一同分享学业的压力、海外生活的艰辛、未來的希望、和在神的爱里相知相悦的喜乐。让我们的生命焕发出更为持久和深厚的光彩，让我们一起來认识那位至真至美的神",
        },
        activities: {
            title: "活动介绍",
            items: [
                {
                    title: "感恩节活动",
                    description: "感恩节晚宴，大家一起吃火鸡",
                    type: "感恩节",
                    image: images.imgSquare1,
                },
                {
                    title: "篮球赛",
                    description: "在大温哥华圣道堂",
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
                    title: "阅读圣经",
                    description: "学期中会有大家一起学圣经的活动",
                    type: "查经",
                    image: images.bibleStudy,
                },
            ],
        },
        members: {
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
            ],
        },
        contact: {
            title: "联系我们",
            infoTitle: "联系方式",
            wechatTitle: "微信公众号二维码",
            address: "8888 University Drive, Burnaby, BC, Canada",
            email: "info@sfufellowship.org",
            phone: "778-891-6881",
        },
        events: {
            title: "活动日历",
            calendarTitle: "SFU团契活动日历",
        },
    },
    en: {
        welcome: {
            title: "SFU Fellowship",
            subtitle: "The SFU Fellowship is aimed at Chinese students and scholars on the SFU campus, sharing faith and spreading the gospel.",
            description:
                "The SFU Fellowship is aimed at Chinese students and scholars on the SFU campus, regularly studying the Bible and sharing information. We help seekers to trust in God and Christians to grow spiritually together. We help everyone to be edified in the pure Word of God, to become one in Christ's faith and love. We love each other, encourage each other, and win more hearts for the Lord on campus. Whether you are a young student studying here or a visiting scholar staying for a short time, the SFU Fellowship will be a warm home for you. Let's help each other on the hardships of living abroad, and discuss about the hopes for the future, and share the joy of mutual understanding in God's love. Let our lives shine with more lasting and profound brilliance, and let us come to know the one true and beautiful God together.",
        },
        activities: {
            title: "Activities",
            items: [
                {
                    title: "Thanksgiving Event",
                    description: "Thanksgiving dinner, everyone eats turkey together",
                    type: "Thanksgiving",
                    image: images.imgSquare1,
                },
                {
                    title: "Basketball Game",
                    description: "At the ECBC Church",
                    type: "Indoor Activity",
                    image: images.imgSquare2,
                },
                {
                    title: "Welcome Freshmen",
                    description:
                        "On the SFU campus, there are activities at the beginning of each semester to let everyone know each other and enter the faith together",
                    type: "Orientation Activities",
                    image: images.imgSquare3,
                },
                {
                    title: "Outdoor Hiking",
                    description: "Outdoor activities in summer include hiking, BBQ, and beach activities",
                    type: "Outdoor Activity",
                    image: images.imgSquare4,
                },
                {
                    title: "Music Evangelism",
                    description: "There are wonderful concerts every year, allowing everyone to feel the new power brought by faith",
                    type: "Concert",
                    image: images.imgSquare5,
                },
                {
                    title: "Bible Study",
                    description: "There will be activities to study the Bible together during the semester",
                    type: "Bible Study",
                    image: images.bibleStudy,
                },
            ],
        },
        members: {
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
            ],
        },
        contact: {
            title: "Contact Us",
            infoTitle: "Contact Information",
            wechatTitle: "WeChat QR Code",
            address: "8888 University Drive, Burnaby, BC, Canada",
            email: "info@sfufellowship.org",
            phone: "778-891-6881",
        },
        events: {
            title: "Events",
            calendarTitle: "SFU Fellowship Events",
        },
    },
} as const;

export default function Home({ params: { lang } }: { params: { lang: "zh" | "en" } }) {
    const theme = useTheme();

    return (
        <>
            <Header />
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
                        pt: 8, // Add padding top to account for fixed header
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
                                {translations[lang].welcome.title}
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
                                {translations[lang].welcome.subtitle}
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
                                    {translations[lang].welcome.title}
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
                                    {translations[lang].welcome.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box
                                    sx={{
                                        position: "relative",
                                        height: 400,
                                        borderRadius: 2,
                                        overflow: "hidden",
                                        boxShadow: theme.shadows[10],
                                    }}
                                >
                                    <Image
                                        src={images.fellowshipGroupPhoto}
                                        alt="Fellowship Group"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 600px) 100vw, 600px"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Activities Section */}
                <Box id="activities" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "grey.50" }}>
                    <Container maxWidth="lg">
                        <Box sx={{ textAlign: "center", mb: 6 }}>
                            <Typography variant="h4" component="h2" gutterBottom color="primary">
                                {translations[lang].activities.title}
                            </Typography>
                            <Divider sx={{ width: "60px", margin: "auto", my: 3, borderColor: theme.palette.primary.main }} />
                        </Box>
                        <Grid container spacing={4}>
                            {translations[lang].activities.items.map((activity, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                                            "&:hover": {
                                                transform: "translateY(-4px)",
                                                boxShadow: theme.shadows[8],
                                            },
                                        }}
                                    >
                                        <Box sx={{ position: "relative", height: 240 }}>
                                            <Image
                                                src={activity.image}
                                                alt={activity.title}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                                            />
                                        </Box>
                                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                            <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                                                {activity.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                {activity.description}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: "primary.main",
                                                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                                                    py: 0.5,
                                                    px: 1,
                                                    borderRadius: 1,
                                                    display: "inline-block",
                                                }}
                                            >
                                                {activity.type}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Members Section */}
                <Box id="members" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
                    <Container maxWidth="lg">
                        <Box sx={{ textAlign: "center", mb: 6 }}>
                            <Typography variant="h4" component="h2" gutterBottom color="primary">
                                {translations[lang].members.title}
                            </Typography>
                            <Divider sx={{ width: "60px", margin: "auto", my: 3, borderColor: theme.palette.primary.main }} />
                        </Box>
                        <Grid container spacing={4}>
                            {translations[lang].members.list.map((member, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card
                                        sx={{
                                            height: "100%",
                                            transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                                            "&:hover": {
                                                transform: "translateY(-4px)",
                                                boxShadow: theme.shadows[8],
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: "relative",
                                                height: 280,
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
                                            />
                                        </Box>
                                        <CardContent sx={{ textAlign: "center", p: 3 }}>
                                            <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                                                {member.name}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                color="primary"
                                                sx={{
                                                    mb: 1,
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {member.role}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {member.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Events Section */}
                <Box id="events" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "grey.50" }}>
                    <Container maxWidth="lg">
                        <Box sx={{ textAlign: "center", mb: 6 }}>
                            <Typography variant="h4" component="h2" gutterBottom color="primary">
                                {translations[lang].events.title}
                            </Typography>
                            <Divider sx={{ width: "60px", margin: "auto", my: 3, borderColor: theme.palette.primary.main }} />
                        </Box>
                        <GoogleCalendar title={translations[lang].events.calendarTitle} />
                    </Container>
                </Box>

                {/* Contact Section */}
                <Box id="contact" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
                    <Container maxWidth="lg">
                        <Box sx={{ textAlign: "center", mb: 6 }}>
                            <Typography variant="h4" component="h2" gutterBottom color="primary">
                                {translations[lang].contact.title}
                            </Typography>
                            <Divider sx={{ width: "60px", margin: "auto", my: 3, borderColor: theme.palette.primary.main }} />
                        </Box>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={5}>
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography variant="h5" gutterBottom>
                                        {translations[lang].contact.infoTitle}
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <LocationOnIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={translations[lang].contact.address} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EmailIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={translations[lang].contact.email} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PhoneIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={translations[lang].contact.phone} />
                                        </ListItem>
                                    </List>
                                    <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                                        {translations[lang].contact.wechatTitle}
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
            <Footer />
        </>
    );
}
