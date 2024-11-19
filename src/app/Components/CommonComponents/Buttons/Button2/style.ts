import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 10px 18px;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 25px;
    font-size: 14px;
    border: none;
    cursor: pointer;


    &:hover{
        background-color: ${({ theme }) => theme.colors.secondary};
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.secondary};
        box-shadow: 0px 0px 12px 6px #515151;
        
    }
    
    

    

`