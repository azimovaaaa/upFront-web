import React, { useState } from 'react';
import SignupForm from "./SignupForm"

// import "bootstrap/dist/css/bootstrap.min.css"

function SignupContainer() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (event) => {
        const {name , value} = event.target;
        
        if(name === "firstName"){
            setFirstName(value);
        }
        if(name === "lastName"){
            setLastName(value);
        }
        if(name === "email"){
            setEmail(value);
        }
        if(name === "password"){
            setPassword(value);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({firstName, lastName, email, password});
    }

    return (
        <div>
            <SignupForm
                onSubmit={onSubmit}
                onChange={onChange}
                firstName={firstName}
                lastName={lastName}
                email={email}
                password={password}
            />
        </div>
    )
}

export default SignupContainer;
