import React from 'react';
import '../../App.css';
import {Footer2} from '../Footer';
import LoginCard from '../LoginCard';
import {Navbar} from '../../components/Navbar';


export default function Login() {
  return(
    <>
      <Navbar />
      <LoginCard />
      <Footer2 />
    </>
  )
}
