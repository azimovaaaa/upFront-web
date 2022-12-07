import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Cards from './/Cards.js';


function HeroSection() {
  return (
    <>
      <div className='hero-container'>
        {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        
        <div className='text_1'>
          <h1>Transform rental contracts into upfront capital</h1>
          <p>Built For Landlords To Gain Early Liquidity</p>
          <div className='hero-btns'>
            <Button className='btns'
              buttonSize='btn--medium'
              >
                Get Started
            </Button>
          </div>
        </div>
      
      </div>
      <Cards />
      
      <div className='text_3'>
        <h1>Benefits</h1>
        <p>Turn your monthly rental income into instant capital, by removing resident nonpayment risk, while providing a new form of liquidity without taking on debt. Connect your systems and see how much capital you can access today.</p>
        
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
