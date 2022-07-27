import React from "react";
import { Avatar, Box, Button, Divider, Flex, Tag } from "@chakra-ui/react";
import { Text } from "~/common/components/elements/Text/Text";
import { Heading } from "~/common/components/elements/Heading/Heading";
import { Icon } from "~/common/components/elements/Icon/Icon";

export type PostFooterProps = {
    tags?: string[];
};

export const PostFooter: React.FC<PostFooterProps> = function (props) {
    return (
        <Flex marginTop="4" direction="column">
            <Text
                marginRight="2"
                marginBottom="2"
                fontSize="lg"
                fontWeight="medium"
                letterSpacing="tight"
            >
                Article's tags: <br />
            </Text>
            <Flex wrap="wrap">
                {props.tags?.map((tag) => (
                    <Tag key={tag} size="lg" marginRight="1.5">
                        {tag}
                    </Tag>
                ))}
            </Flex>

            <Divider marginTop="6" marginBottom="6"></Divider>

            <Flex
                direction="column"
                paddingTop="10"
                paddingBottom="10"
                paddingRight="16"
                paddingLeft="16"
                background="·"
                borderRadius="xl"
                alignItems="center"
            >
                <Avatar
                    size="xl"
                    marginRight="4"
                    marginBottom="4"
                    src="/profile-light.png"
                ></Avatar>
                <Heading
                    marginBottom="4"
                    textAlign="center"
                    fontSize="3xl"
                    fontWeight="600"
                >
                    Get updated on the next story.
                </Heading>
                <Text
                    textAlign="center"
                    fontSize="lg"
                    fontWeight="400"
                    marginBottom="6"
                    letterSpacing="tight"
                >
                    Follow me on Twitter to get updated when a new story is
                    coming or if you simply want to get in touch with me.
                </Text>

                <Button
                    size="lg"
                    variant="solid"
                    colorScheme="secondary"
                    leftIcon={<Icon name="Twitter"></Icon>}
                >
                    Follow me
                </Button>
            </Flex>
        </Flex>
    );
};
