import { ComponentStyleConfig } from "@chakra-ui/react";

export const CustomColorSchemes = new Set([
    "primary",
    "secondary",
    "info",
    "accent",
]);

export const ButtonConfig = {
    baseStyle: {
        fontWeight: 500,
        letterSpacing: "tight"
    },
    variants: {
        ghost: ({ colorScheme }) => {
            return CustomColorSchemes.has(colorScheme) ? {
                color: `${colorScheme}.default`,
                bg: `${colorScheme}.ghost`,
                _hover: {
                    bg: `${colorScheme}.ghostHover`
                }
            } : {}
        },
        solid: ({ colorScheme }) => {
            return CustomColorSchemes.has(colorScheme) ? {
                color: `white`,
                bg: `${colorScheme}.solid`,
                _hover: {
                    bg: `${colorScheme}.solid`,
                    boxShadow: "inset 0px 100px 100px #fff4"

                },
            } : {}
        },
        outline: ({ colorScheme }) => {
            return CustomColorSchemes.has(colorScheme) ? {
                color: `${colorScheme}.default`,
                borderWidth: 2,
                borderColor: `${colorScheme}.default`,
            } : {}
        },
        menu: ({ colorScheme }) => {
            return CustomColorSchemes.has(colorScheme) ? {
                color: 'white',
                _hover: {
                    color: `${colorScheme}.default`,
                },
            } : {}
        }
    }
} as ComponentStyleConfig
