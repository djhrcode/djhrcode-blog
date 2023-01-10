import { Box } from "@chakra-ui/react";
import React from "react";
import { CardContent } from "./CardContent";
import { CardDescription } from "./CardDescription";
import { CardFooter } from "./CardFooter";
import { CardTitle } from "./CardTitle";

type Props = {};

type Component = React.FC<React.PropsWithChildren<Props>> & {
    Content: typeof CardContent,
    Title: typeof CardTitle,
    Description: typeof CardDescription,
    Footer: typeof CardFooter,
}

export const Card: Component = function ({
    children,
}) {
    return (
        <Box
            borderRadius="8px"
            border="solid 2px"
            borderColor="whiteAlpha.100"
            transition="ease-in-out 100ms"
            style={{
                borderCollapse: "unset",
            }}
            _hover={{
                boxShadow: `0px 0px 20px 0px var(--chakra-colors-primary-ghost)`,
                borderWidth: `2px`,
                borderColor: `primary.default`,
            }}
        >
            {children}
        </Box>
    );
};

Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Footer = CardFooter;