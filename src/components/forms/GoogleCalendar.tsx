"use client";

import { Box, Container, Typography } from "@mui/material";

interface GoogleCalendarProps {
    title: string;
}

export default function GoogleCalendar({ title }: GoogleCalendarProps) {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom align="center">
                {title}
            </Typography>
            <Box
                sx={{
                    width: "100%",
                    height: "600px",
                    "& iframe": {
                        border: "none",
                        width: "100%",
                        height: "100%",
                    },
                }}
            >
                <iframe
                    src="https://calendar.google.com/calendar/b/1/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=America%2FVancouver&src=aW5mb0BzZnVmZWxsb3dzaGlwLm9yZw&src=c2Z1ZmVsbG93c2hpcC5vcmdfdGttbDNqbzJjZjVvNjNqYmU1a3NkNGdxMzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=c2Z1ZmVsbG93c2hpcC5vcmdfODY2dDlzb2gyNG8wbWFrM2xhZmQ0bWMxbmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%234285F4&color=%237CB342&color=%23F6BF26&showNav=1&showDate=1&showTitle=1&showPrint=0&showTabs=1&mode=MONTH&showCalendars=0&title=SFU%E5%9B%A2%E5%A5%91%E6%B4%BB%E5%8A%A8%E5%AE%89%E6%8E%92"
                    scrolling="no"
                    title="SFU Fellowship Calendar"
                />
            </Box>
        </Container>
    );
}
