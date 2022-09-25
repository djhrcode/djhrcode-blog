import NextLink from "next/link";
import {
    Box,
    Button,
    Divider,
    Flex,
    Grid,
    GridItem,
    Link,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "~/common/components/elements/Icon/Icon";
import Image from "next/image";
import { Heading } from "~/common/components/elements/Heading/Heading";
import { Text } from "~/common/components/elements/Text/Text";

export const Footer: React.FunctionComponent = function (props) {
    return (
        <>
            <Divider marginTop="12"></Divider>

            <Box paddingY="12">
                <Grid
                    templateAreas={`"left center right"`}
                    gridTemplateColumns={"450px 1fr 1fr"}
                    gridGap="12"
                    marginBottom="12"
                    alignItems="flex-start"
                >
                    <GridItem area="left">
                        <Box>
                            <Heading
                                color="primary.default"
                                size="md"
                                marginBottom="2"
                            >
                                I'm Daniel Hernández
                            </Heading>
                            <Text fontSize="lg" maxWidth="350px">
                                A frontend developer that brings to life
                                stunning web applications.
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem area="center">
                        <Box>
                            <Heading
                                color="primary.default"
                                size="md"
                                marginBottom="2"
                            >
                                Discover more
                            </Heading>
                            <Text fontSize="lg">About me</Text>
                            <Text fontSize="lg">Projects</Text>
                            <Text fontSize="lg">Blog posts</Text>
                        </Box>
                    </GridItem>

                    <GridItem area="right">
                        <Box>
                            <Heading
                                color="primary.default"
                                size="md"
                                marginBottom="2"
                            >
                                Contact me
                            </Heading>
                            <Text fontSize="lg">Linkedin</Text>
                            <Text fontSize="lg">Twitter</Text>
                            <Text fontSize="lg">Email me</Text>
                        </Box>
                    </GridItem>
                </Grid>

                <Flex justifyContent="center" marginTop="24">
                    <Text fontSize="lg">
                        Website made by @djhrcode with Next.js
                    </Text>
                </Flex>
            </Box>
        </>
    );
};
