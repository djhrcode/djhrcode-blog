import { Avatar, Divider, Flex, Tag } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Button } from "~/common/components/elements/Button/Button";
import { Heading } from "~/common/components/elements/Heading/Heading";
import { Icon } from "~/common/components/elements/Icon/Icon";
import { Text } from "~/common/components/elements/Text/Text";
import { PostShareButton } from "~/modules/post/components/PostShareButton";
import { PostEntity } from "~/modules/post/domain/PostEntity";

export type PostHeaderProps = Pick<
    PostEntity["data"],
    "category" | "title" | "date" | "readingTime" | "description" | "tags"
>;

export const PostHeader: React.FunctionComponent<PostHeaderProps> = function (
    props
) {
    return (
        <Flex flexDirection="column" marginTop="2rem">
            <Flex
                marginBottom="2rem"
                alignItems="center"
                width="100%"
                justifyContent="space-between"
            >
                <Flex alignItems="center">
                    <Avatar marginRight="4" src="/profile-light.png"></Avatar>
                    <Flex direction="column">
                        <Text
                            fontWeight="400"
                            fontSize="lg"
                            letterSpacing="tight"
                        >
                            Daniel Hernández
                        </Text>
                        <Text>
                            Published at {props.date}
                            <Text
                                as="span"
                                color="secondary.default"
                                marginRight="1"
                                marginLeft="1"
                                fontSize="lg"
                            >
                                •
                            </Text>
                            {props.readingTime} read
                        </Text>
                    </Flex>
                </Flex>
                <Text
                    fontWeight="medium"
                    fontSize="lg"
                    color="secondary.default"
                ></Text>
                <PostShareButton />
            </Flex>
            <Heading marginBottom="2" fontWeight="bold" size="xl">
                {props.title}
            </Heading>

            <Text
                marginTop="1rem"
                marginBottom="1rem"
                fontSize="xl"
                fontStyle="italic"
                letterSpacing="tight"
                fontWeight="400"
                color="whiteAlpha.700"
            >
                {props.description}
            </Text>
            <Divider marginTop="1rem" marginBottom="1rem"></Divider>
        </Flex>
    );
};
