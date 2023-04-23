import React, { useState } from 'react';
import axios from 'axios';
import { validateLoginForm } from '../utils/FormValidate';
import {LoginCardI, LoginCardL} from './LoginCard';

// import "bootstrap/dist/css/bootstrap.min.css"

function LoginContainerL() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const onChange = (event) => {
        const {name , value} = event.target;
        
        if(name === 'email'){
            setEmail(value);
        } else if(name === 'password'){
            setPassword(value);
        }
    }

    const submitLogin = (userInfo) => {
        const params = {
            email: userInfo.email,
            password: userInfo.password
        };

        axios
            .post('/api/login', params)
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
                console.log("Login data submit error: ", err.message);
            });
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const userInfo = {
            email: email,
            password: password
        };

        const payload = validateLoginForm(userInfo);

        if (payload.success) {
            setErrors({});
            submitLogin(userInfo);
        } else {
            const newErrors = payload.errors;
            const message = payload.message;
            setErrors({
                ...newErrors,
                message: message
            });
            console.log('Signup form errors: ', errors);
        }
    }

    return (
        <div>
            <LoginCardL
                onSubmit={onSubmit}
                onChange={onChange}
                errors={errors}
                email={email}
                password={password}
            />
        </div>
    )
};

function LoginContainerI() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const onChange = (event) => {
        const {name , value} = event.target;
        
        if(name === 'email'){
            setEmail(value);
        } else if(name === 'password'){
            setPassword(value);
        }
    }

    const submitLogin = (userInfo) => {
        const params = {
            email: userInfo.email,
            password: userInfo.password
        };

        axios
            .post('/api/login', params)
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
                console.log("Login data submit error: ", err.message);
            });
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const userInfo = {
            email: email,
            password: password
        };

        const payload = validateLoginForm(userInfo);

        if (payload.success) {
            setErrors({});
            submitLogin(userInfo);
        } else {
            const newErrors = payload.errors;
            const message = payload.message;
            setErrors({
                ...newErrors,
                message: message
            });
            console.log('Signup form errors: ', errors);
        }
    }

    return (
        <div>
            <LoginCardI
                onSubmit={onSubmit}
                onChange={onChange}
                errors={errors}
                email={email}
                password={password}
            />
        </div>
    )
}

export {LoginContainerL, LoginContainerI};
