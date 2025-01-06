'use client';

import { Box } from '@mui/material';

export default function GoogleForm() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '1200px',
        '& iframe': {
          border: 'none',
          width: '100%',
          height: '100%',
        },
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfg7580ockzBI1hk5ls6kCB625toGT63ycT1E2flom_RXZyAw/viewform?embedded=true"
        title="Contact Form"
        loading="lazy"
        aria-label="Contact Form"
      />
    </Box>
  );
}
