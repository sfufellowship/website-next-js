'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { Box, IconButton, CircularProgress } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ImageCarouselProps {
  images: {
    src: StaticImageData | string;
    alt: string;
  }[];
  autoPlayInterval?: number;
  onImageClick?: (imageSrc: StaticImageData | string) => void;
}

const ImageCarousel = memo(function ImageCarousel({
  images,
  autoPlayInterval = 5000,
  onImageClick,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  // Calculate which images should be loaded (current, prev, next)
  const shouldLoadImage = useCallback(
    (index: number) => {
      const totalImages = images.length;
      const prev = (currentIndex - 1 + totalImages) % totalImages;
      const next = (currentIndex + 1) % totalImages;
      // Also preload the next set of images for smoother transitions
      const nextNext = (currentIndex + 2) % totalImages;
      const prevPrev = (currentIndex - 2 + totalImages) % totalImages;
      return index === currentIndex || index === prev || index === next || index === nextNext || index === prevPrev;
    },
    [currentIndex, images.length],
  );

  // Add touch support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto-play effect with cleanup and pause on hover
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(handleNext, autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [handleNext, autoPlayInterval, isPaused]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          display: 'block',
          paddingTop: '56.25%', // 16:9 aspect ratio (9/16 * 100)
        },
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => {
        const isLoaded = loadedImages.has(index);
        const shouldLoad = shouldLoadImage(index);

        return (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              cursor: onImageClick ? 'pointer' : 'default',
              pointerEvents: index === currentIndex ? 'auto' : 'none',
              display: shouldLoad ? 'flex' : 'none',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: 'background.paper',
            }}
            onClick={() => onImageClick?.(image.src)}
          >
            {shouldLoad && (
              <>
                {!isLoaded && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 2,
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{
                      objectFit: 'contain',
                      width: '100%',
                      height: '100%',
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    quality={75}
                    onLoad={() => handleImageLoad(index)}
                  />
                </Box>
              </>
            )}
          </Box>
        );
      })}

      {images.length > 1 && (
        <>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: { xs: 8, md: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              },
              zIndex: 3,
              width: { xs: 32, md: 40 },
              height: { xs: 32, md: 40 },
            }}
            aria-label="Previous image"
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: 8, md: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              },
              zIndex: 3,
              width: { xs: 32, md: 40 },
              height: { xs: 32, md: 40 },
            }}
            aria-label="Next image"
          >
            <KeyboardArrowRight />
          </IconButton>

          <Box
            sx={{
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              zIndex: 3,
            }}
          >
            {images.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: index === currentIndex ? 'primary.main' : 'rgba(255, 255, 255, 0.8)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
                role="button"
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
});

export default ImageCarousel;
