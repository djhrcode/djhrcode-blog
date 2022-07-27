import React from "react";
import { Flex } from "@chakra-ui/react";

export type PostProps = {};

export const Post: React.FunctionComponent<React.PropsWithChildren<PostProps>> = function ({ children }) {
    return (
        <Flex margin="auto" maxWidth="640px" className="post" direction="column">
            {children}
        </Flex>
    );
};
