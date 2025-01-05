"use client";

import { Card, Box, CardContent, Typography, useTheme, alpha } from "@mui/material";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ActivityCardProps {
    title: string;
    description: string;
    type: string;
    image: StaticImageData;
}

export default function ActivityCard({ title, description, type, image }: ActivityCardProps) {
    const theme = useTheme();

    return (
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
                <Image src={image} alt={title} fill style={{ objectFit: "cover" }} sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw" />
            </Box>
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {description}
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
                    {type}
                </Typography>
            </CardContent>
        </Card>
    );
}
