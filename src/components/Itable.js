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
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
  return (
    <>
    <div className='container-table'>
        <table className='dash-table'>
            <thead>
                <tr>
                    <th >Contract</th>
                    <th >Location</th>
                    <th >Unit Type</th>
                    <th >Landlord Score</th>
                    <th >Gross Value</th>
                    <th >On-Time Payments</th>
                    <th >Percent Value</th>
                    <th >LL Payout</th>
                    <th >Investor Return</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((property, index) => (
                    <tr key={index}>
                        <td>{property.contract}</td>
                        <td>{property.location}</td>
                        <td>{property.unit_type}</td>
                        <td>{property.landlord_score}</td>
                        <td>{property.gross_value}</td>
                        <td>{property.on_time_payment}</td>
                        <td>{property.percent_value}</td>
                        <td>{property.ll_payout}</td>
                        <td>{property.investor_return}</td>
                        <td>
                            <div className="collapsible">
                                <div className="header" {...getToggleProps()}>
                                    {isExpanded ? 'Collapse' : 'Expand'}
                                    </div>
                                    <div {...getCollapseProps()}>
                                    <div className="content">
                                        Now you can see the hidden content. <br/><br/>
                                        Click again to hide...
                                    </div>
                                </div>
                            </div>
                        </td>
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
                        <th >Location</th>
                        <th >Unit Type</th>
                        <th >Landlord Score</th>
                        <th >Gross Value</th>
                        <th >On-Time Payments</th>
                        <th >Percent Value</th>
                        <th >LL Payout</th>
                        <th >Investor Return</th>
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
                            <td>{property.location}</td>
                            <td>{property.unit_type}</td>
                            <td>{Math.floor(Math.random() * 100) + 1}</td>
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
