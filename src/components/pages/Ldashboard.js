import React from 'react';
import '../../App.css';
import {Footer2} from '../Footer';
import {Navbar2} from '../../components/Navbar';
import '..//Dashcard.css';


export default function Ldashboard() {
  return(
    <>
      <Navbar2 />
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
          {/* <ul className='dash__items'>
            <div className='prop'>
              <div className='prop-info'>
                <h2>Property Location Heatmap</h2>
                <h1>--</h1>
              </div>
            </div>
            <div className='prop'>
              <div className='prop-info'>
                <h2>Tenants that paid on time</h2>
                <h1>--</h1>
              </div>
            </div>
          </ul> */}
          
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
      <Footer2 />
    </>
  )

}
