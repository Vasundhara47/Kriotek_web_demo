import React from 'react'
import Logo from "../../../public/Images/logo_white.png"
import Text from "../CommonComponents/Text"
import {
    FooterBottomContainer,
    FooterContainer,
    FooterLeftContainer,
    FooterRightContainer,
    FooterUpperContainer,
    FooterSection,
    FooterLinks,
    HrLine
} from './style'
import Image from 'next/image'
import { LinkItem } from './style'
import Icon from '../CommonComponents/Icon/footerIcon'
import Navlinks from '../CommonComponents/Navlinks/navlinks'

interface Props { }

function Footer(props: Props) {


    return (
        <FooterSection>
            <FooterContainer>
                {/* Upper section of the footer containing logo and social media links */}
                <FooterUpperContainer>
                    {/* Left container for logo */}
                    <FooterLeftContainer>
                        <div>
                            <Image src={Logo} alt='logo' height={100} className='img'></Image>
                        </div>
                        <div>
                            <Text variant='paragraph' color='gray2' fontWeight='500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo aut nemo similique eius</Text>
                        </div>
                    </FooterLeftContainer>

                    {/* Right container for social links */}
                    <FooterRightContainer>
                        <Text variant='subheading' color='secondary' fontWeight='600'>Follow on</Text>
                        <FooterLinks>
                            <Icon icon='facebook' color='#fff' />
                            <Icon icon='twitter' />
                            <Icon icon='instagram' />
                            <Icon icon='envelop' />
                            <Icon icon='youtube' />
                            <Icon icon='linkedin2' />
                        </FooterLinks>
                    </FooterRightContainer>

                </FooterUpperContainer>
                {/* separstor line */}
                <HrLine />

                {/* Bottom section  with navigation links and copyright info */}
                <FooterBottomContainer>
                    <FooterLinks>
                        <Navlinks customColor='secondary' secondary='true' />
                    </FooterLinks>

                    <FooterLinks className='T&Clinks'>
                        <LinkItem href={'/privacypolicy'}>Privacy policy</LinkItem>
                        <LinkItem href={'/terms&conditions'}>Terms & condition</LinkItem>
                    </FooterLinks>

                    {/* Copyright info */}
                    <div>
                        <Text variant='paragraph' color='secondary' fontWeight='500'>Copyright 	&copy; 2024 Kriotek Systems, All Right Reserved.</Text>
                    </div>
                </FooterBottomContainer>


            </FooterContainer>
        </FooterSection >
    )
}

export default Footer
