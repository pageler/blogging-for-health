import { createTheme } from "@mui/material";

export default createTheme({
    palette: {
        primary: {
            main: "#1fbfc1",
        },
        secondary: {
            main: "#ffb300",
        },
        text: {
            light: "#f5f5f5",
            primary: "#1fbfc1",
        },
    },
    components: {
        MuiTextField: {
            defaultProps: {
                size: "small",
                variant: "outlined",
                required: true,
                margin: "dense",
                fullWidth: true,
                InputLabelProps: {
                    //shrink: true,
                    color: "primary",
                },
            },
        },
        MuiButton: {
            defaultProps: {
                size: "small",
                variant: "contained",
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    color: "#fff",
                },
            },
        },
    },
});
