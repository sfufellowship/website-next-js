"use client";

import { useState, useEffect, useCallback } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
    images: {
        src: string;
        alt: string;
    }[];
    autoPlayInterval?: number;
    onImageClick?: (imageSrc: string) => void;
}

export default function ImageCarousel({ images, autoPlayInterval = 5000, onImageClick }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const theme = useTheme();

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    }, [images.length]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, [images.length]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-play effect
    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                handleNext();
            }, autoPlayInterval);

            return () => clearInterval(timer);
        }
    }, [handleNext, autoPlayInterval, isPaused]);

    return (
        <Box sx={{ position: "relative", width: "100%", height: "400px" }}>
            {images.map((image, index) => (
                <Box
                    key={index}
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        opacity: index === currentIndex ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                        cursor: onImageClick ? "pointer" : "default",
                        pointerEvents: index === currentIndex ? "auto" : "none",
                    }}
                    onClick={() => onImageClick?.(image.src)}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </Box>
            ))}

            {images.length > 1 && (
                <>
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            position: "absolute",
                            left: 16,
                            top: "50%",
                            transform: "translateY(-50%)",
                            bgcolor: "rgba(255, 255, 255, 0.8)",
                            "&:hover": {
                                bgcolor: "rgba(255, 255, 255, 0.9)",
                            },
                        }}
                    >
                        <KeyboardArrowLeft />
                    </IconButton>
                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: "absolute",
                            right: 16,
                            top: "50%",
                            transform: "translateY(-50%)",
                            bgcolor: "rgba(255, 255, 255, 0.8)",
                            "&:hover": {
                                bgcolor: "rgba(255, 255, 255, 0.9)",
                            },
                        }}
                    >
                        <KeyboardArrowRight />
                    </IconButton>

                    {/* Dot indicators */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 16,
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            gap: 1,
                            zIndex: 1,
                        }}
                    >
                        {images.map((_, index) => (
                            <Box
                                key={index}
                                onClick={() => handleDotClick(index)}
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    bgcolor: index === currentIndex ? "primary.main" : "rgba(255, 255, 255, 0.8)",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.2)",
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </>
            )}
        </Box>
    );
}
