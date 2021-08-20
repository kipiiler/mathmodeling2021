import { createTheme } from "@material-ui/core";

export const mainTheme = createTheme({
  props: {
    MuiCheckbox: {
      disableRipple: true,
    },
    MuiSwitch: {
      disableRipple: true,
    },
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  palette: {
    primary: {
      main: "#532BDC",
    },
    secondary: {
      main: "#1B4D82",
    },
    background: {
      default: "white",
      paper: "white",
    },
    text: {
      primary: "#7B7B7C",
      secondary: "#FAFAFA",
    },
  },
  typography: {
    fontFamily: [
      "MONTSERRAT",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "64px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "24px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "19px",
      fontWeight: 400,
    },
    h4: {
      fontSize: "18px",
      fontWeight: 400,
    },
    h5: {
      fontSize: "16px",
      fontWeight: 400,
    },
    h6: {},
    caption: {},
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "12px",
    },
    button: {
      fontSize: "16px",
      textTransform: "none",
      fontWeight: "normal",
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1128,
      xl: 1920,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
      textPrimary: {
        color: "#EA7F38",

        "&:hover": {
          color: "#D87533",
        },
      },
      outlinedPrimary: {
        borderColor: "#EDE9FB",
        transition: "0.3s ease-in-out",

        "&:hover": {
          borderColor: "#532BDC",
          backgroundColor: "white",
        },
      },
      containedPrimary: {
        backgroundColor: "#E13131",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#1B4D82",
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: "#F2F2F2",
          color: "#8D9198",
        },
      },
    },
    MuiIcon: {
      fontSizeSmall: {
        fontSize: "14px",
      },
      fontSizeLarge: {
        fontSize: "20px",
      },
    },
    MuiOutlinedInput: {
      root: {
        background: "#E8ECF1",
        "& $notchedOutline": {
          borderColor: "#DEE4ED",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#1B4D82",
        },
        "&$focused $notchedOutline": {
          borderColor: "#1B4D82",
        },
        "&$error $notchedOutline": {
          borderColor: "#E4593B",
        },
      },
    },
  },
});
