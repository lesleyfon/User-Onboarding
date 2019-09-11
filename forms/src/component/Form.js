import React from 'react';
import styled from 'styled-components';
import {withFormik, Form, Field } from 'formik';



function OnboardingForm ({values}){
    return (
        <FormikStyles>
            <Form>
                <Field type='text' placeholder='Name' name='name'/>
                <Field type='email' placeholder='Email' name='email'/>
                <Field type='password' placeholder='Password' name='password'/>
                <label>Terms Of Services <Field type='checkbox' value = {values.tos} name = 'tos' /></label>
                <Field type='submit' placeholder='Submit' name='Submit'/>
            </Form>
        </FormikStyles>
    );
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

// styles
const FormikStyles = styled.div`
    form{
        width:  680px;;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        font-family: SIMPSON;
        outline: none;
        position: absolute; 
        top: 25%;
        left: 25%;
        input{
            margin: 5px 5px;
        }
    }

`;
export default OnboardingFormWithFormik; 