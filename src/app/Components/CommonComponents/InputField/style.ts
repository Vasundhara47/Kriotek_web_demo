import styled from 'styled-components';
import { Field } from 'formik';


export const InputFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const FormGroup = styled.div`
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 10px 15px;
    width: 100%;
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    
    ::placeholder{
        color: ${({ theme }) => theme.colors.gray};
        font-size: 12px;
    }
`;

export const IconWrapper = styled.div`
    color: #888;
    margin-right: 10px;
`;

export const Input = styled(Field)`
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    width: 100%;
`;

export const ErrorText = styled.div`
    position: absolute;
    left: 1px;
    top: 45px;
    font-size: 12px;
    color: red;
   
`;
