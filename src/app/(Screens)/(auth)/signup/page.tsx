"use client"
import Button from '@/app/Components/CommonComponents/Buttons/Button'
import FormCard from '@/app/Components/CommonComponents/FormCard'
import InputField from '@/app/Components/CommonComponents/InputField'
import { Formik } from 'formik'
import { FormContainer } from './style'
import { validationSchema } from './schema'
import Link from 'next/link'


function Page() {

    return (
        <FormCard heading='Signup to continue'>
            <Formik
                initialValues={{ firstname: '', lastname: '', email: '', password: '', confirmPassword: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log('Form values:', values);
                    resetForm();

                }}
            >
                <FormContainer>
                    <InputField name='firstname' placeholder='Firstname' icon='user' />
                    <InputField name='lastname' placeholder='Lastname' icon='user' />
                    <InputField name="email" placeholder="Email" icon="envelop" />
                    <InputField name="password" placeholder='Password' icon="lock" type='password' />
                    <InputField name="confirmPassword" placeholder='Confirm Password' icon="lock" type='password' />

                    <Button title='Sign Up' type="submit" width='100%' />
                    <span>Already have an account?
                        <Link href={'/login'} className='link'
                        > Log In
                        </Link>
                    </span>
                </FormContainer>
            </Formik>

        </FormCard>
    )
}

export default Page
