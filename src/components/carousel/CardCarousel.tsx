"use client";

import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

interface CardCarouselProps {
    items: React.ReactNode[];
    itemsPerPage: number;
}

export default function CardCarousel({ items, itemsPerPage }: CardCarouselProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePrev = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    };

    return (
        <Box sx={{ position: "relative", width: "100%" }}>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                        lg: "repeat(4, 1fr)",
                    },
                    gap: 3,
                }}
            >
                {items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)}
            </Box>

            {items.length > itemsPerPage && (
                <>
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            position: "absolute",
                            left: -20,
                            top: "50%",
                            transform: "translateY(-50%)",
                        }}
                    >
                        <KeyboardArrowLeft />
                    </IconButton>
                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: "absolute",
                            right: -20,
                            top: "50%",
                            transform: "translateY(-50%)",
                        }}
                    >
                        <KeyboardArrowRight />
                    </IconButton>
                </>
            )}
        </Box>
    );
}
