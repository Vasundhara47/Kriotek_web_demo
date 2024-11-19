"use client"
import React from 'react';
import { TextProps } from './typex';
import { StyledText } from './style';

function Text({ variant, fontWeight, color, children }: TextProps) {
    return (
        <StyledText variant={variant} fontWeight={fontWeight} color={color}>
            {children}
        </StyledText>
    );
}

export default Text;
