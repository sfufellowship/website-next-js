'use client';

import { Box, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Suspense } from 'react';
import { ErrorBoundary } from '@/src/components/ErrorBoundary';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import GoogleForm from '@/src/components/forms/GoogleForm';
import { contact } from '@/src/content/contact';
import { images } from '@/src/constants/images';

interface ContactSectionProps {
  lang: 'zh' | 'en';
}

export default function ContactSection({ lang }: ContactSectionProps) {
  return (
    <Box id="contact" component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: { xs: 4, md: 0 } }}>
              <Typography variant="h4" component="h2" gutterBottom color="primary">
                {contact[lang].title}
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <a href={contact[lang].email.href}>{contact[lang].email.text}</a>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <a href={contact[lang].address.href} target="_blank" rel="noopener noreferrer">
                      {contact[lang].address.text}
                    </a>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <a href={contact[lang].phone.href}>{contact[lang].phone.text}</a>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InstagramIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <a href={contact[lang].social.instagram.href} target="_blank" rel="noopener noreferrer">
                      {contact[lang].social.instagram.text}
                    </a>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FacebookIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <a href={contact[lang].social.facebook.href} target="_blank" rel="noopener noreferrer">
                      {contact[lang].social.facebook.text}
                    </a>
                  </ListItemText>
                </ListItem>
              </List>
              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                {contact[lang].wechatQrTitle}
              </Typography>
              <Box sx={{ position: 'relative', width: '200px', height: '200px', mx: 'auto', mt: 2 }}>
                <Image
                  src={images.wechatQrCode}
                  alt="WeChat QR Code"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="200px"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <GoogleForm />
              </Suspense>
            </ErrorBoundary>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
