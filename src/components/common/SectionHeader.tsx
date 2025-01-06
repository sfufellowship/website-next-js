'use client';

import { Box, Typography, Divider, useTheme } from '@mui/material';

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom color="primary">
        {title}
      </Typography>
      <Divider sx={{ width: '60px', margin: 'auto', my: 3, borderColor: theme.palette.primary.main }} />
    </Box>
  );
}
