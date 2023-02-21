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
          <h1 class="txt-shine">A New Way to Invest in Real Estate</h1>
          <p>Built for investors to utilize the stability of rental income for a new risk/return profile with exposure to real estate</p>
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
          <p>Enter your target risk profile and choose rent contracts that fit your criteria and match your goals.</p>
        </div>
      </div>

      <div className='hero-container2'>
        <div className='text_3'>
          <h1>Connect your accounts, bid on contracts,<br></br> and let us do the work</h1>
          <p>We facilitate all payments automatically while you track performance in your dashboard.</p>
        </div>
      </div>
      
      <div className='text_3'>
        <h1>Unlock an Untapped Asset Class</h1>
        <p>An new opportunity to access real estate without the hassle of managing a property. A short-term real estate investment that provides a diversified and competitive return on investment. Contact us to learn more.</p>
        
        <div className='text_3-btns'>
          <Button>
            Join our Mailing List to Stay in Touch
          </Button>
        
        </div>
      </div>
    </>
    

  );
}

export default HeroSectionInv;
