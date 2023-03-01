import React from 'react';
import { Link } from 'react-router-dom';
import './Dashcard.css';
import { Button } from './Button';

function DashCard(props) {
  return (
    <>
      <div className='dash__container'>
        <div className='dash__wrapper'>
          <ul className='dash__items'>
            <div className='prop'>
              <div className='prop-info'>
                <p>Contracts Outstanding</p>
                <h1>--</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <p>Average Percent Received</p>
                <h1>--</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <p>Target IRR</p>
                <h1>--</h1>
              </div>
            </div>
          </ul>      
          <ul className='dash__items'>
            <div className='prop'>
              <div className='prop-info'>
                <p>Contracts Not on Marketplace</p>
                <h1>--</h1>
              </div>
            </div>
            <div className='prop'>
              <div className='prop-info'>
                <p>Total Contracts Completed</p>
                <h1>--</h1>
              </div>
            </div>
            <div className='prop'>
              <div className='prop-info'>
                <p>ROI</p>
                <h1>--</h1>
              </div>
            </div>
            
          </ul>      
        </div>

        <div className='dash__wrapper'>
               
          <ul className='dash__items'>
            <div className='prop'>
              <div className='prop-info-right'>
                <p>Property Location Heatmap</p>
                <h1>--</h1>
              </div>
            </div>
            <div className='prop'>
              <div className='prop-info-right'>
                <p>Tenants that paid on time</p>
                <h1>--</h1>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

function MDashCard(props) {
  return (
    <>
      {/* <li className='dash__item'>
        <Link className='dash__item__link' to={props.path}>
          <div className='dash__item__info'>
            <h5 className='dash__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li> */}
      <div className='market_dash__container'>
        <div className='dash__wrapper'>
          <ul className='dash__items'>
            <div className='prop'>
              <div className='market_prop_info'>
                <p>Total Number of Contracts</p>
                <h1>--</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='market_prop_info'>
                <p>Contracts Listed on Marketplaced</p>
                <h1>--</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='market_prop_info'>
                <p>Contracts Available for Listing</p>
                <h1>--</h1>
              </div>
            </div>
            <div className='prop'>
              <div className='market_prop_info'>
                <p>Available UpFront Capital</p>
                <h1>--</h1>
              </div>
            </div>
          </ul>      
        </div>

        <div className='dash__wrapper'>
               
          <ul className='dash__items'>

            <div className='market_prop'>
              <div className='market_prop_info_right'>
                <p>Total Value of Contracts Selected</p>
                <h1>$978,000</h1>
              </div>
              <div className='post-bttn'>
                <Button>
                  Post Contracts
                </Button>
              </div>
            </div>

          </ul>

        </div>
      </div>
    </>
  );
}

export {DashCard, MDashCard};
