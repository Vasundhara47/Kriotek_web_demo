import { Form } from "formik";
import styled from "styled-components";

export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;


   

    span{
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.gray};

        .link{
            color: ${({ theme }) => theme.colors.terniry};
        }
    }
`


