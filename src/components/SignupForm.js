import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import './SignupForm.css';

function SignupForm(props) {
    return (
        <>
        <div className="Create-form-container">
            <form className="Create-form" onSubmit={props.onSubmit}>
                <div className="Create-form-content">
                    <h1 className="Create-form-title">Create an account</h1>
                    <p>UpFront transforms ongoing rental contract revenue into instant capital without risk or debt.</p>
                    <div className="name">
                        <label>First Name</label>
                        <label>Last Name</label>
                    </div>
                    <div className="name">
                        <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Enter First name"
                        name="firstName"
                        value={props.firstName}
                        onChange={props.onChange}
                        />
                        <input
                        type="last"
                        className="form-control mt-1"
                        placeholder="Enter Last name"
                        name="lastName"
                        value={props.lastName}
                        onChange={props.onChange}
                        />
                    </div>
                    <div className="error">
                        {props.errors.firstName && <p>{props.errors.firstName}</p>}
                        {props.errors.lastName && <p>{props.errors.lastName}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        name="email"
                        value={props.email}
                        onChange={props.onChange}
                        />
                    </div>
                    <div className="error">
                        {props.errors.email && <p>{props.errors.email}</p>}
                    </div>
                    <div className="form-group mt-3 pass">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        name="password"
                        value={props.password}
                        onChange={props.onChange}
                        />
                        <div className="error">
                            {props.errors.password && <p>{props.errors.password}</p>}
                        </div>
                        <p>Must be at least 8 characters</p>
                    </div>
                    
                    <p className="registered">
                        {/* <a href="#">Forgot password?</a> */}
                        By continuing you agree to the UpFront <a href="/"> terms of service </a> and <a href="/"> privacy policy </a>. 
                    </p>
                    <div className="cont-button">
                        <button formaction='/landlord-home' type="submit" className="btn">
                            Continue
                        </button>
                    </div>
                    <div className="error">
                        {props.errors.message && <p>{props.errors.message}</p>}
                    </div>
                    <p className="registered">
                        {/* <a href="#">Forgot password?</a> */}
                        Already registered? <a href="/login-landlord">Sign in</a>
                    </p>
                    
                </div>
            </form>
        </div>
        </>
    )
}

export default SignupForm;
