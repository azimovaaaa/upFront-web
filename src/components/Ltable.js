import './Ltable.css';


function TableDash(props) {
    return (
        <>
        <div className='container-table'>
            <table className='dash-table'>
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Location</th>
                        <th>Unit Type</th>
                        <th>Gross Value</th>
                        <th>Occupancy Status</th>
                        <th>Is Posted</th>
                        <th>UpFront Capital</th>
                        <th>Investor Return</th>
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
                            <td>{property.is_posted === true ? 'Yes' : 'No'}</td>
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



function TableMarketplace(props) {
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
                            <th>Gross Value</th>
                            <th>Occupancy Status</th>
                            <th>Is Posted</th>
                            <th>UpFront Capital</th>
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
                                <td>{property.gross_value}</td>
                                <td>{property.occupied}</td>
                                <td>{property.is_posted === true ? 'Yes' : 'No'}</td>
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




export {TableDash, TableMarketplace};
