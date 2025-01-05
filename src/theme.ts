import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#2E5077",
            light: "#4A6FA5",
            dark: "#1C3049",
            contrastText: "#fff",
        },
        secondary: {
            main: "#C75146",
            light: "#E57373",
            dark: "#8E3B33",
            contrastText: "#fff",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#FAFAFA",
            paper: "#fff",
        },
        text: {
            primary: "#2C3E50",
            secondary: "#546E7A",
        },
        divider: "rgba(0, 0, 0, 0.12)",
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        h1: {
            fontWeight: 700,
            fontSize: "3.5rem",
            lineHeight: 1.2,
        },
        h2: {
            fontWeight: 600,
            fontSize: "2.75rem",
            lineHeight: 1.3,
        },
        h3: {
            fontWeight: 600,
            fontSize: "2.25rem",
            lineHeight: 1.3,
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.75rem",
            lineHeight: 1.4,
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: 1.4,
        },
        h6: {
            fontWeight: 600,
            fontSize: "1.25rem",
            lineHeight: 1.4,
        },
        subtitle1: {
            fontSize: "1.125rem",
            lineHeight: 1.5,
            fontWeight: 500,
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.6,
        },
        button: {
            textTransform: "none", // Prevents all-caps buttons
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "6px",
                    padding: "8px 16px",
                },
                contained: {
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                    },
                },
                outlined: {
                    borderWidth: "1.5px",
                    "&:hover": {
                        borderWidth: "1.5px",
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "12px",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
                    backgroundColor: "#fff",
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "0px 1px 3px rgba(0,0,0,0.05)",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: "#959595 transparent",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "transparent",
                        width: 8,
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "#959595",
                        border: "2px solid transparent",
                    },
                },
                iframe: {
                    backgroundColor: "#fff",
                },
            },
        },
    },
});

export default theme;
