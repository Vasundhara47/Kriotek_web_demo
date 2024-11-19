import { Formik } from 'formik';
import { validationSchema } from './schema';
import InputField from '../CommonComponents/InputField';
import TextArea from '../CommonComponents/TextareaField/textArea';
import { ContactusContainer, FormContainer, LeftContainer, RightContainer, ContactusGroup, TopContainer, TextContainer } from './style';
import Text from '../CommonComponents/Text';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Button from '../CommonComponents/Buttons/Button';


export default function ContactUs() {

    // Reference and animation trigger for the contact section
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    //Animattion variants
    const containerVariants = {
        hidden: { y: 30, scale: 0.8 },
        visible: { y: 0, scale: 1 }
    }
    return (
        <ContactusContainer id='contactus' >
            <ContactusGroup
                ref={sectionRef}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                    duration: 0.8
                }}
            >
                {/* Left container Text and Form */}
                <LeftContainer >
                    <TextContainer>
                        <Text variant='heading1' fontWeight='600' color='primary'>Get in touch</Text>
                        <Text variant='body1' fontWeight='500' color='gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, suscipit. Molestias quibusdam numquam excepturi</Text>
                    </TextContainer>

                    {/* Contact form using Formik */}
                    <Formik
                        initialValues={{ name: '', email: '', message: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            console.log('Form values:', values);
                            resetForm();
                        }}
                    >
                        <FormContainer>
                            <TopContainer>
                                <InputField name="name" placeholder="John Deo" icon="user" label='Name' />
                                <InputField name="email" placeholder="Johndeo.20@gmail.com" icon="envelop" label='Email' />
                            </TopContainer>
                            <TextArea name="message" placeholder="Write here..." label='Message' />
                            <Button title='submit' type="submit" />
                        </FormContainer>
                    </Formik>
                </LeftContainer>

                {/* Right container for image */}
                <RightContainer>
                    {/* /Image */}
                </RightContainer>
            </ContactusGroup>
        </ContactusContainer>
    )
}