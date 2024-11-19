import styled from 'styled-components';
import { Field } from 'formik';

export const TextAreaGroup = styled.div`
    position: relative;
    width: 100%;
`;

export const TextAreaField = styled(Field)`
    width: 100%;
    padding: 10px 15px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    font-size: 16px;
    outline: none;
    /* resize: none; */

    ::placeholder{
        color: ${({ theme }) => theme.colors.gray};
        font-size: 12px;
    }
`;

export const ErrorText = styled.div`
    font-size: 12px;
    color: red;
`;
