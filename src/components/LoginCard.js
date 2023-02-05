import React from 'react';
import './LoginCard.css';
import { Link } from 'react-router-dom';


function LoginCard() {
    return (
        <>
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h1 className="Auth-form-title">Log In</h1>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3 button">
                            <button formaction='/landlord-home' type="submit" className="btn btn-primary">
                                Submit
                            </button>
                    </div>

                    <div className="login-links">
                        <a href="#">Forgot password?</a>
                        <Link to='/sign-up'>Create new account</Link>
                    </div>
                    
                </div>
            </form>
        </div>
        </>
    )
}

export default LoginCard;
