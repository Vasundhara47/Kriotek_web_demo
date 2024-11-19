import styled from 'styled-components'
import { buttonStyleProps } from './types'
import { motion } from 'framer-motion'

export const StyledButton = styled(motion.button) <buttonStyleProps>`
    background-color: ${({ theme }) => theme.colors.terniry};
    padding: 12px 26px;
    color: ${({ theme }) => theme.colors.secondary};
    border-radius: 25px;
    font-size: 14px;
    border: none;
    cursor: pointer;
    width: ${({ width }) => width}


    ${({ secondary, theme }) =>
        secondary && `
            background-color: ${theme.colors.secondary};
            background-color: #fff;
            color: ${theme.colors.primary};
            padding: 10px 15px;

            
    }
        `
    }

    

`