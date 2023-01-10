import React from "react";
import { withProps } from "~/modules/post/utilities/hocs/withProps";
import { decorateComponent } from "~/utilities/decorateComponent";
import { Button } from "../Button/Button";

export const Link = withProps({ variant: "link" })(Button)

