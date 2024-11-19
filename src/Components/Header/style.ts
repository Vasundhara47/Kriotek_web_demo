import styled from "styled-components";
import { NavbarContainerProps } from "./types";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    position: fixed;
    top: 0;
    width: 100%; 
    z-index: 1;
     
     
`;

export const NavbarContainer = styled.nav<NavbarContainerProps>`
    display: flex;
    width: 100%;
    height: ${(props) => (props.openNavbar ? "400px" : "80px")};
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.secondary};
   
    z-index: 1;
    box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.gray2};

    @media (max-width: 768px) {
     
        justify-content:center;
    }

    @media (min-width:700px) and (max-width:1024px){
        height: ${(props) => (props.openNavbar ? "140px" : "80px")};
    }
`;

export const MobileMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LeftContainer = styled.div`
    display: flex;
    margin-left: 10px;
    align-items: center;

    @media (max-width: 700px) {
        display: none;
       
    }
`;

export const CenterContainer = styled.div`
    display: flex;
    margin-left: 10px;
    align-items: center;

    @media (max-width: 768px) {
        
    }
`;

export const RightContainer = styled.div`
    display: flex;
    font-size: 2rem;
    gap: 15px;
    justify-content:center;

    @media (max-width: 768px) {
     padding-right:20px;
       
    }

`;

export const NavbarInnerContainer = styled.div`
    display: flex;
    height: 80px; 
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

export const NavlinksContainer = styled.div`
    display: flex;

    @media (max-width:1024px){
        display: none;
    }
`
export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    justify-content: flex-start;
    border-top:1px solid ${({ theme }) => theme.colors.primary};
    padding-top:12px;

    @media (min-width: 1025px) {
        display: none;
    }

    @media (min-width:768px){
        height: 100px;
    }
`;

export const NavLinksExtended = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.primary};
    padding-left:12px;

    *{
        
         align-items: start;
     }

   
`;

export const OpenMenuButton = styled.button`
    height: 70px;
    width: 60px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 40px;
    border: none;
    background-color: transparent;

    @media (min-width: 1025px )  {
        display: none;
    }
`;
