import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import Image from "next/image";
import bibleStudyImage from "../../../../public/img/bible-study.jpg";
import worshipImage from "../../../../public/img/worship.jpg";
import fellowshipImage from "../../../../public/img/fellowship.jpg";

const translations = {
    zh: {
        title: "活动",
        activities: [
            {
                title: "查经班",
                description: "每周五晚上7点，我们一起学习圣经，分享生活。",
                image: bibleStudyImage,
            },
            {
                title: "主日崇拜",
                description: "每周日上午10点，我们一起敬拜神。",
                image: worshipImage,
            },
            {
                title: "团契聚会",
                description: "每月一次的大型团契聚会，包括敬拜、分享和美食。",
                image: fellowshipImage,
            },
        ],
    },
    en: {
        title: "Activities",
        activities: [
            {
                title: "Bible Study",
                description: "Every Friday at 7 PM, we study the Bible together and share our lives.",
                image: bibleStudyImage,
            },
            {
                title: "Sunday Worship",
                description: "Every Sunday at 10 AM, we worship God together.",
                image: worshipImage,
            },
            {
                title: "Fellowship Gathering",
                description: "Monthly fellowship gathering including worship, sharing, and food.",
                image: fellowshipImage,
            },
        ],
    },
} as const;

export default function Activities({ params: { lang } }: { params: { lang: "zh" | "en" } }) {
    return (
        <Box sx={{ pt: 8 }}>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {translations[lang].title}
                </Typography>
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    {translations[lang].activities.map((activity, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <Box sx={{ position: "relative", height: 200 }}>
                                    <Image src={activity.image} alt={activity.title} fill style={{ objectFit: "cover" }} />
                                </Box>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {activity.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {activity.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
