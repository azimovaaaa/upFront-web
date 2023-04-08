import React, { useState } from 'react';
import { Importer, ImporterField } from 'react-csv-importer';
import axios from 'axios';
import 'react-csv-importer/dist/index.css';
import { Button } from './Button';
import '../App.css';
import './Manual.css';
import {Footer2} from './Footer';
import {Navbar2} from './Navbar';
import { parseAddress } from '../utils/Address';


const sendPropertyData = (payload) => {
    console.log(payload)
    return axios({
        method: 'post',
        url: 'http://localhost:8000/landlord/api/properties',
        data : payload
    })
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((error) => {
            console.error('Error sending property data:', error);
            return null;
        });
}

const dataHandler = async (rows, { startIndex }) => {
    // required, may be called several times
    // receives a list of parsed objects based on defined fields and user column mapping;
    // (if this callback returns a promise, the widget will wait for it before parsing more data)
    console.log("received batch of rows", rows);

    for (const property of rows) {
        const addressString = property.address;
        const parsedAddress = parseAddress(addressString);

        let payload = { 
            landlord_id: 1,
            address: parsedAddress,
            property: {
                unit_type: property.unitType,
                occupied: true,
                gross_value: property.rentAmount * property.contractLength,
                upfront_capital: 0,
                investor_return: 0,
            }
        };

        sendPropertyData(payload);
    }
} 

const onStart = ({ file, fields }) => {
    // optional, invoked when user has mapped columns and started import
    console.log("starting import of file", file, "with fields", fields);
}

const onComplete = ({ file, fields }) => {
    // optional, invoked right after import is done (but user did not dismiss/reset the widget yet)
    console.log("finished import of file", file, "with fields", fields);
}

const onClose = () => {
    // optional, invoked when import is done and user clicked "Finish"
    // (if this is not specified, the widget lets the user upload another file)
    console.log("importer dismissed");
}

const Manual = () => {
    return (
        <>
        <Navbar2 />
        <div className='manual-container'>
            <Importer
                dataHandler={dataHandler}
                chunkSize={10000} // optional, internal parsing chunk size in bytes
                defaultNoHeader={false} // optional, keeps "data has headers" checkbox off by default
                restartable={true} // optional, lets user choose to upload another file when import is complete
                onStart={onStart}
                onComplete={onComplete}
                onClose={onClose}
            >
                <ImporterField name="address" label="Address" />
                <ImporterField name="unitType" label="Unit Type" />
                <ImporterField name="occupancyStatus" label="Occupancy Status" />
                <ImporterField name="rentAmout" label="Rent Amount" />
                <ImporterField name="contractLength" label="Contract Length" />
            </Importer>
            <div className='heading'>
                <div className='manual-heading'>
                    <h1>File Format Requirements</h1>
                </div>
                <div className='template-bttn'>
                        <Button>
                            Download Template
                        </Button>
                </div>
            </div>

            <div className='manual-table'>
                <table className='upload-table'>
                <thead>
                <tr>
                    <th >Column</th>
                    <th >Format</th>
                    <th >Example</th>
                    <th >Notes</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>plan_amount</td>
                        <td>Money</td>
                        <td>12</td>
                        <td>The amount in USD the customer is charged</td>
                    </tr>
                    <tr>
                        <td>plan_amount</td>
                        <td>number</td>
                        <td>$99.00</td>
                        <td>Name of the plan the subscription is on</td>
                    </tr>
                    <tr>
                        <td>plan_amount</td>
                        <td>String</td>
                        <td>Sub-1</td>
                        <td>End date of subscription, can be blank</td>
                    </tr>
                    <tr>
                        <td>plan_amount</td>
                        <td>Date: m/d/y</td>
                        <td>10/1/2020</td>
                        <td>Start date of subscription</td>
                    </tr>
                    <tr>
                        <td>plan_amount</td>
                        <td>Date: m/d/y</td>
                        <td>Jane Doe</td>
                        <td>Unique identifier for each subscription</td>
                    </tr>
                    <tr>
                        <td>plan_amount</td>
                        <td>Money</td>
                        <td>$99.00</td>
                        <td>The amount in USD the customer is charged</td>
                    </tr>
                    <tr>
                        <td>plan_amount</td>
                        <td>number</td>
                        <td>$99.00</td>
                        <td>Name of the plan the subscription is on</td>
                    </tr>
                    <tr>
                        <td>plan_amount</td>
                        <td>String</td>
                        <td>Sub-1</td>
                        <td>End date of subscription, can be blank</td>
                    </tr>
                    <tr>
                        <td>plan_amount</td>
                        <td>Date: m/d/y</td>
                        <td>10/1/2020</td>
                        <td>Start date of subscription</td>
                    </tr>
                    <tr>
                        <td>plan_amount</td>
                        <td>Date: m/d/y</td>
                        <td>Jane Doe</td>
                        <td>Unique identifier for each subscription</td>
                    </tr>

                </tbody>

                </table>
            </div>
        </div>
        <Footer2 />
        </>
    );
}
    
export default Manual;
