import React from "react";
import { Heading } from "../Heading/Heading";

export const CardTitle: React.FC<React.PropsWithChildren<{}>> = function ({
    children,
}) {
    return (
        <Heading marginBottom="4" size="lg">
            {children}
        </Heading>
    );
};
