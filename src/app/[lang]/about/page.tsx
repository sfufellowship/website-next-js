import { Box, Container, Typography } from '@mui/material';

const translations = {
  zh: {
    title: '关于我们',
    content:
      'SFU团契是一个基督教团体，我们欢迎所有SFU的学生和学者参加我们的活动。我们的使命是在校园里传播福音，帮助学生在学习和生活中成长。',
  },
  en: {
    title: 'About Us',
    content:
      'SFU Fellowship is a Christian community that welcomes all SFU students and scholars to join our activities. Our mission is to spread the gospel on campus and help students grow in their studies and life.',
  },
} as const;

export default function About({ params: { lang } }: { params: { lang: 'zh' | 'en' } }) {
  return (
    <Box sx={{ pt: 8 }}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {translations[lang].title}
        </Typography>
        <Typography variant="body1" paragraph>
          {translations[lang].content}
        </Typography>
      </Container>
    </Box>
  );
}
