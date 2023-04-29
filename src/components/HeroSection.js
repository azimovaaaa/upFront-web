import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import Cards from './/Cards.js';


function HeroSection() {
  return (
    <>
      <div className='hero-container'>
        {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        
        <div className='text_1'>
          <h1 class="txt-shine">Transform rent contracts into upfront capital</h1>
          <p>Built for landlords, property owners, and property managers to access early liquidity – unlock the value of your rental income streams immediately</p>
          <Button className='btns'buttonSize='btn--large'>
            Sign Up
          </Button>
        </div>
      </div>
      
      <div className='hero-container2'>
        <div className='text_2'>
          <img alt="How it works" src="images/LL-laptop-homepage.png" class="w-full"/>
            <h1>Eliminate tenant nonpayment risk</h1>
            <p>Post your contracts on the UpFront marketplace and receive offers for advanced proceeds, eliminating the wait and risk. Define payout on your own terms.</p>
        </div>
      </div>

      <div className='hero-container3'>
        <div class='how'>
          <img alt="How it works" src="images/howitworks.png" class="w-full"/>
        </div>
      </div>
      
      <div className='text_3'>
        <h1>Benefits</h1>
        <p>Access low-cost non-debt and non-dilutive net working capital immediately for maintenance and repair, financing property acquisitions, or any day-to-day cash needs. Connect your systems and see how much capital you can access today.</p>
        
        <div className='text_3-btns'>
          <Button>
            Get Started
          </Button>
        
        </div>
      </div>
    </>
    

  );
}

export default HeroSection;
