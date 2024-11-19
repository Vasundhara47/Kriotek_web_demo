import styled from 'styled-components';
import { TextProps } from './typex';

export const StyledText = styled.p<TextProps>`
  color: ${({ color, theme }) => theme.colors[color] || theme.colors.primary};
  font-size: ${({ variant, theme }) => theme.fontSize[variant] || theme.fontSize.body1};
  font-weight: ${({ fontWeight, theme }) => fontWeight || 500};
  margin: 0;
`;
