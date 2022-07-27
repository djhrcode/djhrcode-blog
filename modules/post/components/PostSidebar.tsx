import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export type PostHeaderProps = {
    cover: string;
};

export const PostHeader: React.FunctionComponent<PostHeaderProps> = function (
    props
) {
    return (
        <Flex className="post__header">
            <Image width="1100px" height="500px" src={props.cover}></Image>
        </Flex>
    );
};
