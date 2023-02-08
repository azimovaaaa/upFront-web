import React, { useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import SignupForm from './SignupForm';
import { validateSignUpForm } from '../utils/FormValidate';
=======
import { validateSignUpForm } from '../utils/FormValidate';
import SignupCard from './SignupCard';
>>>>>>> a7a6205b971b7cfeb01c4a158283d80f119c7e24

// import "bootstrap/dist/css/bootstrap.min.css"

function SignupContainer() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})

    const onChange = (event) => {
        const {name , value} = event.target;
        
        if(name === 'firstName'){
            setFirstName(value);
        } else if(name === 'lastName'){
            setLastName(value);
        } else if(name === 'email'){
            setEmail(value);
        } else if(name === 'password'){
            setPassword(value);
        }
    }

    const submitSignup = (userInfo) => {
        const params = {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
            password: userInfo.password
        };

        axios
            .post('/api/signup', params)
            .then(res => {
                if (res.data.success === true) {
                    localStorage.token = res.data.token;
                    localStorage.isAuthenticated = true;
                    window.location.reload();
                } else {
                    setErrors({
                        message: res.data.message
                    })
                }
            })
            .catch(err => {
                console.log("Sign up data submit error: ", err.message);
            });
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const userInfo = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        const payload = validateSignUpForm(userInfo);

        if (payload.success) {
            setErrors({});
            submitSignup(userInfo);
        } else {
            const newErrors = payload.errors;
            const message = payload.message;
            setErrors({
                ...newErrors,
                message: message
            });
            console.log('Signup form errors: ', errors);
<<<<<<< HEAD
            /* TODO: represent these errors in the UI */
=======
>>>>>>> a7a6205b971b7cfeb01c4a158283d80f119c7e24
        }
    }

    return (
        <div>
<<<<<<< HEAD
            <SignupForm
=======
            <SignupCard
>>>>>>> a7a6205b971b7cfeb01c4a158283d80f119c7e24
                onSubmit={onSubmit}
                onChange={onChange}
                errors={errors}
                firstName={firstName}
                lastName={lastName}
                email={email}
                password={password}
            />
        </div>
    )
}

export default SignupContainer;
