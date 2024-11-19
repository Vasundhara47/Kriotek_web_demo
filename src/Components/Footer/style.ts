import Link from "next/link";
import styled from "styled-components";

export const FooterSection = styled.section`
       background-color: ${({ theme }) => theme.colors.primary};
       padding:60px 10px 40px 10px;
       width: 100%;

       @media (max-width:768px) {
            padding: 10px;
       }
`

export const FooterContainer = styled.div`
       display: flex;
       flex-direction: column;
       gap: 20px;

`

export const FooterUpperContainer = styled.div`
       display: flex;
       justify-content: space-between;
       padding: 0px 100px;

       @media(max-width:768px){
            flex-direction: column;
            padding: 0px;
            gap: 20px;
            
       }

       
`

export const FooterBottomContainer = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 83px;

      @media(max-width:1280px){
            flex-direction: column;
            padding: 10px;
            gap: 15px;
            text-align: center;
      }

     
`

export const FooterLeftContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap: 20px;

`

export const FooterRightContainer = styled.div`
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items:flex-end;

      @media (max-width:768px){
            align-items: flex-start;
      }
     
    
`
export const FooterLinks = styled.div`
      display: flex;     
      gap: 25px;


      @media (max-width:1290px){
            gap: 15px;
            align-items: center;
            justify-content: center;           

      }
`

export const HrLine = styled.hr`
 
      background-color: ${({ theme }) => theme.colors.gray};
      border: none;
      height: 1px;
      width: 90%; 
        

`
export const LinkItem = styled(Link)`
     color: ${({ theme, }) => theme.colors.secondary};
     font-weight: 500;
     font-size: 1rem;
     text-decoration: none;
     transition: color 0.4s;

     &:hover{
      color: ${({ theme }) => theme.colors.terniry}
     }

`;