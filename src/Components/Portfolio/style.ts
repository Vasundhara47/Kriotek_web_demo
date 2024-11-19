import styled from "styled-components";
import PortfolioImg from "../../../public/Images/portfolio.jpg"
import { motion } from "framer-motion";

export const PortfolioContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:40px;
    gap: 30px;
    padding: 0px 12px;

    @media (max-width){
        
    }

`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:40px;

    @media (max-width:768px){
        grid-template-columns: 1fr;
    }
`

export const Card = styled(motion.div)`
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${PortfolioImg.src});
    background-size: cover;
    background-position: center;
    width: 350px;
    height: 270px;
    border-radius: 20px;
    padding: 20px 30px 15px 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;

    &:hover{
        border: 1px solid #d4dfe8;
        box-shadow: 0px 6px 15px -2px #10182814;
    }
  
    @media (max-width:768px){
        width: 300px;
    }
`

export const TopContainer = styled.div`
    display: flex;
    justify-content: end;
`

export const BottomConatiner = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    flex-direction: column;
    width: 100px;
    position:absolute;
    bottom: 20px;
`