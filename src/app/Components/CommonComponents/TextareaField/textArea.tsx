
import { ErrorMessage } from 'formik';
import { TextAreaGroup, TextAreaField, ErrorText } from './style';
import { TextAreaProps } from './types';
import Text from '../Text/text';


export default function TextArea({ name, placeholder, label }: TextAreaProps) {
    return (
        <TextAreaGroup>
            <Text variant='body2' color='primary' fontWeight='500'>{label}</Text>
            <TextAreaField
                as="textarea"
                name={name}
                placeholder={placeholder}
                rows={4}
            />
            <ErrorMessage name={name} component={ErrorText} />
        </TextAreaGroup>
    );
};

