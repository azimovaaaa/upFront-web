import React from 'react';
import '../../App.css';
import {Footer2} from '../Footer';
import {Navbar} from '../../components/Navbar';
import LoginContiner from '../LoginContainer';


function Login_landlord() {
  return(
    <>
      <Navbar />
      <LoginContiner />
      <Footer2 />
    </>
  )
}

function Login_investor() {
  return(
    <>
      <Navbar />
      <LoginContiner />
      <Footer2 />
    </>
  )
}

export {Login_investor, Login_landlord}