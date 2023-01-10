import React from "react";
import { Box } from "@chakra-ui/react";

export const CardContent: React.FC<React.PropsWithChildren<{}>> = function ({
    children,
}) {
    return (
        <Box paddingY="8" paddingX="6">
            {children}
        </Box>
    );
};
