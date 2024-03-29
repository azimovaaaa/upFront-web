import React from 'react';
import './Dashcard.css';

function InvDashCard(props) {
  const { bidsOutstanding, avgPercentReceived, targetIRR, 
    pendingBids, totalContractsCompleted, ROI } = props;

  return (
    <>
      <div className='dash__container'>
        <div className='dash__wrapper'>
          <ul className='dash__items'>
            <div className='prop'>
              <div className='prop-info'>
                <p>Bids Outstanding</p>
                <h1>{bidsOutstanding}</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <p>Average Percent Provided</p>
                <h1>{avgPercentReceived}%</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <p>IRR</p>
                <h1>{targetIRR}%</h1>
              </div>
            </div>
          </ul>      
          <ul className='dash__items'>
            <div className='prop'>
              <div className='prop-info'>
                <p>Bids Accepted</p>
                <h1>{0}</h1>
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
                <p>MOIC</p>
                <h1>{ROI}x</h1>
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
                <h1>${props.portfolioValue.toLocaleString()}</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <p>Remaining Trading Limit</p>
                <h1>${props.tradingLimit.toLocaleString()}</h1>
              </div>
            </div>

          </ul>
          <ul className='dash__items'>
            <div className='prop'>
              <div className='prop-info'>
                <p>Selected Contracts</p>
                <h1>{props.checkedRows.length}</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <p>Contract Payouts</p>
                <h1>{props.contractPayouts}</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='prop-info'>
                <p>Cancellations</p>
                <h1>{props.cancellations}</h1>
              </div>
            </div>
          </ul>            
                
        </div>

        <div className='dash__wrapper'>
               
          <ul className='dash__items'>

            <div className='market_prop'>
              <div className='market_prop_info_right'>
                <p>Total Value of Contracts Selected</p>
                <h1>${props.totalValueSelected.toLocaleString()}</h1>
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
                    <h1>{props.checkedRows.length} {props.checkedRows.length === 1 ? 'property' : 'properties'}</h1>
                </div>
                <div className='post2-bttn'>
                  <button onClick={props.handleButtonClick}>
                    <a class="button" href="#popup">{props.checkedRows.length == 1 ? 'Place Bid' : 'Place Bids'}</a> 
                  </button>
                </div>
              </div>

              <div className='pop-table'>
                <table className='unit-table'>
                  <thead>
                  <tr>
                      <th >On-Time Payments</th>
                      <th >Gross Value</th>
                      <th >Proposed Percent Value</th>
                  </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>{props.checkedRows.length * 3}</td>
                          <td>${props.totalValueSelected.toLocaleString()}</td>
                          <td>{props.sliderValue}%</td>
                      </tr>
                  </tbody>
                </table>
              </div>

              <div className='slider'>
                <b>Percent upfront: </b>
                <input
                  type='range'
                  min={0}
                  max={100}
                  value={props.sliderValue}
                  onChange={(e) => props.setSliderValue(parseInt(e.target.value))}
                />
                <span>{props.sliderValue}%</span>
              </div>
              <div className='capital'>
                <div class="capital-return" >
                    <b>Investor Return</b>
                    <p>${(props.totalValueSelected * (100-props.sliderValue) / 100).toLocaleString()}</p>
                  </div>
                <div class="capital-return">
                  <b>UpFront Capital</b>
                  <p>${(props.totalValueSelected * props.sliderValue / 100).toLocaleString()}</p>
                </div>
              </div>              
          </div>
        </div>
      </div>
    </>
  );
}

export {InvDashCard, InvMarketCard};
