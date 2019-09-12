import React from 'react';
import styled from 'styled-components';
import {withFormik, Form, Field, validateYupSchema } from 'formik';
import * as Yup from 'yup';



function OnboardingForm ({values, touched, errors}){
    console.log(errors)
    console.log(touched)
    return (
        <FormikStyles>
            <Form>
                <div className='fieldDiv'>
                    {touched.name && errors.name && <p className="error">{errors.name}</p>}
                    <Field type='text' placeholder='Name' name='name'/>
                </div>
                <div className='fieldDiv' >
                    {touched.email && errors.email && <p className="error">{errors.email}</p>}
                    <Field type='email' placeholder='Email' name='email'/>
                </div>
                <div>
                    {touched.password && errors.password && <p className="error">{errors.password}</p>}
                    <Field type='password' placeholder='Password' name='password'/>
                </div>
                <label>Terms Of Services <Field type='checkbox' value = {values.tos} name = 'tos' /></label>
                <Field type='submit' placeholder='Submit' name='Submit'/>
            </Form>
        </FormikStyles>
    );
}

const OnboardingFormWithFormik = withFormik({
    //method
    mapPropsToValues({name, email, password}){
        return{
            name: name || '',
            email: email || '',
            password: password || '',
        }
    },

    // validation schema

    validationSchema: Yup.object().shape({
        name: Yup.string().required('This field is required'),
        email: Yup.string().email('Email is required').required(),
        password: Yup.string().min(6, 'password length must be at least 6 letters').required('Password is required'),
    }),
    //method
    handleSubmit: (values, { resetForm})=>{
        
        resetForm()
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
        padding: 32px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        text-align: left;
        input{
            border-left: none;
            height: 25px;
            border-right: none;
            padding: 5px 10px;
            border: 0 0 3px 0;
            border-top: none;
            border-bottom: 3px solid lightgrey;
            width: 100%;
        }
        input:focus{
            outline: none;
            border-bottom: 3px solid darkgrey;
        }
        input[type='submit']{
            border: 1px solid lightgrey;
            border-radius: 20px;
            font-size: 1rem;
            height: 35px;
        }
        input[type='submit']:hover {
            background: darkgrey;;
            color: whitesmoke;
            transition-duration: .5s;
            transition-timing-function: ease-in-out;
        }
       
        .error {
            margin: 10px;
            position: absolute;
            color: #721c24;
            background-color: #f8d7da;
            border-color: #f5c6cb;
            border-radius: 4px;
            padding: 5px 10px;
        }

    }
    .fieldDiv{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
`;
export default OnboardingFormWithFormik; 