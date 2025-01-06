'use client';

import { Box, Container } from '@mui/material';
import SectionHeader from '@/src/components/common/SectionHeader';
import ImageCarousel from '@/src/components/carousel/ImageCarousel';
import { StaticImageData } from 'next/image';
import { ErrorBoundary } from '@/src/components/ErrorBoundary';
import { Suspense } from 'react';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import { images } from '@/src/constants/images';

interface PhotoGallerySectionProps {
  lang: 'zh' | 'en';
  onImageClick: (imageSrc: StaticImageData | string) => void;
}

export default function PhotoGallerySection({ lang, onImageClick }: PhotoGallerySectionProps) {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <SectionHeader title={lang === 'zh' ? 'SFU团契照片集锦' : 'SFU Fellowship Photo Gallery'} />
        <Box sx={{ mt: 4 }}>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <ImageCarousel
                images={[
                  { src: images.fellowshipGroupPhoto, alt: 'Fellowship Group Photo 1' },
                  { src: images.fellowshipGroupPhoto2, alt: 'Fellowship Group Photo 2' },
                  { src: images.fellowshipGroupPhoto3, alt: 'Fellowship Group Photo 3' },
                  { src: images.fellowshipGroupPhoto4, alt: 'Fellowship Group Photo 4' },
                  { src: images.fellowshipGroupPhoto5, alt: 'Fellowship Group Photo 5' },
                  { src: images.fellowshipGroupPhoto6, alt: 'Fellowship Group Photo 6' },
                  { src: images.highlight2019_02, alt: 'Fellowship in Burnaby - February 2019' },
                  { src: images.highlight2019_03, alt: 'Fellowship in Coquitlam - March 2019' },
                  { src: images.highlight2019_04, alt: 'Fellowship in Burnaby - April 2019' },
                  { src: images.highlight2019_07a, alt: 'Fellowship in Burnaby - July 2019' },
                  { src: images.highlight2019_07b, alt: 'Fellowship in Burnaby - July 2019' },
                  { src: images.highlight2019_07c, alt: 'Fellowship in Burnaby - July 2019' },
                  { src: images.highlight2019_10, alt: 'Fellowship in Burnaby - October 2019' },
                  { src: images.highlight2019_12, alt: 'Fellowship in Burnaby - December 2019' },
                  { src: images.highlight2021_09, alt: 'Fellowship in Burnaby - September 2021' },
                  { src: images.highlight2022_03, alt: 'Fellowship in Burnaby - March 2022' },
                  { src: images.highlight2022_05a, alt: 'Fellowship in Burnaby - May 2022' },
                  { src: images.highlight2022_06, alt: 'Fellowship in Burnaby - June 2022' },
                  { src: images.highlight2022_10a, alt: 'Fellowship in Burnaby - October 2022' },
                  { src: images.highlight2022_10b, alt: 'Fellowship in Richmond - October 2022' },
                  { src: images.highlight2023_09a, alt: 'Fellowship at SFU - September 2023' },
                  { src: images.highlight2023_09b, alt: 'Fellowship at SFU - September 2023' },
                  { src: images.highlight2023_10, alt: 'Fellowship at SFU - October 2023' },
                  { src: images.highlight2024_11, alt: 'Fellowship in Burnaby - November 2024' },
                  { src: images.highlight2024_12a, alt: 'Christmas Fellowship in Burnaby - December 2024' },
                  { src: images.highlight2024_12b, alt: 'Christmas Fellowship in Burnaby - December 2024' },
                  { src: images.highlight2024_12c, alt: 'Christmas Fellowship in Burnaby - December 2024' },
                  { src: images.highlight2024_12d, alt: 'Christmas Fellowship in Burnaby - December 2024' },
                ]}
                autoPlayInterval={5000}
                onImageClick={onImageClick}
              />
            </Suspense>
          </ErrorBoundary>
        </Box>
      </Container>
    </Box>
  );
}
