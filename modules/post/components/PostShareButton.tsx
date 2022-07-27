import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Icon } from "~/common/components/elements/Icon/Icon";
import { Button } from "~/common/components/elements/Button/Button";

export const PostShareButton: React.FC = function (props) {
    return (
        <Menu placement="top-end">
            <MenuButton
                as={Button}
                variant="ghost"
                colorScheme="secondary"
                leftIcon={<Icon name="Share" />}
            >
                Share post
            </MenuButton>
            <MenuList bgColor="#19171E">
                <MenuItem icon={<Icon name="Twitter"></Icon>}>
                    Share in Twitter
                </MenuItem>
                <MenuItem icon={<Icon name="Facebook"></Icon>}>
                    Share in Facebook
                </MenuItem>
                <MenuItem icon={<Icon name="Github"></Icon>}>
                    Share in Github
                </MenuItem>
            </MenuList>
        </Menu>
    );
};
