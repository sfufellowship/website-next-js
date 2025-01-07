'use client';

import { useState, useCallback, useEffect } from 'react';
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import Grid from '@mui/material/Unstable_Grid2';

interface CardCarouselProps {
  items: React.ReactNode[];
  itemsPerPage?: number;
  autoPlayInterval?: number;
}

export default function CardCarousel({ items, itemsPerPage = 4, autoPlayInterval }: CardCarouselProps) {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const effectiveItemsPerPage = isMobile ? 1 : isTablet ? 2 : itemsPerPage;
  const totalPages = Math.ceil(items.length / effectiveItemsPerPage);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  }, [totalPages]);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  }, [totalPages]);

  const handleDotClick = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  // Auto-play effect with cleanup and pause on hover
  useEffect(() => {
    if (autoPlayInterval && !isPaused && totalPages > 1) {
      const timer = setInterval(handleNext, autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [handleNext, autoPlayInterval, isPaused, totalPages]);

  const visibleItems = items.slice(currentPage * effectiveItemsPerPage, (currentPage + 1) * effectiveItemsPerPage);

  return (
    <Box
      sx={{ position: 'relative', width: '100%' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Grid
        container
        spacing={3}
        sx={{
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {visibleItems.map((item, index) => (
          <Grid
            key={currentPage * effectiveItemsPerPage + index}
            xs={12}
            sm={6}
            md={12 / effectiveItemsPerPage}
            sx={{ maxWidth: `${100 / effectiveItemsPerPage}%` }}
          >
            {item}
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: { xs: -16, md: -40 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              boxShadow: 2,
              '&:hover': {
                bgcolor: 'background.paper',
              },
            }}
            aria-label="Previous page"
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: -16, md: -40 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              boxShadow: 2,
              '&:hover': {
                bgcolor: 'background.paper',
              },
            }}
            aria-label="Next page"
          >
            <KeyboardArrowRight />
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              mt: 3,
            }}
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: index === currentPage ? 'primary.main' : 'grey.300',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
                role="button"
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}
