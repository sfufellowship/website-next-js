"use client";

import { Card, Box, CardContent, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface MemberCardProps {
    name: string;
    role: string;
    description: string;
    image: StaticImageData;
}

export default function MemberCard({ name, role, description, image }: MemberCardProps) {
    const theme = useTheme();

    return (
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
                <Image src={image} alt={name} fill style={{ objectFit: "cover" }} sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw" />
            </Box>
            <CardContent sx={{ textAlign: "center", p: 3 }}>
                <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                    {name}
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="primary"
                    sx={{
                        mb: 1,
                        fontWeight: 500,
                    }}
                >
                    {role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}
