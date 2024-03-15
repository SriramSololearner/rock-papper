import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#f5f5f5",
            paper: "#fff",
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#1f2937",
            paper: "#374151",
        },
    },
});