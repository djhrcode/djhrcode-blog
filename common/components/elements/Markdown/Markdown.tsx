import { Code, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Heading } from "~/common/components/elements/Heading/Heading";
import {
    config,
    useMarkdownConfig,
} from "~/common/components/elements/Markdown/Markdown.config";
import { Snippet } from "~/common/components/elements/Snippet/Snippet";
import { Text } from "~/common/components/elements/Text/Text";
import { decorateComponent } from "~/utilities/decorateComponent";

export type MarkdownProps = {
    content?: string;
    children?: string;
    components?: Partial<
        Record<string & keyof HTMLElementTagNameMap, React.FunctionComponent>
    >;
};

export const Markdown: React.FunctionComponent<MarkdownProps> = function (
    props
) {
    const config = {
        components: {
            h1: decorateComponent(Heading).render((Component) => (props) => (
                <Component
                    size="lg"
                    marginTop="8"
                    marginBottom="4"
                    {...props}
                ></Component>
            )) as React.FC,
            h2: decorateComponent(Heading).render((Component) => (props) => (
                <Component
                    fontSize="2xl"
                    marginTop="8"
                    marginBottom="4"
                    {...props}
                >
                    {props.children}
                    <Text
                        as="span"
                        fontWeight="bold"
                        marginLeft="1"
                        width="auto"
                        color="secondary.default"
                        fontSize="2xl"
                    >
                        #
                    </Text>
                </Component>
            )) as React.FC,
            h3: decorateComponent(Heading).render((Component) => (props) => (
                <Component
                    size="sm"
                    marginTop="8"
                    marginBottom="4"
                    {...props}
                ></Component>
            )) as React.FC,
            p: decorateComponent(Text).render((Component) => (props) => (
                <Component
                    fontSize="xl"
                    marginTop="4"
                    marginBottom="2"
                    lineHeight="1.6"
                    {...props}
                ></Component>
            )) as React.FC,
            code: decorateComponent(Snippet).render<{
                className?: string;
                inline?: boolean;
            }>((Component) => ({ inline, ...props }) => {
                return !inline &&
                    /language-(\w+)/.test(props.className ?? "") ? (
                    <Flex
                        position="relative"
                        marginTop="2rem"
                        marginBottom="2rem"
                        width="100%"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Flex
                            width="calc(100% + 200px)"
                            flexDirection="column"
                            alignItems="stretch"
                        >
                            <Component
                                language={props.className
                                    ?.split(/language-(\w+)/)
                                    .join("")}
                                {...props}
                            ></Component>
                        </Flex>
                    </Flex>
                ) : (
                    <Code
                        fontFamily="JetBrains Mono"
                        fontSize="smaller"
                        fontWeight="medium"
                        borderRadius="md"
                        paddingLeft="1.5"
                        paddingRight="1.5"
                        {...props}
                    ></Code>
                );
            }) as React.FC,
        },
    };
    const [children] = React.useState(props.children ?? props.content ?? "");

    return (
        <ReactMarkdown
            className="markdown"
            children={children}
            components={config.components}
        ></ReactMarkdown>
    );
};
