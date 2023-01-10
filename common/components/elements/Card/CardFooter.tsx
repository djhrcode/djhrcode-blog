import React from "react";
import { Flex } from "@chakra-ui/react";

export const CardFooter: React.FC<React.PropsWithChildren<{}>> = function ({
    children,
}) {
    return (
        <Flex marginTop="8" alignItems="center" justifyContent="space-between">
            {children}
        </Flex>
    );
};
