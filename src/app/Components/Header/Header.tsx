"use client";
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    OpenMenuButton,
    NavLinksExtended,
    CenterContainer,
    HeaderContainer,
    NavlinksContainer,
    MobileMenu

} from "./style";
import { useState } from "react";
import Button from "../CommonComponents/Buttons/Button";
import Image from "next/image";
import LogoImg from "../../../../public/Images/logo.png"
import Navlinks from "../CommonComponents/Navlinks/navlinks";
import Icon from "../CommonComponents/Icon/smallIcon";
import Link from "next/link";

export default function Header() {

    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <HeaderContainer>
            <NavbarContainer openNavbar={openNavbar}>
                <NavbarInnerContainer>
                    {/* Mobile menu toggle button */}
                    <MobileMenu>
                        <OpenMenuButton onClick={() => setOpenNavbar((prev) => !prev)}>
                            {openNavbar ?
                                <Icon icon="close-outline" /> : // Close icon when menu is open
                                <Icon icon="menu" />            // Menu icon when menu is closed
                            }
                        </OpenMenuButton>
                    </MobileMenu>

                    {/* Website logo */}
                    <LeftContainer>
                        <Image src={LogoImg} alt="logo" height={100} />
                    </LeftContainer>

                    {/* Center container for navigation links */}
                    <CenterContainer>
                        <NavlinksContainer>
                            <Navlinks customColor="primary" />
                        </NavlinksContainer>
                    </CenterContainer>

                    {/* Right container with action buttons */}
                    <RightContainer>
                        <Link href={"/signup"}><Button title="Sign Up" secondary={true} /></Link>
                        <Link href={"/login"}><Button title="Log In" /></Link>
                    </RightContainer>
                </NavbarInnerContainer>

                {/* Extended Navigation links for mobile view*/}
                {openNavbar && (
                    <NavbarExtendedContainer>

                        <NavLinksExtended>
                            <Navlinks customColor="primary" />
                        </NavLinksExtended>

                    </NavbarExtendedContainer>
                )}
            </NavbarContainer>
        </HeaderContainer>
    );
}
