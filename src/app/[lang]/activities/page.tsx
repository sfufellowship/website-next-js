import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { images } from "@/src/constants/images";

const translations = {
    zh: {
        title: "活动",
        activities: [
            {
                title: "查经班",
                description: "每周五晚上7点，我们一起学习圣经，分享生活。",
                image: images.bibleStudy,
            },
            {
                title: "主日崇拜",
                description: "每周日上午10点，我们一起敬拜神。",
                image: images.imgSquare2,
            },
            {
                title: "团契聚会",
                description: "每月一次的大型团契聚会，包括敬拜、分享和美食。",
                image: images.fellowshipGroupPhoto,
            },
        ],
    },
    en: {
        title: "Activities",
        activities: [
            {
                title: "Bible Study",
                description: "Every Friday at 7 PM, we study the Bible together and share our lives.",
                image: images.bibleStudy,
            },
            {
                title: "Sunday Worship",
                description: "Every Sunday at 10 AM, we worship God together.",
                image: images.imgSquare2,
            },
            {
                title: "Fellowship Gathering",
                description: "Monthly fellowship gathering including worship, sharing, and food.",
                image: images.fellowshipGroupPhoto,
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
                                    <Image
                                        src={activity.image}
                                        alt={activity.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                                        priority={index === 0}
                                        quality={85}
                                    />
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
