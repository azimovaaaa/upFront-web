import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import HeroSectionInv from '../HeroSectionInv';
import {Footer} from '../Footer';
import {Navbar} from '../../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}

function Home_investor() {
  return (
    <>
      <Navbar />
      <HeroSectionInv />
      <Footer />
    </>
  );
}

export {Home, Home_investor}
