"use client"
import Button from '@/Components/CommonComponents/Buttons/Button'
import FormCard from '@/Components/CommonComponents/FormCard'
import InputField from '@/Components/CommonComponents/InputField'
import { Formik } from 'formik'
import { FormContainer } from './style'
import { validationSchema } from './schema'
import Link from 'next/link'


function Page() {

    return (
        <FormCard heading='Login to continue'>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log('Form values:', values);
                    resetForm();

                }}
            >
                <FormContainer>
                    <InputField name="email" placeholder="Email" icon="envelop" />
                    <InputField name="password" placeholder='Password' icon="lock" type='password' />

                    <Button title='Login' type="submit" width='100%' />
                    <span>Don't have an account?
                        <Link href={'/signup'} className='link'
                        > Sign Up
                        </Link>
                    </span>
                </FormContainer>
            </Formik>

        </FormCard>
    )
}

export default Page
