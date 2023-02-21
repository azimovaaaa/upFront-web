import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div className='footer-left'>
        <div class='footer-logo'>
          <Link to='/'>
            <img alt="upfront logo" src="images/logo2.png" class="footer-logo"/>
          </Link>
        </div>
        <h2>Creative financing for the modern landlord</h2>
        <hr></hr>
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
            <small class='website-rights'>© UpFront LLC</small>
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
