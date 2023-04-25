import React from 'react';
import '../../App.css';
import {Footer2} from '../Footer';
import {Navbar} from '../../components/Navbar';
import {LoginContainerL, LoginContainerI}  from '../LoginContainer';


function Login_landlord() {
  return(
    <>
      <Navbar />
      <LoginContainerL />
      <Footer2 />
    </>
  )
}

function Login_investor() {
  return(
    <>
      <Navbar />
      <LoginContainerI />
      <Footer2 />
    </>
  )
}

export {Login_investor, Login_landlord}