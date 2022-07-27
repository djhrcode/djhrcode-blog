import { Button } from "@chakra-ui/react";
import React, { ComponentProps, ComponentElement } from "react";

export type DecoratorFunctionComponent<
    C extends React.FunctionComponent,
    Props = {}
> = {
    render<Extend = {}>(
        factory: (
            Component: C
        ) => (props: Extend & React.ComponentProps<C>) => JSX.Element
    ): DecoratorFunctionComponent<C, React.ComponentProps<C> & Extend>;
    renderWithRef<Extend = {}>(
        factory: (
            Component: C
        ) => React.ForwardRefRenderFunction<React.ComponentRef<C>, Extend & React.ComponentProps<C>>
    ): DecoratorFunctionComponent<C, React.ComponentProps<C> & Extend>;
} & React.FunctionComponent<React.ComponentProps<C> & Props>;

export function decorateComponent<C extends React.FunctionComponent<any>>(
    Component: C
): DecoratorFunctionComponent<C> {
    function decorator(props: React.ComponentProps<C>) {
        return <Component {...props}></Component>;
    }

    decorator.render = function (factory) {
        return factory(Component);
    } as DecoratorFunctionComponent<C>["render"];

    decorator.renderWithRef = function (factory) {
        return React.forwardRef(factory(Component)) as unknown;
    } as DecoratorFunctionComponent<C>["renderWithRef"];

    return decorator as DecoratorFunctionComponent<C>;
}
