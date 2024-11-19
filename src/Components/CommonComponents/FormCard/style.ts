import styled from "styled-components";

export const FormSection = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    /* overflow-y: hidden; */

    @media (max-width:600px){
        /* overflow-y: auto; */
    }
`
export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 0px 20px 12px ${({ theme }) => theme.colors.gray2};
    flex-direction: column;
    width: 22%;
    border-radius: 20px;
    padding-top: 10px;
    padding-bottom: 40px;
    gap: 10px;


    @media (max-width:400px) {
        width: 100%;
        padding-bottom: 15px;
        padding-top: 4px;
        box-shadow: none;
    }
   
    @media (min-width: 400px) and (max-width:600px){
        width: 90%;
    }
    @media (min-width: 600px) and (max-width:900px){
        width: 50%;
    }
    @media (min-width: 900px) and (max-width:1300px){
        width: 40%;
    }

    @media (max-height:700px) and (min-width:800px){
        flex-direction: row;
        width: 80%;
        padding-top: 20px;
        justify-content: space-around;
    }

`

export const Heading = styled.h4`
    color: ${({ theme }) => theme.colors.terniry};
    font-size: 1rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`


export const Seperator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    color: ${({ theme }) => theme.colors.gray};
    margin: 10px 0px;
`

export const Hr1 = styled.hr`
   width: 210px;
   margin: 0px 4px;
`

export const Hr2 = styled.hr`
    width: 100%;
    margin: 0px 4px;
`

export const GoogleButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    padding:  11px 50px;
    /* width: 56%; */
    border-radius: 20px;
    transition: background-color 0.5s;
    cursor: pointer;

    img{
        width: 15px;
        margin-right: 10px;
    }
    &:hover{
        background-color:${({ theme }) => theme.colors.gray};
        color: ${({ theme }) => theme.colors.secondary};
    }

    /* @media (max-width:400px){
        width: 65%;
    } */
`

export const LogoImage = styled.div`
    height: 80px;

    @media (max-width:600px){
        height: 60px;
        
    }
`