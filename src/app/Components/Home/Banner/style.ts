import styled from "styled-components";
import backgroundImage from "../../../../../public/Images/banner.jpg"

export const BannerContainer = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${backgroundImage.src});
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.colors.secondary}; 
  padding-left: 80px;
  margin-top:80px;

  @media (max-width:768px){
    height: 50vh;
    justify-content: center;
    padding:20px;
    
  }

  @media (min-width:768px){
    height: 60vh;
    justify-content: center;
  }

  @media (min-width:992px){
    height: 70vh;
    justify-content: flex-start;
   
  }

  @media (min-width: 1200px){
    height: 80vh;
    justify-content: flex-start;
    
  }

  
`

export const ContentContainer = styled.div`

  color: ${({ theme }) => theme.colors.secondary};
  
  @media (max-width:768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 0;


  span {
    font-weight: 500;
  }

  @media (max-width:768px){
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  max-width: 700px;
  margin: 1rem 0 2rem;
  line-height: 1.5;
`;

export const ActionButton = styled.button`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: underline;
  text-underline-offset: 12px;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 10px 12px;


  span{
    text-decoration: underline;
    text-underline-offset: 1px;   
  
  }
  &:hover{  
  
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    border-radius: 20px;
    padding: 9px 12px;

    
   
}

`;
