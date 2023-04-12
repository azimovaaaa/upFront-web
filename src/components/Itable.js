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



function ITableMarket() {

    return (
        <>
        <div className='container-table'>
            <table className='dash-table'>
            <thead>
            <tr>
                <th>&nbsp;</th>
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
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>Commercial</td>
                    <td>New York, NY</td>
                    <td>Office</td>
                    <td>4.98</td>
                    <td>$32,000</td>
                    <td>98%</td>
                    <td>76%</td>
                    <td>$24,600</td>
                    <td>$10,800</td>
                    
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>Commercial</td>
                    <td>New York, NY</td>
                    <td>Family</td>
                    <td>4.92</td>
                    <td>$30,000</td>
                    <td>100%</td>
                    <td>82%</td>
                    <td>$20,600</td>
                    <td>$6,200</td>
                </tr>
            </tbody>
            
            </table>
            <br />
         </div>
        </>
      );
}; 




export {ITableDash, ITableMarket};
