import React from "react";

export function withDefaultProps(defaultProps: Record<string, unknown>) {
    return function <
        Element extends React.JSXElementConstructor<unknown>,
        Props extends React.ComponentProps<Element>
    >(Component: Element) {
        return function (props: Props) {
            return <Component {...{ ...defaultProps, ...(props as any) }} />;
        };
    };
}
