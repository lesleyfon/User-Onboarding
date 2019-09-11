import React from 'react';

import {withFormik, Form, Field } from 'formik';



function OnboardingForm (){

    return (
        <>
            <Form>
                <Field type='text' placeholder='Name' name='name'/>
                <Field type='email' placeholder='Email' name='email'/>
                <Field type='password' placeholder='Password' name='password'/>
                <label><Field type='checkbox' value = {value.tos} name = 'tos' /></label>
                <Field type='submit' placeholder='Submit' name='Submit'/>
            </Form>
        </>
    )
}