import { ThemeOverride } from '@chakra-ui/react';
import { extendTheme as useCustomTheme } from '@chakra-ui/react';

/**
 * Custom components configs
 */
import { ButtonConfig } from '~/common/components/elements/Button/Button.config'
import { HeadingConfig } from '~/common/components/elements/Heading/Heading.config'
import { TextConfig } from '~/common/components/elements/Text/Text.config';
import { ThemeColors } from '~/common/components/layouts/Theme/ThemeColors.config';

export function createTheme<T extends ThemeOverride>(config: T): T {
    return config;
}

export const theme = createTheme({
    colors: ThemeColors,

    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },

    components: {
        Button: ButtonConfig,
        Heading: HeadingConfig,
        Text: TextConfig,
    },

    fonts: {
        body: `'Work Sans', sans-serif`,
        heading: `'Work Sans', sans-serif`,
    },

    styles: {
        global: {
            '*': {
                letterSpacing: "0rem"
            },
            body: {
                bg: "#19171E"
            }
        }
    }
})

export const config = useCustomTheme(theme);
