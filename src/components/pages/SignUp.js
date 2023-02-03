import React from 'react';
import '../../App.css';
import {Footer2} from '../Footer';
import SignupContainer from '../SignupContainer';
import {Navbar} from '../../components/Navbar';

export default function SignUp() {
  return(
    <>
      <Navbar />
      <SignupContainer />
      <Footer2 />
    </>
  )
}
