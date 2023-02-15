import React from 'react';
import '../App.css';
import {Footer2} from './Footer';
import {Navbar} from './Navbar';
import './LearnMore.css';

export default function LearnMore(props) {
  return(
    <>
      <Navbar />
      <div className="LearnMore-form-container">
            <form className="LearnMore-form" onSubmit={props.onSubmit}>
                <div className="LearnMore-form-content">
                    <h1 className="LearnMore-form-title">Sign Up</h1>
                    <p>to learn more about UpFront and recieve a demo video.</p>
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
                    
                    
                    <div className="d-grid gap-2 mt-3 button">
                      <button type="submit" className="btn btn-primary">
                          Submit
                      </button>
                    </div>
    
                    <div className="error">
                        {props.errors.message && <p>{props.errors.message}</p>}
                    </div>
                    
                    
                </div>
            </form>
        </div>
    </>
  )
}
