"use client";

import { Card, Box, CardContent, Typography, useTheme, alpha, Chip } from "@mui/material";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ActivityCardProps {
    title: string;
    description: string;
    type: string;
    image: StaticImageData | string;
    onImageClick?: (imageSrc: StaticImageData | string) => void;
}

export default function ActivityCard({ title, description, type, image, onImageClick }: ActivityCardProps) {
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
            <Box
                sx={{
                    position: "relative",
                    paddingTop: "56.25%", // 16:9 aspect ratio
                    cursor: onImageClick ? "pointer" : "default",
                }}
                onClick={() => onImageClick?.(image)}
            >
                <Image src={image} alt={title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </Box>
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {description}
                </Typography>
                <Chip
                    label={type}
                    size="small"
                    sx={{
                        mt: 1,
                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                        color: "primary.main",
                    }}
                />
            </CardContent>
        </Card>
    );
}
