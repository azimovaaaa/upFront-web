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
                <h2>Contracts Outstanding</h2>
                <h1>--</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <h2>Average Percent Discount</h2>
                <h1>--</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <h2>Target IRR</h2>
                <h1>--</h1>
              </div>
            </div>
          </ul>      
          <ul className='dash__items'>
            <div className='prop'>
              <div className='prop-info'>
                <h2>Contracts not on the marketplace</h2>
                <h1>--</h1>
              </div>
            </div>
            <div className='prop'>
              <div className='prop-info'>
                <h2>Metric</h2>
              </div>
            </div>
            <div className='prop'>
              <div className='prop-info'>
                <h2>Metric</h2>
              </div>
            </div>
          </ul>      
          <ul className='dash__items'>
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
          </ul>
          
        </div>
      </div>
      <Footer2 />
    </>
  )

}
