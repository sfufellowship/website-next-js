'use client';

import { Suspense } from 'react';
import { Box, Container, Typography, alpha, Modal, CircularProgress } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { images } from '@/src/constants/images';
import GoogleCalendar from '@/src/components/forms/GoogleCalendar';
import SectionHeader from '@/src/components/common/SectionHeader';
import { introduction } from '@/src/content/introduction';
import { StaticImageData } from 'next/image';
import { ErrorBoundary } from '@/src/components/ErrorBoundary';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import PhotoGallerySection from '@/src/components/sections/PhotoGallerySection';
import MembersSection from '@/src/components/sections/MembersSection';
import ContactSection from '@/src/components/sections/ContactSection';
import ActivitiesSection from '@/src/components/sections/ActivitiesSection';

export default function Home({ params: { lang } }: { params: { lang: 'zh' | 'en' } }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData | string>('');
  const [modalImageLoaded, setModalImageLoaded] = useState(false);

  const handleImageClick = (imageSrc: StaticImageData | string) => {
    setSelectedImage(imageSrc);
    setModalImageLoaded(false);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalImageLoaded(false);
  };

  return (
    <ErrorBoundary>
      <Box component="main">
        {/* Hero Section */}
        <Box
          id="home"
          sx={{
            height: '70vh',
            minHeight: '500px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            pt: 7,
          }}
        >
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
            <Image
              src={images.sfuBg}
              alt="SFU Campus"
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="100vw"
              placeholder="blur"
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: alpha('#000', 0.6),
                zIndex: 1,
              }}
            />
          </Box>
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto', px: 3 }}>
              <Typography
                variant="h2"
                component="h1"
                color="white"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontSize: { xs: '2.5rem', md: '3.75rem' },
                }}
              >
                {introduction[lang].title}
              </Typography>
              <Typography
                variant="h5"
                color="white"
                sx={{
                  mb: 4,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                }}
              >
                {introduction[lang].subtitle}
              </Typography>
              <Typography
                color="white"
                sx={{
                  mb: 2,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  maxWidth: '700px',
                  mx: 'auto',
                }}
              >
                {introduction[lang].description}
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Photo Gallery Section */}
        <PhotoGallerySection lang={lang} onImageClick={handleImageClick} />

        {/* Activities Section */}
        <ActivitiesSection lang={lang} onImageClick={handleImageClick} />

        {/* Members Section */}
        <MembersSection lang={lang} />

        {/* Events Section */}
        <Box id="events" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'grey.50' }}>
          <Container maxWidth="lg">
            <SectionHeader title={lang === 'zh' ? '日历' : 'Calendar'} />
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <GoogleCalendar />
              </Suspense>
            </ErrorBoundary>
          </Container>
        </Box>

        {/* Contact Section */}
        <ContactSection lang={lang} />

        {/* Image Modal */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="image-modal"
          aria-describedby="enlarged-image"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90vw',
              height: '90vh',
              bgcolor: 'transparent',
              outline: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={handleCloseModal}
          >
            {!modalImageLoaded && (
              <CircularProgress
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1,
                }}
              />
            )}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                opacity: modalImageLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={selectedImage}
                alt="Enlarged fellowship photo"
                style={{
                  objectFit: 'contain',
                  margin: 'auto',
                }}
                fill
                sizes="100vw"
                priority
                onLoad={() => setModalImageLoaded(true)}
              />
            </Box>
          </Box>
        </Modal>
      </Box>
    </ErrorBoundary>
  );
}
