import React from 'react';
import './/Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>This section is under construction</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Placeholder'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Placeholder'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Placeholder'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Placeholder'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Placeholder'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>      
          <div className='text_2'>
            <h1>Eliminate tenant nonpayment risk</h1>
            <p>Connect to UpFront and receive advanced proceeds without the wait or the risk.</p>
            <p>Define payout on your own terms.</p>
          </div>
        </div>
      </div>
      <div class='how'>
        <h1>How Does It Work?</h1>
        <div class="how-it-works">
          <div class="w-full">
            {/* <div class="flex flex-wrap justify-center">
              <div class="px-4 py-16 lg:hidden">
                <img alt="How it works" src="/img/founderpath-animation/founderpath-animation.svg" class="w-full"/>
              </div>
              <div class="hidden lg:block">
                <div class="founderpath-animation relative py-24 flex flex-wrap justify-center">
                  <div class="relative flex flex-wrap justify-center overflow-hidden">
                    <div class="bg-gradient-to-r from-grayLightest via-grayLightest to-transparent absolute top-0 bottom-2/3 left-0 w-1/3 z-10"></div>
                    <div class="bg-gradient-to-r from-grayLightest via-grayLightest to-transparent absolute top-0 bottom-0 left-0 w-1/6 z-20"></div>
                    <div class="bg-gradient-to-r from-grayLightest via-grayLightest to-transparent absolute top-0 bottom-0 left-0 w-1/6 z-20"></div>
                    <div class="bg-gradient-to-r from-grayLightest via-grayLightest to-transparent absolute bottom-0 top-2/3 left-0 w-1/3 z-10"></div>
                    <img alt="dots" src="/img/founderpath-animation/founderpath-animation-dots.svg" class="ml-36 mr-16"></img>
                  </div>
                  <div class="z-30 relative -ml-8">
                    <img alt="square" src="/img/founderpath-animation/founderpath-animation-square.svg"/>
                    <img alt="founderpath-bg" src="/img/founderpath-animation/founderpath-bg.svg" class="founderpath-animation-logo-bg"/>
                    <img alt="founderpath" src="/img/founderpath-animation/founderpath-lg.svg" class="founderpath-animation-logo-icon"/>
                  </div>
                </div>
              </div>
            </div> */}
            <img alt="How it works" src="images/howitworks.png" class="w-full"/>

            <div class='flex-wrap'>
              <div class='steps'>
                <div class='step-num'>1</div>
                <p class='step-text'>Connect your existing payment and rental management tools</p>
              </div>
              <div class='steps'>
                <div class='step-num'>2</div>
                <p class='step-text'>Post rental contracts for sale in the UpFront marketplace</p>
              </div>
              <div class='steps'>
                <div class='step-num'>3</div>
                <p class='step-text'>Proceeds get wired within 24 hours of transaction</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default Cards;
