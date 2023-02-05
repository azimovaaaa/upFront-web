import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className='footer-left'>
        <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              upfront
              <i class="fa-solid fa-circle"></i>
            </Link>
        </div>
        <h2>The marketplace for landlords to get early liquidity</h2>
        <hr></hr>
        <div class='footer-left-link'>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms of Service</Link>
            <small>© UpFront LLC 2022</small>
          </div>
      </div>

      <div className='footer-right'>
        
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Products</h2>
            <Link to='/'>For Landlords</Link>
            <Link to='/'>For Investors</Link>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Company</h2>
            <Link to='/sign-up'>About</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function Footer2() {
  return(
  <>
    {/* <div className='footer2-container'>
      <medium class='website-rights'>© UpFront LLC 2022</medium>
      <Link to='/'>Terms of Service</Link>
    </div> */}
    <section class='footer2-container'>
        <div class='footer2-container-wrap'>
          <div class='footer-logo'>
            <small class='website-rights'>© UpFront LLC 2022</small>
          </div>
          <div class='footer2-btm-right'>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms of Service</Link>
            
          </div>
        </div>
      </section>
  </>
  )
  
}

export  {Footer, Footer2}
