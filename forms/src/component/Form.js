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
    //method
    mapPropsToValues({name, email, password}){
        return{
            name: name || '',
            email: email || '',
            password: password || '',
        }
    },
    //method
    handleSubmit: (props)=>{
        console.log(props)
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
        }
    }

`;
export default OnboardingFormWithFormik; 