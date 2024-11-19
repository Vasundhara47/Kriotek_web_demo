import styled from "styled-components";
import IcoMoon, { IconProps } from "react-icomoon";
import { Iconprops } from "./types";

export const StyledIcon = styled(IcoMoon) <IconProps>`
   color: ${({ theme }) => theme.colors.primary};
   padding: 12px;
   border-radius: 50%;
   
`

export const IconContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 68px; 
    height: 68px;

`
export const SmallIcon = styled(IcoMoon) <IconProps>`
    color: ${({ theme }) => theme.colors.primary};
    
`

export const FooterIconContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
    padding: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px; 
    height: 35px;
    cursor: pointer;
    transition: border 0.3s ;

    transform:  color 0.3 ease;
    &:hover{
        border: 1px solid ${({ theme }) => theme.colors.terniry};
        color:${({ theme }) => theme.colors.terniry};

        & > *{
            color:${({ theme }) => theme.colors.terniry};
        }

    }
`

export const FooterIcon = styled(IcoMoon) <IconProps>`
    color: ${({ theme }) => theme.colors.secondary};
    transition: color 0.3s ;
   
    

`