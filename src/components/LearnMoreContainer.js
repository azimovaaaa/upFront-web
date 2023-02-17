import React, { useState } from 'react';
import axios from 'axios';
import { validateLearnMore } from '../utils/FormValidate';
import LearnMore from './LearnMore';

// import "bootstrap/dist/css/bootstrap.min.css"

function LearnMoreContainer() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const onChange = (event) => {
        const {name , value} = event.target;
        
        if(name === 'firstName'){
            setFirstName(value);
        } else if(name === 'lastName'){
            setLastName(value);
        } else if(name === 'email'){
            setEmail(value);
        }
    }

    const submitLearnMore = (userInfo) => {
        const params = {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email
        };

        axios
            .post('tenant/api/learn-more', params)
            .then(res => {
                if (res.status == 201) {
                    /* TODO: update page to remove inputs */
                    setSuccess(true);
                    setErrors({
                        message: "Your information was submitted successfully."
                    });
                } else {
                    setErrors({
                        message: "There was an error."
                    });
                }
            })
            .catch(err => {
                console.log("Data submit error: ", err.message);
            });
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const userInfo = {
            firstName: firstName,
            lastName: lastName,
            email: email
        };

        const payload = validateLearnMore(userInfo);

        if (payload.success) {
            setErrors({});
            submitLearnMore(userInfo);
        } else {
            const newErrors = payload.errors;
            const message = payload.message;
            setErrors({
                ...newErrors,
                message: message
            });
            console.log('Form errors: ', errors);
        }
    }

    return (
        <div>
            <LearnMore
                onSubmit={onSubmit}
                onChange={onChange}
                errors={errors}
                firstName={firstName}
                lastName={lastName}
                email={email}
                success={success}
            />
        </div>
    )
}

export default LearnMoreContainer;
