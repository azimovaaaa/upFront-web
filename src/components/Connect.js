import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Connect.css';
import { Link } from 'react-router-dom';
// import Cards from './/Cards.js';


function Connect() {
  return (
    <>
      <div className='connect-container'> 
        <div className='connect-box'>
            <h1>Connect to your property management software providers</h1>
            <p>UpFront works with your existing system to analyze your data and deliver your upfront capital</p>

            <div className='providers'>
            <a href = "https://www.yardi.com/">
                <img alt="upfront logo" src="images/Yardi-logo.png" class="footer-logo"/>
             </a>
             <a href = "https://www.realpage.com/">
                <img alt="upfront logo" src="images/realpage-logo.png" class="footer-logo"/>
             </a>
             <a href = "https://www.entrata.com/">
                <img alt="upfront logo" src="images/entrata-logo.png" class="footer-logo"/>
             </a>
             <a href = "https://myresman.com/">
                <img alt="upfront logo" src="images/resman-logo.png" class="footer-logo"/>
             </a>
             <a href = "https://www.appfolio.com/">
                <img alt="upfront logo" src="images/appfolio-logo.png" class="footer-logo"/>
             </a>
             <a href = "https://www.buildium.com/">
                <img alt="upfront logo" src="images/buildium-logo.png" class="footer-logo"/>
             </a>
             <Link to='/manual-upload'>
                <img alt="upfront logo" src="images/manual-logo.png" class="footer-logo"/>
             </Link>
             
        </div>
        </div>
        
      </div>
    </>
    

  );
}

export default Connect;
