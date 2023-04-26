import React from 'react';
import './Dashcard.css';


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
                <p>IRR Provided</p>
                <h1>{targetIRR}%</h1>
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
                <p>MOSC Provided</p>
                <h1>{ROI}%</h1>
              </div>
            </div>
          </ul>      
        </div>

        <div className='dash__wrapper'>
          <div className='post-bttn'>
            <button>
              <a class="button" href="/landlord-connect">Upload Contract</a> 
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
};

function MDashCard(props) {
  return (
    <>
      <div className='market_dash__container'>
        <div className='dash__wrapper'>
          <ul className='dash__items'>
            <div className='prop'>
              <div className='market_prop_info'>
                <p>Total Number of Contracts</p>
                <h1>{props.totalCount}</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='market_prop_info'>
                <p>Contracts Listed on Marketplaced</p>
                <h1>{props.postedCount}</h1>
              </div>
            </div>

            <div className='prop'>
              <div className='market_prop_info'>
                <p>Contracts Available for Listing</p>
                <h1>{props.totalCount - props.postedCount}</h1>
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
                  <a class="button" href="#popup">Post Contracts</a> 
                </button>
              </div>
            </div>

          </ul>

        </div>
        <div id="popup" class="overlay">
          <div class="popup">
            <a class="close" href="/landlord-marketplace#">&times;</a>
            <div className='pop_container'>
              <div class="pop_content">
                  <b>You've selected</b>
                  <h1>{props.checkedRows.length} {props.checkedRows.length === 1 ? 'property' : 'properties'}</h1>
              </div>
              <div className='post2-bttn'>
                <button onClick={props.handleButtonClick}>
                  <a class="button" href="#popup">List All Contracts</a> 
                </button>
              </div>
            </div>

            <div className='pop-table'>
              <table className='unit-table'>
                <thead>
                <tr>
                    <th>{props.checkedRows.length == 1 ? 'Unit Type' : 'Unit Types'}</th>
                    <th>Gross Value</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.selectedUnitTypes}</td>
                        <td>${props.totalValueSelected.toLocaleString()}</td>
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

            <div class="capital-return">
              <b>UpFront Capital</b>
              <p>${(props.totalValueSelected * props.sliderValue / 100).toLocaleString()}</p>
            </div>
            <div class="capital-return" >
              <b>Investor Return</b>
              <p>${(props.totalValueSelected * (100-props.sliderValue) / 100).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function UnitDashCard(props) {
  return (
    <>
       <div className='back_to_lm'>
        <a  href="/landlord-marketplace"><span>&#8592;</span>List to Marketplace</a>
      </div>
      <div className='market_dash__container'>
        <div className='dash__wrapper'>

          <div class="unit_title">
              <h2>The Smiths</h2>
              <b>{props.data.address}, {props.data.location}</b>
          </div>
          <div class="wrapper">
            <b>Email</b>
            <b>{`${Math.random().toString(36).substring(2, 12)}@gmail.com`}</b>
            <b>Home Phone #</b>
            <b>{`(${Math.floor(Math.random() * 900 + 100)}) ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`}</b>
            <b>Mobile Phone #</b>
            <b>{`(${Math.floor(Math.random() * 900 + 100)}) ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`}</b>
            <b>Property Address</b>
            <b>{props.data.address}, {props.data.location}</b>
            <div></div><div></div>

            <b>Contract Type</b>
            <b>Residential</b>
            <b>Lease Length</b>
            <b>12 months</b>
            <b>Monthly Rent</b>
            <b>${props.data.gross_value / 12}</b>
            <div></div><div></div>

            <b>Credit Score</b>
            <b>800</b>
            <b>Employer</b>
            <b>Upfront Capital</b>
            <b>Salary</b>
            <b>${((Math.floor(Math.random() * (10 - 5 + 1)) + 5) * 10000).toLocaleString()}</b>
            <div></div><div></div>

            <b>Social Security</b>
            <b>***-**-****</b>
            <b>License Number</b>
            <b>*********</b>
            <div></div><div></div>

            <b>Move in date</b>
            <b>January 1, 2023</b>
            <b>Move out date</b>
            <b>December 31, 2023</b>
            <b>Lease begin date</b>
            <b>January 1, 2023</b>
            <b>Lease Expiration date</b>
            <b>December 31, 2023</b>
          </div>
                
        </div>

        <div className='dash__wrapper'>
               
          <div class="wrapper-right">
            <div>Percentage of times rent was paid on time</div>
            <div>How much time left on the lease</div>
            <div>Financial Risk</div>
            <div><span class="dot"></span></div>
            <div><span class="dot"></span></div>
            <div><span class="dot"></span></div>
            <div>100%</div>
            <div>12 months</div>
            <div>Low Risk</div>
          </div>

          <div className='bids-bttn'>
            <button>
              <a class="button" href={"/unit-bids/" + props.data.id}>Bids</a> 
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
};

function BidsCard(props) {
  return (
    <>
      <div className='back_to_lm'>
        <a  href="/landlord-marketplace"><span>&#8592;</span>List to Marketplace</a>
      </div>
      <div className='market_dash__container'>
        <div className='dash__wrapper'>

          <div class="unit_title">
              <h2>The Smiths</h2>
              <b>{props.property.address}, {props.property.location}</b>
          </div>
          <div class="wrapper">
            <h3>Marketplace Status:</h3>
            <b>Posted</b>
            <b>Email</b>
            <b>{`${Math.random().toString(36).substring(2, 12)}@gmail.com`}</b>
            <b>Home Phone #</b>
            <b>{`(${Math.floor(Math.random() * 900 + 100)}) ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`}</b>
            <b>Mobile Phone #</b>
            <b>{`(${Math.floor(Math.random() * 900 + 100)}) ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`}</b>
            <b>Property Address</b>
            <b>{props.property.address}, {props.property.location}</b>
            <div></div><div></div>

            <b>Contract Type</b>
            <b>Residential</b>
            <b>Lease Length</b>
            <b>12 months</b>
            <b>Monthly Rent</b>
            <b>${props.property.gross_value / 12}</b>
            <div></div><div></div>

            <b>Credit Score</b>
            <b>800</b>
            <b>Employer</b>
            <b>Upfront Capital</b>
            <b>Salary</b>
            <b>${((Math.floor(Math.random() * (10 - 5 + 1)) + 5) * 10000).toLocaleString()}</b>
            <div></div><div></div>

            <b>Social Security</b>
            <b>***-**-****</b>
            <b>License Number</b>
            <b>*********</b>
            <div></div><div></div>

            <b>Move in date</b>
            <b>January 1, 2023</b>
            <b>Move out date</b>
            <b>December 31, 2023</b>
            <b>Lease begin date</b>
            <b>January 1, 2023</b>
            <b>Lease Expiration date</b>
            <b>December 31, 2023</b>
          </div>
                
        </div>

        <div className='dash__wrapper_right'>

          <div class="unit_title">
              <h2>Bids</h2>
          </div>
          <div class="wrapper_right">
            {props.bids.map((bid, index) => (
              <>
                <h3>Investor</h3>
                <h3>Offer</h3>
                <b>{['John Smith', 'Jane Doe', 'Sameer Barghava'][Math.floor(Math.random() * 3)]}</b>
                <b>{bid.bid_amount}% Percent Value<br></br>
                  {Math.abs(bid.bid_amount - props.property.percent_upfront_proposed)}
                  % {bid.bid_amount - props.property.percent_upfront_proposed > 0 ? 'above' : 'below'} original percentage<br />
                  UpFront Capital: ${bid.bid_amount * props.property.gross_value / 100}<br />
                  Investor Return: ${(100 - bid.bid_amount) * props.property.gross_value / 100}</b><br />
                  <button></button>

                <h3>Assets (in millions)</h3>
                <b>${(Math.floor(Math.random() * (10 - 5 + 1)) + 5) * 10}</b>
                <b />
                <button id='accept-offer'>Accept</button>
                <hr /><hr />
              </>
            ))}
          </div>  
        </div>
      </div>
    </>
  )
}

function ContractCard(props) {
  return (
    <>
       <div className='back_to_lm'>
        <a  href="/investor-marketplace"><span>&#8592;</span>Marketplace</a>
      </div>
      <div className='market_dash__container'>
        <div className='dash__wrapper'>

          <div class="unit_title">
              <h2>Res, Family &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span class="fa fa-star"></span> 4.82</h2>
          </div>
          <div class="wrapper">
            <b>Landlord Name</b>
            <b>-</b>
            <b>Email</b>
            <b>-</b>
            <b>Mobile Phone #</b>
            <b>-</b>
            <b>Property Address</b>
            <b>-</b>
            <div></div><div></div>

            <b>Contract Type</b>
            <b>-</b>
            <b>Lease Length</b>
            <b>-</b>
            <b>Monthly Rent</b>
            <b>-</b>
            <div></div><div></div>

            <b>Credit Score</b>
            <b>-</b>
            <b>Employer</b>
            <b>-</b>
            <b>Salary</b>
            <b>-</b>
            <div></div><div></div>

            <b>Social Security</b>
            <b>-</b>
            <b>Tax Form / W2</b>
            <b>-</b>
            <b>License Number</b>
            <b>-</b>
            <div></div><div></div>

            <b>Move in date</b>
            <b>-</b>
            <b>Move out date </b>
            <b>-</b>
            <b>Lease begin date </b>
            <b>-</b>
            <b>Lease Expiration date</b>
            <b>-</b>
          </div>
                
        </div>

        <div className='dash__wrapper'>
               
          <div class="wrapper-right">
            <div>Percentage of times rent was paid on time</div>
            <div>How much time left on the lease</div>
            <div>Financial Risk</div>
            <div><span class="dot"></span></div>
            <div><span class="dot"></span></div>
            <div><span class="dot"></span></div>
            <div>100%</div>
            <div>12 months</div>
            <div>Low Risk</div>
          </div>

          <div className='bids-bttn'>
                  <button>
                  <a class="button" href="">Select Contract</a> 
                  </button>
                </div>
        </div>
        
      </div>
    </>
  );
};

export {DashCard, MDashCard, UnitDashCard, ContractCard, BidsCard};
