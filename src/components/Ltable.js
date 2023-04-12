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

function TableDash(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
    return (
        <>
        <div className='container-table'>
            <table className='dash-table'>
                <thead>
                    <tr>
                        <th >Address</th>
                        <th >Location</th>
                        <th >Unit Type</th>
                        <th >Gross Value</th>
                        <th >Occupancy Status</th>
                        <th >UpFront Capital</th>
                        <th >Investor Return</th>
                        <th >Expand</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((property, index) => (
                        <tr key={index}>
                            <td>{property.address}</td>
                            <td>{property.location}</td>
                            <td>{property.unit_type}</td>
                            <td>{property.gross_value}</td>
                            <td>{property.occupied}</td>
                            <td>{property.upfront_capital}</td>
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



function TableMarketplace(props) {

    return (
        <>
        <div className='container-table'>
            <table className='dash-table'>
            <thead>
            <tr>
                <th >Address</th>
                <th >Location</th>
                <th >Unit Type</th>
                <th >Gross Value</th>
                <th >Occupancy Status</th>
                <th >UpFront Capital</th>
                <th >Investor Return</th>
                <th >Expand</th>
            </tr>
            </thead>
            <tbody>
                {props.data.map((property, index) => (
                    <tr key={index}>
                        <td>{property.address}</td>
                        <td>{property.location}</td>
                        <td>{property.unit_type}</td>
                        <td>{property.gross_value}</td>
                        <td>{property.occupied}</td>
                        <td>{property.upfront_capital}</td>
                        <td>{property.investor_return}</td>
                    </tr>
                ))}
            </tbody>
            
            </table>
            <br />
         </div>
        </>
      );
}; 




export {TableDash, TableMarketplace};
