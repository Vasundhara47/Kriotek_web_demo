import styled from "styled-components";
import Link from "next/link";
import { NavlinkProps } from "./types";

export const NavLinks = styled.div`
     display: flex;
     gap: 25px;
     justify-content: center;
     align-items: center;

     @media (max-width:700px){
         flex-direction: column;
         align-items: start;
         gap: 15px;
     }

    
`

export const LinkItem = styled(Link) <NavlinkProps>`
     color: ${({ theme, customColor }) => theme.colors[customColor]};
     font-size: 14px;
     padding:11px 18px;  
     text-decoration: none;
     border-radius: 30px;
     transition: background-color 0.3s ;
  

     &:hover{        
          color: ${({ theme }) => theme.colors.secondary};
          background-color: ${({ theme }) => theme.colors.primary};
          /* text-transform: uppercase; */
          
          
          ${({ secondary, theme }) =>
          secondary && `
            text-decoration : underline;
            text-underline-offset: 6px;           
    }
        `
     }
     }    
`;

export const ExtendedNavLinks = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     @media (max-width:700px){
          /* display: none; */
     }

    
`