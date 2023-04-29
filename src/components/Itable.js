import './Ltable.css';
import useCollapse from 'react-collapsed';



var coll = document.getElementsByClassName("expand");
var i;


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function ITableDash(props) {
  return (
    <>
    <div className='container-table'>
        <table className='dash-table'>
            <thead>
                <tr>
                    <th >Address</th>
                    <th >Location</th>
                    <th >Unit Type</th>
                    <th >Landlord Score</th>
                    <th >Gross Value</th>
                    <th >Bid Status</th>
                    <th >Landlord Proposed %</th>
                    <th >Bid Proposed %</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((propertyBid, index) => (
                    <tr key={index}>
                        <td>{propertyBid.address}</td>
                        <td>{propertyBid.location}</td>
                        <td>{propertyBid.unit_type}</td>
                        <td>{propertyBid.landlord_score}</td>
                        <td>{propertyBid.gross_value}</td>
                        <td>{propertyBid.is_accepted === true ? 'Accepted' : 'Pending'}</td>
                        <td>{propertyBid.percent_upfront_proposed}%</td>
                        <td>{propertyBid.bid_amount}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <br />
     </div>
    </>
  );
};



function ITableMarket(props) {

    return (
        <>
        <div className='container-table'>
            <table className='dash-table'>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Address</th>
                        <th>Location</th>
                        <th>Unit Type</th>
                        <th>Landlord Score</th>
                        <th>Gross Value</th>
                        <th>On-Time Payments</th>
                        <th>Percent Value</th>
                        <th>LL Payout</th>
                        <th>Investor Return</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((property, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={props.checkedRows.includes(index)} // Set checkbox checked status based on checkedRows state
                                    onChange={(event) => props.handleCheckboxChange(event, index)} // Call handleCheckboxChange with event and index
                                />
                            </td>
                            <td>{property.address}</td>
                            <td>{property.location}</td>
                            <td>{property.unit_type}</td>
                            <td>{property.landlord_score}</td>
                            <td>{property.gross_value}</td>
                            <td>3</td>
                            <td>{property.percent_upfront_proposed}</td>
                            <td>{property.is_posted === true ? property.upfront_capital : '--'}</td>
                            <td>{property.is_posted === true ? property.investor_return : '--'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
         </div>
        </>
      );
}; 




export {ITableDash, ITableMarket};
