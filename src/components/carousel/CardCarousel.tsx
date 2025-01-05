"use client";

import { useState } from "react";
import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

interface CardCarouselProps {
    items: React.ReactNode[];
    itemsPerPage: number;
}

export default function CardCarousel({ items, itemsPerPage }: CardCarouselProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

    const handlePrevPage = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    };

    return (
        <Box sx={{ position: "relative", width: "100%", overflow: "hidden", px: { md: 5 } }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                                md: "repeat(4, 1fr)",
                            },
                            gridTemplateRows: {
                                md: "repeat(2, 1fr)",
                            },
                            gap: 4,
                            my: 2,
                        }}
                    >
                        {visibleItems}
                    </Box>
                </motion.div>
            </AnimatePresence>

            {totalPages > 1 && (
                <>
                    <IconButton
                        onClick={handlePrevPage}
                        sx={{
                            position: "absolute",
                            left: { xs: "calc(50% - 60px)", md: 0 },
                            bottom: { xs: -60, md: "50%" },
                            transform: { md: "translateY(-50%)" },
                            bgcolor: "background.paper",
                            boxShadow: 2,
                            zIndex: 1,
                            "&:hover": { bgcolor: "background.paper" },
                        }}
                    >
                        <KeyboardArrowLeft />
                    </IconButton>
                    <IconButton
                        onClick={handleNextPage}
                        sx={{
                            position: "absolute",
                            right: { xs: "calc(50% - 60px)", md: 0 },
                            bottom: { xs: -60, md: "50%" },
                            transform: { md: "translateY(-50%)" },
                            bgcolor: "background.paper",
                            boxShadow: 2,
                            zIndex: 1,
                            "&:hover": { bgcolor: "background.paper" },
                        }}
                    >
                        <KeyboardArrowRight />
                    </IconButton>
                </>
            )}
        </Box>
    );
}
