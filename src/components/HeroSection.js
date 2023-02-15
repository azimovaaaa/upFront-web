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
          <h1 class="txt-shine">Transform rental contracts into upfront capital</h1>
          <p>Built For Landlords To Gain Early Liquidity</p>
          <Button className='btns'
              buttonSize='btn--large'
              >
                Join our Mailing List to Stay in Touch
          </Button>
        </div>
      </div>
      
      <div className='hero-container2'>
        <div className='text_2'>
          <img alt="How it works" src="images/LL-laptop-homepage.png" class="w-full"/>
            <h1>Eliminate tenant nonpayment risk</h1>
            <p>Post your contracts on the UpFront marketplace and receive advanced proceeds instantly, without the wait or the risk.
               Define payout on your own terms.</p>
        </div>
      </div>

      <div className='hero-container3'>
        <div class='how'>
          <img alt="How it works" src="images/howitworks.png" class="w-full"/>
        </div>
      </div>
      
      <div className='text_3'>
        <h1>Benefits</h1>
        <p>Turn your monthly rental income into instant capital, by removing resident nonpayment risk, while providing a new form of liquidity without taking on debt. Connect your systems and see how much capital you can access today.</p>
        
        <div className='text_3-btns'>
          <Button>
            Join our Mailing List to Stay in Touch
          </Button>
        
        </div>
      </div>
    </>
    

  );
}

export default HeroSection;
