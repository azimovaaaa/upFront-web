import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img alt="upfront logo" src="images/logo.png" class="nav-logo"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                For Landlords
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/home-investor'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                For Investors
              </Link>
            </li>
            
          </ul>
          {button && <Button buttonStyle='btn--outline'>Join mailing list</Button>}
        </div>
      </nav>
    </>
  );
};

function Navbar2() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' onClick={closeMobileMenu}>
            <img alt="upfront logo" src="images/logo.png" class="nav2-logo"/>
          </Link>
        
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/landlord-dashboard'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/landlord-marketplace'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                List to Marketplace
              </Link>
            </li>
            
            
          </ul>
          
        </div>
      </nav>
    </>
  );
}


export {Navbar, Navbar2};
