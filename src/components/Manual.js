import React from 'react';
import { Importer, ImporterField } from 'react-csv-importer';
import axios from 'axios';
import 'react-csv-importer/dist/index.css';
import { Button } from './Button';
import '../App.css';
import './Manual.css';
import {Footer2} from './Footer';
import {Navbar2} from './Navbar';


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
        let payload = { 
            landlord_id: 1,
            property: {
                unit_type: property.unitType,
                occupied: property.occupancyStatus === 'TRUE' ? true : false,
                gross_value: property.rentAmount * property.contractLength,
                address: property.address
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Address</td>
                            <td>String</td>
                            <td>123 Abc Rd Unit 4 New York, NY 10001</td>
                        </tr>
                        <tr>
                            <td>Unit Type</td>
                            <td>String</td>
                            <td>3 BR Apartment</td>
                        </tr>
                        <tr>
                            <td>Occupancy Status</td>
                            <td>True/False</td>
                            <td>TRUE</td>
                        </tr>
                        <tr>
                            <td>Rent Amount</td>
                            <td>Number</td>
                            <td>1234.56</td>
                        </tr>
                        <tr>
                            <td>Contract Length (in months)</td>
                            <td>Number</td>
                            <td>3</td>
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
