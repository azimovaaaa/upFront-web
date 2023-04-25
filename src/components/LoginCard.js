import React from 'react';
import './LoginCard.css';
import { Link } from 'react-router-dom';


function LoginCardL(props) {
    return (
        <>
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={props.onSubmit}>
                <div className="Auth-form-content">
                    <h1 className="Auth-form-title">Landlord Log In</h1>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                        type="email"
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
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        name="password"
                        value={props.password}
                        onChange={props.onChange}
                        />
                    </div>
                    <div className="error">
                        {props.errors.password && <p>{props.errors.password}</p>}
                    </div>
                    <div className="d-grid gap-2 mt-3 button">
                            <button type="submit" className="btn btn-primary" href ="/landlord-dashboard">
                                Sign In
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
};

function LoginCardI(props) {
    return (
        <>
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={props.onSubmit}>
                <div className="Auth-form-content">
                    <h1 className="Auth-form-title">Investor Log In</h1>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                        type="email"
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
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        name="password"
                        value={props.password}
                        onChange={props.onChange}
                        />
                    </div>
                    <div className="error">
                        {props.errors.password && <p>{props.errors.password}</p>}
                    </div>
                    <div className="d-grid gap-2 mt-3 button">
                            <button type="submit" className="btn btn-primary" href ="/investor-dashboard">
                                Sign In
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

export {LoginCardL, LoginCardI};
