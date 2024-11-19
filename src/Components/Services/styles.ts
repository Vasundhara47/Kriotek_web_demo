import Icon from "../CommonComponents/Icon";
import styled from "styled-components";
import { motion } from "framer-motion";

export const ServicesSection = styled.section`
   display: flex;
   flex-direction: column;
   padding: 30px;
   gap: 30px;
`

export const CardContainer = styled(motion.div)`
   display: flex;
   gap: 20px;
 
   justify-content: center;
   align-items: center;

   @media (max-width:768px){
      flex-direction: column;
   }
`

export const Card = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #faf9f5;
   border-radius: 20px;
   box-shadow: 0px 0px 2px #bfbfbd;
   padding:  25px 12px;
   width: 300px;
   text-align: center;
   cursor: pointer;


   &:hover{
    border: 1px solid #515151;
    box-shadow: 0px 0px 20px 1px #abaaa7;

    .icon{
        background-color: ${({ theme }) => theme.colors.primary};
        color:${({ theme }) => theme.colors.secondary};
    }
   }

   @media (max-width:768px){
      width: 250px;
   }

`

export const Title = styled.h4`
   font-size: 1.2rem;
   color: ${({ theme }) => theme.colors.primary};
`

export const Description = styled.p`
   color: ${({ theme }) => theme.colors.gray};
   line-height: 25px;
`