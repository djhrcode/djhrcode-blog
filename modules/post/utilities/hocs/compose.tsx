import React from "react";

export function compose(
    ...composables: ((
        elem: React.JSXElementConstructor<unknown>
    ) => React.JSXElementConstructor<unknown>)[]
) {
    return function <Element extends React.JSXElementConstructor<unknown>>(
        Component: Element
    ) {
        return composables.reduce(
            (component, composable) => composable(component),
            Component
        );
    };
}
