import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

export default function Home() {
    return (
        <Box>
            <Box
                sx={{
                    height: "100vh",
                    position: "relative",
                    backgroundImage: "url(/img/sfu.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.5)",
                    },
                }}
            >
                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                    <Typography variant="h3" component="h1" color="white" textAlign="center" gutterBottom>
                        SFU Fellowship
                    </Typography>
                    <Typography variant="h5" color="white" textAlign="center">
                        The SFU Fellowship is aimed at Chinese students and scholars on the SFU campus, sharing faith and spreading the gospel.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}
