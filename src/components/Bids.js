import React from 'react';
import {Navbar2} from '../components/Navbar';
import {Footer2} from './Footer';
import './Bids.css';

function Bids() {
  return (
    <>
      <Navbar2 />

      <>
      <div className='back_to_lm'>
        <a  href="/landlord-marketplace"><span>&#8592;</span>List to Marketplace</a>
      </div>
      <div className='market_dash__container'>
        <div className='dash__wrapper'>

          <div class="unit_title">
              <h2>The Smiths | 411 West 112th St | Unit #332</h2>
              <b>New York, NY</b>
          </div>
          <div class="wrapper">
            <h3>Marketplace Status:</h3>
            <b>In Process</b>
            <div></div>
            <div></div>
        
            <h3>Building Information</h3>
            <b></b>
            <b>Unit Type</b>
            <b>-</b>
            <b>Size</b>
            <b>-</b>
            <b>Building Code Number</b>
            <b>-</b>
            <b>Occupancy Status</b>
            <b>-</b>
            <div> </div>
            <div> </div>

            <h3>Tenant Information</h3>
            <b></b>
            <b>Number of Tenants</b>
            <b>-</b>
            <b>Average Tenant Rating</b>
            <b>-</b>
            <b>Prepays</b>
            <b>-</b>
            <b>Total Unpaid Charges</b>
            <b>-</b>
            <b>Upcoming Lease Expiration</b>
            <b>-</b>
            <b>Previous Tenant Rent Tradeout</b>
            <b>-</b>
            <b>Unit Household Income</b>
            <b>-</b>
            <b>Rent to Income Ratio</b>
            <b>-</b>
            <b>Unit Downtime b/t Leases</b>
            <b>-</b>
            <div> </div>
            <div> </div>
            <h3>Parking Information</h3>
            <b></b>
            <b>Number of Parking Spaces</b>
            <b>-</b>
            <b>Non-rent Parking Spaces</b>
            <b>-</b>
            <b>Number of Storage Units</b>
            <b>-</b>
            
          </div>
                
        </div>

        <div className='dash__wrapper_right'>

          <div class="unit_title">
              <h2>Bids</h2>
          </div>
          <div class="wrapper_right">
            <h3>Investor</h3>
            <h3>Offer</h3>
            <b>Brevan Howard Asset Management</b>
            <b> 80% Percent Value<br></br>
                4% above original percentage<br></br>
                UpFront Capital: $26,000<br></br>
                Investor Return: $7,800</b>
            <h3>Assets (in millions)</h3>
            <b>$98,400</b>

            <hr /><hr />

            <h3>Investor</h3>
            <h3>Offer</h3>
            <b>Bridgewater Associates</b>
            <b> 60% Percent Value<br></br>
                15% below original percentage<br></br>
                UpFront Capital: $20,000<br></br>
                Investor Return: $10,800 </b>
            <h3>Assets (in millions)</h3>
            <b>$26,400</b>

            
          </div>
                
        </div>
        
      </div>
    </>

      <Footer2 />
    </>
  );
}

export default Bids;