import React from 'react';
import './Dashcard.css';

function InvDashCard(props) {
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
          
        </div>
      </div>
    </>
  );
};


function InvMarketCard(props) {
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
              <div className='prop-info'>
                <p>Portfolio Value</p>
                <h1>$978,000</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <p>Remaining Trading Limit</p>
                <h1>$454,353</h1>
              </div>
            </div>

          </ul>
          <ul className='dash__items'>
            <div className='prop'>
              <div className='prop-info'>
                <p>Selected Contracts</p>
                <h1>15</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <p>Contract Payouts</p>
                <h1>$3,231</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <p>Cancellations</p>
                <h1>$0</h1>
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
                  <a class="button" href="#popup">Review Order</a> 
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
                    <h1>Commercial, Office &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span class="fa fa-star"></span> 4.82</h1>
                </div>
                <div className='post2-bttn'>
                  <button>
                  <a class="button" href="#popup">List All Contracts</a> 
                  </button>
                </div>
              </div>

              <div className='pop-table'>
                <table className='unit-table'>
                  <thead>
                  <tr>
                      <th >Gross Value</th>
                      <th >On-Time Payments</th>
                      <th >Gross Value</th>
                      <th >Proposed Percent Value</th>
                  </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Res, Apts</td>
                          <td>98%</td>
                          <td>$32,000</td>
                          <td>98%</td>
                      </tr>
                  </tbody>
                </table>
              </div>

              <div className='slider'>
                <img alt="placeholder" src="images/placeholderinv.png" />
                <b>Slide to bid on new percent value</b>
                <div className='post-bttn'>
                  <button>
                    <a class="button" href="">Bid</a> 
                  </button>
                </div>
              </div>
              <div className='capital'>
                <div class="capital-return" >
                    <b>Investor Return</b>
                    <p>$7,680</p>
                  </div>
                <div class="capital-return">
                  <b>UpFront Capital</b>
                  <p>$24,320</p>
                </div>
              </div>              
          </div>
        </div>
      </div>
    </>
  );
}

export {InvDashCard, InvMarketCard};
