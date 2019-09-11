import React from 'react';

import {withFormik, Form, Field } from 'formik';



function OnboardingForm ({values}){

    return (
        <>
            <Form>
                <Field type='text' placeholder='Name' name='name'/>
                <Field type='email' placeholder='Email' name='email'/>
                <Field type='password' placeholder='Password' name='password'/>
                <label><Field type='checkbox' value = {values.tos} name = 'tos' /></label>
                <Field type='submit' placeholder='Submit' name='Submit'/>
            </Form>
        </>
    )
}

const OnboardingFormWithFormik = withFormik({
    mapPropsToValues({name, email, password}){
        return{
            name: name || '',
            email: email || '',
            password: password || '',
        }
    }
})(OnboardingForm);

export default OnboardingFormWithFormik