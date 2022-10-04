import { Container } from "@chakra-ui/react";
import React from "react";
import { Footer } from "~/common/components/sections/Footer/Footer";
import { Navigation } from "~/common/components/sections/Navigation/Navigation";

export const MainLayout: React.FunctionComponent<React.PropsWithChildren> =
    function ({ children }) {
        return (
            <Container maxWidth={1120}>
                <Navigation></Navigation>
                {children}
                <Footer></Footer>
            </Container>
        );
    };
