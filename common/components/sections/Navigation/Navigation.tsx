import NextLink from "next/link";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { Icon } from "~/common/components/elements/Icon/Icon";
import Image from "next/image";

export const Navigation: React.FunctionComponent = function (props) {
    return (
        <Flex paddingY="6" justify="space-between">
            <Flex alignItems="center">
                <Flex>
                    <NextLink href="/">
                        <Box width={150}>
                            <Image
                                width={140}
                                height={30}
                                src="/logo.svg"
                            ></Image>
                        </Box>
                    </NextLink>
                </Flex>

                <Flex paddingX="6">
                    <NextLink href="/about">
                        <Button
                            colorScheme="secondary"
                            paddingRight="6"
                            paddingLeft="6"
                            variant="menu"
                        >
                            About me
                        </Button>
                    </NextLink>
                    <NextLink href="/projects">
                        <Button
                            colorScheme="secondary"
                            paddingRight="6"
                            paddingLeft="6"
                            variant="menu"
                        >
                            Projects
                        </Button>
                    </NextLink>
                    <NextLink href="/contact">
                        <Button
                            colorScheme="secondary"
                            paddingRight="6"
                            paddingLeft="6"
                            variant="menu"
                        >
                            Contact me
                        </Button>
                    </NextLink>
                </Flex>
            </Flex>

            <Flex className="">
                <Button
                    colorScheme="primary"
                    variant="ghost"
                    rightIcon={<Icon name="Download"></Icon>}
                >
                    Download resume
                </Button>
            </Flex>
        </Flex>
    );
};
