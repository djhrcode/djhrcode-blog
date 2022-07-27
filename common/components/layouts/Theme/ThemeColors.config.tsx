export const ThemeColors = {

    primary: {
        ghost: "#735CFF20",
        ghostHover: "#735CFF40",

        solid: "linear-gradient(66.21deg, #4200FF -19.2%, #9500A3 34.32%, #E00051 85.65%)",

        default: "#938AFF",

        50: "#E7E5FF",
        100: "#BDB7FF",
        200: "#938AFF",
        300: "#735CFF",
        400: "#4B2EFF",
        500: "#4200FF", // you need this
        800: "#3800D6", // you need this
        700: "#2D00AD", // you need this
        600: "#18005C", // you need this
    },
    secondary: {
        ghost: "#00D68920",
        ghostHover: "#00D68940",

        solid: "linear-gradient(69.18deg, #6100FF -16.79%, #225EE8 32.86%, #00D689 86.67%)",

        default: "#00D689",

        50: "#E7FFF6",
        100: "#BEFFE7",
        200: "#6AFFC9",
        300: "#40FFBA",
        400: "#00D689",
        500: "#00AD6F", // you need this
        800: "#008455", // you need this
        700: "#005C3B", // you need this
        600: "#00432B", // you need this
    },
    accent: {
        ghost: "#F5B80020",
        ghostHover: "#F5B80040",

        default: "#F5B800",

        50: "#FFF8E5",
        100: "#FFEDB7",
        200: "#FFE28A",
        300: "#FFD65C",
        400: "#FFCB2E",
        500: "#F5B800", // you need this
        800: "#CC7B00", // you need this
        700: "#A35800", // you need this
        600: "#7B4200", // you need this
    },
};

export type ThemeColorsType = keyof typeof ThemeColors;
