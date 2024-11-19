import styled from "styled-components";
import { Form } from "formik";
import ContactImg from "../../../public/Images/contact.jpg"
import { motion } from "framer-motion";


export const ContactusContainer = styled.section`
    display: flex;  
    justify-content: center;
    align-items: center;
    margin-top:50px;
    padding-top:30px;

    @media (max-width){
        
    }

`
export const ContactusGroup = styled(motion.div)`
    border: 1px solid #000;
    border-radius:30px ;
    width: 50%;
    display: flex;
    box-shadow: 0px 1px 25px 8px #cacccc , 0px -10px 0px 0px ${({ theme }) => theme.colors.terniry};

    @media (max-width:768px){
       flex-direction:column;
       width: 80%;     
    }
    

    @media  (min-width: 768px) {
        width: 90%;
    }
    @media  (min-width: 1200px) {
        width: 70%;
    }

    @media (min-width: 1500px){
        width: 50%;
    }

   
`

export const LeftContainer = styled.div`
    padding: 30px;
    flex: 60%;

`

export const RightContainer = styled.div`
   flex : 45%;
   background-image: url(${ContactImg.src});
   background-size: cover;
   background-position: center;
   border-radius: 0px 30px 30px 0px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom:-20px;

    @media (max-width){
        text-align: center;
    }

    
`
export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;

    button{
        width: 130px;
    }

    @media (max-width){
        button{
            width:100%;
        }
        
    }
   
`;

export const TopContainer = styled.div`
    display:  flex;
    gap: 20px;

    @media (max-width:768px){
       flex-direction: column;
     
    }
`

