import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import Cards from './/Cards.js';


function HeroSectionInv() {
  return (
    <>
      <div className='hero-container'>
        {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        
        <div className='text_1'>
          <h1 class="txt-shine">Invest in a new asset class</h1>
          <p>Built for Investors  to Utilize the stability of rental contracts and diversify yourself among industries</p>
          <Button className='btns'
              buttonSize='btn--large'
              >
                Join our Mailing List to Stay in Touch
            </Button>
        </div>
      </div>
      
      <div className='hero-container2'>
        <div className='text_2'>
          <img alt="How it works" src="images/Inv-homepage-laptop.png" class="w-full"/>
          <h1>Set your criteria and invest on your terms</h1>
          <p>Enter your target risk profile then choose the rental contracts that fit your criteria and match your goals.</p>
        </div>
      </div>

      <div className='hero-container2'>
        <div className='text_3'>
          <h1>Run your portfolio on autopilot</h1>
          <p>We’ll service your contracts automatically, while you track performance in your dashboard.</p>
        </div>
      </div>
      
      <div className='text_3'>
        <h1>Unlock an untapped asset class</h1>
        <p>An opportunity that sits at the intersection of real estate, tech, and alternative investments while capitalizing on disruption brought forth by the pandemic. Contact us to learn more.</p>
        
        <div className='text_3-btns'>
          <Button>
            Get Started
          </Button>
        
        </div>
      </div>
    </>
    

  );
}

export default HeroSectionInv;
