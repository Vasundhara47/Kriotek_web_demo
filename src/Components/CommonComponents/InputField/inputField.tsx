
import React from 'react';
import { ErrorMessage } from 'formik';
import { FormGroup, IconWrapper, Input, ErrorText, InputFieldContainer } from './style';
import Icon from '../Icon/smallIcon';
import { TextInputProps } from './types';
import Text from '../Text';


export default function InputField({ name, placeholder, icon, type = 'text', label }: TextInputProps) {
    return (
        <InputFieldContainer>
            <Text variant='body2' color='primary' fontWeight='500'>{label}</Text>
            <FormGroup>
                <IconWrapper>
                    <Icon icon={icon} />
                </IconWrapper>

                <Input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                />
                <ErrorMessage name={name} component={ErrorText} />
            </FormGroup>
        </InputFieldContainer>
    );
};


