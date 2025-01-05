"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2D3436",
            light: "#636E72",
            dark: "#1E272E",
        },
        secondary: {
            main: "#FD746C",
            light: "#FF9B95",
            dark: "#C44640",
        },
    },
    typography: {
        fontFamily: "'Open Sans', sans-serif",
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 600,
        },
        h3: {
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: "none",
                },
            },
        },
    },
});

export default theme;
