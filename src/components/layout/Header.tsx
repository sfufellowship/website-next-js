'use client';

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const translations = {
  zh: {
    title: 'SFU团契',
    home: '首页',
    activities: '活动',
    members: '成员',
    events: '日历',
    contact: '联系我们',
  },
  en: {
    title: 'SFU Fellowship',
    home: 'Home',
    activities: 'Activities',
    members: 'Members',
    events: 'Events',
    contact: 'Contact',
  },
} as const;

export default function Header() {
  const theme = useTheme();
  const isMobileQuery = useMediaQuery(theme.breakpoints.down('md'));
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.includes('/en') ? 'en' : 'zh';
  const sections = ['home', 'activities', 'members', 'events', 'contact'];

  // Update isMobile state after hydration
  useEffect(() => {
    setIsClient(true);
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSwitch = () => {
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    router.push(`/${newLang}`);
  };

  const scrollToSection = (section: string) => {
    handleClose();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{ bgcolor: 'rgba(255, 255, 255, 0.95)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: { xs: 1, md: 0 }, mr: { md: 4 }, color: 'primary.main' }}
          >
            {translations[currentLang].title}
          </Typography>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              gap: 2,
              ...(isClient && !isMobile && { display: 'flex' }),
              ...(isClient && isMobile && { display: 'none' }),
            }}
          >
            {sections.map((section) => (
              <Button key={section} onClick={() => scrollToSection(section)} sx={{ color: 'text.primary' }}>
                {translations[currentLang][section as keyof (typeof translations)['zh']]}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              ...(isClient && !isMobile && { display: 'none' }),
              ...(isClient && isMobile && { display: 'block' }),
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {sections.map((section) => (
                <MenuItem key={section} onClick={() => scrollToSection(section)}>
                  {translations[currentLang][section as keyof (typeof translations)['zh']]}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Button
            onClick={handleLanguageSwitch}
            sx={{
              ml: 2,
              color: 'primary.main',
              borderColor: 'primary.main',
            }}
            variant="outlined"
            size="small"
          >
            {currentLang === 'zh' ? 'English' : '中文'}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
