import React from 'react';
import '../../App.css';
import {Footer2} from '../Footer';
import LoginCard from '../LoginCard';
import {Navbar} from '../../components/Navbar';


function Login_landlord() {
  return(
    <>
      <Navbar />
      <LoginCard />
      <Footer2 />
    </>
  )
}

function Login_investor() {
  return(
    <>
      <Navbar />
      <LoginCard />
      <Footer2 />
    </>
  )
}

export {Login_investor, Login_landlord}