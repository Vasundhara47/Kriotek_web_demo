import styled from "styled-components";

export const HeadingContainer = styled.div<{ align?: string }>`
    display: flex;
    align-items: ${({ align }) => align || 'center'};
    flex-direction: column;  

    @media (max-width:992px){
        align-items: center;
        text-align: center;
    }
   
`

export const TitleContainer = styled.div<{ align?: string }>`
    display: flex;
    align-items: center;
    position: relative; 
    bottom: -20px;

    .left{
        display: ${({ align }) => (align == 'left') ? 'none' : 'block'};

        @media (max-width:992px){
            display: block;
        }
    }

    hr {
        background-color: ${({ theme }) => theme.colors.terniry};
        border: none;
        height: 1px;
        width: 30px; 
        margin-left:1px;
        margin: 0px 12px;
      
    }
`
export const Title = styled.h4`
    color: ${({ theme }) => theme.colors.terniry};
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0px ;
`;

export const Subtitle = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.3rem;
    font-weight: 600;
   
    /* @media only screen and (min-width: 768px) {
        max-width: 100%;
    }


   @media only screen and (min-width: 992px) {
       max-width: 90%;
   }


   @media only screen and (min-width: 1200px) {...} */



`;

export const Description = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 30px;
   

    /* @media only screen and (min-width: 768px) {
        max-width: 100%;
    }
   
    @media only screen and (min-width: 992px) {
       max-width: 100%;
   } */
`;


export const ZigzagLine = styled.div`
    width: 80px; 
    height: 6px; 
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="6"><polyline points="0,6 10,0 20,6 30,0 40,6 50,0 60,6 70,0 80,6" fill="none" stroke="%23000000" stroke-width="1"/></svg>');
 
`;
