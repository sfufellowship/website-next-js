'use client';

import { Box, Container } from '@mui/material';
import { Suspense } from 'react';
import { ErrorBoundary } from '@/src/components/ErrorBoundary';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import SectionHeader from '@/src/components/common/SectionHeader';
import CardCarousel from '@/src/components/carousel/CardCarousel';
import ActivityCard from '@/src/components/cards/ActivityCard';
import { activities } from '@/src/content/activities';
import { StaticImageData } from 'next/image';

interface ActivitiesSectionProps {
  lang: 'zh' | 'en';
  onImageClick: (imageSrc: StaticImageData | string) => void;
}

export default function ActivitiesSection({ lang, onImageClick }: ActivitiesSectionProps) {
  // Create activity cards
  const activityCards = activities[lang].items.map((activity, index) => (
    <ActivityCard
      key={index}
      title={activity.title}
      description={activity.description}
      type={activity.type}
      image={activity.image}
      onImageClick={onImageClick}
    />
  ));

  return (
    <Box id="activities" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <SectionHeader title={activities[lang].title} />
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <CardCarousel items={activityCards} itemsPerPage={4} />
          </Suspense>
        </ErrorBoundary>
      </Container>
    </Box>
  );
}
