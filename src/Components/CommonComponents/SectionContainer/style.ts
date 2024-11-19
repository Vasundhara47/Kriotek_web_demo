import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
    display: flex;
    padding: 100px;
    gap: 50px;
    background-color: #faf7fa;
    margin-top:70px;
   
   @media (max-width:992px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:30px;
    margin-top:30px;
    gap: 20px;
    
   }
  
   /* @media (max-width:768px){
    justify-content: flex-start;
    align-items: start;
   } */
`


export const LeftContainer = styled(motion.div)`
    flex: 50%;
    display: flex;
    justify-content: end;
    .img{
        border-radius: 20px;
    }

    @media (max-width:768px){
        justify-content: center;

        .img{
            height: 300px;
            width: 300px;
           
        }
    }

`


export const RightContainer = styled(motion.div)`
    flex: 50%;

    @media (max-width:992px){
       
        text-align: center;
    }
   
   
`


