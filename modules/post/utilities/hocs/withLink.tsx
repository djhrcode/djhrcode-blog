import NextLink, { LinkProps } from "next/link";
import React from "react";

export function withLink<
    Element extends React.JSXElementConstructor<unknown>,
    Props extends React.ComponentProps<Element>
>(Component: Element) {
    return function (props: Props & LinkProps) {
        const {
            scroll,
            href,
            passHref,
            as,
            prefetch,
            replace,
            shallow,
            locale,
            legacyBehavior,
            onClick,
            onMouseEnter,

            ...restProps
        } = props;

        return href ? (
            <NextLink
                as={as}
                href={href}
                prefetch={prefetch}
                replace={replace}
                shallow={shallow}
                locale={locale}
                scroll={scroll}
                passHref={passHref}
            >
                <Component {...(restProps as any)} />
            </NextLink>
        ) : (
            <Component {...(restProps as any)} />
        );
    };
}
