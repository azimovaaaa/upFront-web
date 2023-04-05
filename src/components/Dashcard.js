import React from 'react';
import './Dashcard.css';
import { Button } from './Button';

function DashCard(props) {
  const { contractsOutstanding, avgPercentReceived, targetIRR, 
          contractsNotOnMarketplace, totalContractsCompleted, ROI } = props;

  return (
    <>
      <div className='dash__container'>
        <div className='dash__wrapper'>
          <ul className='dash__items'>
            <div className='prop'>
              <div className='prop-info'>
                <p>Contracts Outstanding</p>
                <h1>{contractsOutstanding}</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <p>Average Percent Received</p>
                <h1>{avgPercentReceived}</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <p>Target IRR</p>
                <h1>{targetIRR}</h1>
              </div>
            </div>
          </ul>      
          <ul className='dash__items'>
            <div className='prop'>
              <div className='prop-info'>
                <p>Contracts Not on Marketplace</p>
                <h1>{contractsNotOnMarketplace}</h1>
              </div>
            </div>
            <div className='prop'>
              <div className='prop-info'>
                <p>Total Contracts Completed</p>
                <h1>{totalContractsCompleted}</h1>
              </div>
            </div>
            <div className='prop'>
              <div className='prop-info'>
                <p>ROI</p>
                <h1>{ROI}</h1>
              </div>
            </div>
          </ul>      
        </div>

        <div className='dash__wrapper'>
          <ul className='dash__items'>
            <div className='prop'>
              <div className='prop-info-right'>
                <p>Property Location Heatmap</p>
                <h1>--TODO--</h1>
              </div>
            </div>
            <div className='prop'>
              <div className='prop-info-right'>
                <p>Tenants that paid on time</p>
                <h1>--TODO--</h1>
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
                <button>
                  <a class="button" href="#popup">Post Contracts</a> 
                </button>
              </div>
            </div>

          </ul>

        </div>
        <div id="popup" class="overlay">
          <div class="popup">
              <a class="close" href="#">&times;</a>
              <div className='pop_container'>
                <div class="pop_content">
                    <b>You've selected</b>
                    <h1>411 West 112th St | New York, NY</h1>
                </div>
                <div className='post2-bttn'>
                  <Button>
                    List All Contracts
                  </Button>
                </div>
              </div>

              <div className='pop-table'>
                <table className='unit-table'>
                  <thead>
                  <tr>
                      <th >Unit Type</th>
                      <th >Number of Units</th>
                      <th >Gross Value</th>
                  </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Res, Apts</td>
                          <td>2</td>
                          <td>$32,000</td>
                      </tr>
                  </tbody>
                </table>
              </div>

              <div className='slider'>
                <img alt="placeholder" src="images/placeholder.png" />
              </div>

                <div class="capital-return">
                  <b>UpFront Capital</b>
                  <p>$24,320</p>
                </div>
                <div class="capital-return" >
                  <b>Investor Return</b>
                  <p>$7,680</p>
                </div>
              
          </div>
        </div>
      </div>
    </>
  );
}

export {DashCard, MDashCard};
