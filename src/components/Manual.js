import React, { useState } from 'react';
import '../App.css';
import './Manual.css';
import {Footer2} from './Footer';
import {Navbar2} from './Navbar';
import { Importer, ImporterField } from 'react-csv-importer';
import 'react-csv-importer/dist/index.css';

const dataHandler = async (rows, { startIndex }) => {
    // required, may be called several times
    // receives a list of parsed objects based on defined fields and user column mapping;
    // (if this callback returns a promise, the widget will wait for it before parsing more data)
    console.log("received batch of rows", rows);

    // mock timeout to simulate processing
    await new Promise((resolve) => setTimeout(resolve, 500));
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
            <ImporterField name="location" label="Location" />
            <ImporterField name="unitType" label="Unit Type" />
            <ImporterField name="occupancyStatus" label="Occupancy Status" />
            <ImporterField name="grossValue" label="Gross Value" optional />
        </Importer>
        <Footer2 />
        </>
    );
}
    
export default Manual;
