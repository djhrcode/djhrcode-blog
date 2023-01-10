import React from "react";
import { Text } from "../Text/Text";

export const CardDescription: React.FC<React.PropsWithChildren<{}>> =
    function ({ children }) {
        return (
            <Text marginBottom="4" fontSize="lg">
                {children}
            </Text>
        );
    };
