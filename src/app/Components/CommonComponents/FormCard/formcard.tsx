"use client"
import Image from "next/image";
import { FormContainer, Heading, FormSection, Seperator, Hr1, Hr2, GoogleButton, LogoImage } from "./style";
import Logo from "../../../../../public/Images/logo.png"
import { PropsType } from "./types";


export function FormCard({ children, heading }: PropsType) {
    return (
        <FormSection>
            <FormContainer>
                <div>
                    <LogoImage><Image src={Logo} alt="logo" height={100} /></LogoImage>
                    <Heading>{heading}</Heading>
                </div>
                <div>
                    {children}
                    <div>
                        <Seperator>
                            <Hr1 />
                            or
                            <Hr2 />
                        </Seperator>
                        <GoogleButton className='googleBtn'>
                            <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png'></img>
                            Sign In with Google
                        </GoogleButton>
                    </div>
                </div>


            </FormContainer>
        </FormSection>
    )
}