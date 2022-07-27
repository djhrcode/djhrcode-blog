import { Button as LibraryButton } from "@chakra-ui/react";
import React from "react";
import { decorateComponent } from "~/utilities/decorateComponent";

export const Button = decorateComponent(LibraryButton).renderWithRef(
    (Component) => (props, ref) => <Component {...props} ref={ref}></Component>
);
