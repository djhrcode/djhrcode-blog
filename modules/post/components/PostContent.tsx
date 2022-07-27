import { Flex } from "@chakra-ui/react";
import React from "react";
import { Markdown } from "~/common/components/elements/Markdown/Markdown";

export type PostContentProps = {
    content: string;
};

export const PostContent: React.FC<PostContentProps> = function (props) {
    return (
        <Flex direction="column">
            <Markdown>{props.content}</Markdown>
        </Flex>
    );
};
