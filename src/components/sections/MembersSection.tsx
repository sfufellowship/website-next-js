'use client';

import { Box, Container } from '@mui/material';
import { Suspense } from 'react';
import { ErrorBoundary } from '@/src/components/ErrorBoundary';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import SectionHeader from '@/src/components/common/SectionHeader';
import CardCarousel from '@/src/components/carousel/CardCarousel';
import MemberCard from '@/src/components/cards/MemberCard';
import { members } from '@/src/content/members';

interface MembersSectionProps {
  lang: 'zh' | 'en';
}

export default function MembersSection({ lang }: MembersSectionProps) {
  // Create member cards
  const memberCards = members[lang].list.map((member, index) => (
    <MemberCard
      key={index}
      name={member.name}
      role={member.role}
      description={member.description}
      image={member.image}
    />
  ));

  return (
    <Box id="members" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeader title={members[lang].title} />
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <CardCarousel items={memberCards} itemsPerPage={6} />
          </Suspense>
        </ErrorBoundary>
      </Container>
    </Box>
  );
}
