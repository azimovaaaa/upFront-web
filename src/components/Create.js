import React from 'react';
import './Create.css';

// import "bootstrap/dist/css/bootstrap.min.css"

function Create() {
    return (
        <>
        <div className="Create-form-container">
            <form className="Create-form">
                <div className="Create-form-content">
                    <h1 className="Create-form-title">Create an account</h1>
                    <p>UpFront transforms ongoing rental contract revenue into instant capital without risk or debt.</p>
                    <div className="name">
                        <label>First Name</label>
                        <label>Last Name</label>
                    </div>
                    <div className="name">
                        <input
                        type="first"
                        className="form-control mt-1"
                        placeholder="Enter First name"
                        />
                        <input
                        type="last"
                        className="form-control mt-1"
                        placeholder="Enter Last name"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3 pass">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        />
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

                    <p className="registered">
                        {/* <a href="#">Forgot password?</a> */}
                        Already registered? <a href="/login">Sign in</a>
                    </p>
                    
                </div>
            </form>
        </div>
        </>
    )
}

export default Create;
