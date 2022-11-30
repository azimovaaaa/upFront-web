import React from 'react';
import '../../App.css';
import {Footer} from '../Footer';
import Faq from '../Faq'
import {Navbar} from '../../components/Navbar';


export default function FAQ() {
  return(
    <>
      <Navbar />
      <Faq />
      <Footer />
    </>
  )
}