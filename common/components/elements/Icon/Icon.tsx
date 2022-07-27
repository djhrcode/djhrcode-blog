import { Icon as LibraryIcon } from '@chakra-ui/react'
import { decorateComponent } from "~/utilities/decorateComponent";
import { ChevronDownIcon, DownloadIcon, ShareIcon } from "@heroicons/react/outline";
import * as FontAwesomeLogos from 'react-icons/fa'

export const IconComponentsRegistry = {
    Download: DownloadIcon,
    ChevronDown: ChevronDownIcon,
    Share: ShareIcon,
    Facebook: FontAwesomeLogos.FaFacebook,
    Twitter: FontAwesomeLogos.FaTwitter,
    Github: FontAwesomeLogos.FaGithub,
    Instagram: FontAwesomeLogos.FaInstagram,
}

export const IconSizesRegistry = {
    xs: 14,
    sm: 18,
    md: 20,
    lg: 24,
}

export type IconName = keyof typeof IconComponentsRegistry;
export type IconSize = keyof typeof IconSizesRegistry;

export const Icon = decorateComponent(LibraryIcon).render<{ name: IconName, size?: IconSize }>((Component) => (props) => {
    const IconElement = IconComponentsRegistry[props.name];
    const IconSize = IconSizesRegistry[props.size ?? 'md'];

    return <Component height={`${IconSize}px`} width={`${IconSize}px`} as={IconElement}></Component>
})