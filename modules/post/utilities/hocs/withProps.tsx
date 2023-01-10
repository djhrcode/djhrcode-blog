import React from "react";

export function withProps<BaseProps extends Record<string, unknown>>(
    baseProps: BaseProps
) {
    return function <
        Element extends React.JSXElementConstructor<unknown>,
        Props extends React.ComponentProps<Element>
    >(Component: Element) {
        return function (props: Omit<Props, keyof BaseProps>) {
            return <Component {...{ ...(props as any), ...baseProps }} />;
        };
    };
}
