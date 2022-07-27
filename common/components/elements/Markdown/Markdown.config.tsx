import React from "react";
import { Heading } from "~/common/components/elements/Heading/Heading";
import { MarkdownProps } from "~/common/components/elements/Markdown/Markdown";
import { Snippet } from "~/common/components/elements/Snippet/Snippet";
import { Text } from "~/common/components/elements/Text/Text";
import { decorateComponent } from "~/utilities/decorateComponent";

function createComponentConfig<T>(config: T) {
    return {
        config: () => config,
        Context: React.createContext(config),
        useConfig: () => {
            const [local, setConfig] = React.useState(config);
            return { config: local, setConfig };
        },
    };
}

export const { config, useConfig: useMarkdownConfig } = createComponentConfig({
    components: {
        h1: decorateComponent(Heading).render((Component) => (props) => (
            <Component
                size="2xl"
                marginTop="8"
                marginBottom="4"
                {...props}
            ></Component>
        )),
        h2: decorateComponent(Heading).render((Component) => (props) => (
            <Component
                size="xl"
                marginTop="8"
                marginBottom="4"
                {...props}
            ></Component>
        )),
        h3: decorateComponent(Heading).render((Component) => (props) => (
            <Component
                size="lg"
                marginTop="8"
                marginBottom="4"
                {...props}
            ></Component>
        )),
        p: decorateComponent(Text).render((Component) => (props) => (
            <Component
                fontSize="md"
                marginTop="4"
                marginBottom="2"
                {...props}
            ></Component>
        )),
        code: decorateComponent(Snippet).render<{
            className?: string;
            inline?: boolean;
        }>((Component) => ({ inline, ...props }) => {
            return !inline && /language-(\w+)/.test(props.className ?? "") ? (
                <Component
                    language={props.className?.split(/language-(\w+)/).join("")}
                    {...props}
                ></Component>
            ) : (
                <code {...props}></code>
            );
        }),
    },
});
