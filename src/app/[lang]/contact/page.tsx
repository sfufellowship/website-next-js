import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const translations = {
    zh: {
        title: "联系我们",
        email: "电子邮件",
        location: "地点",
        time: "时间",
        emailContent: "sfufellowship@example.com",
        locationContent: "SFU Burnaby校区 AQ 3000",
        timeContent: "每周五晚上7点",
    },
    en: {
        title: "Contact Us",
        email: "Email",
        location: "Location",
        time: "Time",
        emailContent: "sfufellowship@example.com",
        locationContent: "SFU Burnaby Campus AQ 3000",
        timeContent: "Every Friday at 7 PM",
    },
} as const;

export default function Contact({ params: { lang } }: { params: { lang: "zh" | "en" } }) {
    return (
        <Box sx={{ pt: 8 }}>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {translations[lang].title}
                </Typography>
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <EmailIcon sx={{ fontSize: 40, mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                                {translations[lang].email}
                            </Typography>
                            <Typography variant="body1" align="center">
                                {translations[lang].emailContent}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <LocationOnIcon sx={{ fontSize: 40, mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                                {translations[lang].location}
                            </Typography>
                            <Typography variant="body1" align="center">
                                {translations[lang].locationContent}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <AccessTimeIcon sx={{ fontSize: 40, mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                                {translations[lang].time}
                            </Typography>
                            <Typography variant="body1" align="center">
                                {translations[lang].timeContent}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
