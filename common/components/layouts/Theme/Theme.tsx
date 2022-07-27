import { ChakraProvider, useTheme } from "@chakra-ui/react";
import React from "react";
import { config } from "~/common/components/layouts/Theme/Theme.config";

export const ThemeLayout: React.FunctionComponent<React.PropsWithChildren> = function ({ children }) {
    const theme = useTheme()

    console.log("theme", theme)

    return (
        <ChakraProvider theme={config}>
            {children}
        </ChakraProvider>
    );
}