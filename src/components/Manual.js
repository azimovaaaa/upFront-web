import React from 'react';
import '../App.css';
import './Manual.css';
import {Footer2} from './Footer';
import {Navbar2} from './Navbar';
import { Button } from './Button';

var upload = document.getElementById('upload');

function onFile() {
    var me = this,
        file = upload.files[0],
        name = file.name.replace(/.[^/.]+$/, '');
    console.log('upload code goes here', file, name);

    upload.addEventListener('dragenter', function (e) {
        upload.parentNode.className = 'area dragging';
    }, false);

    upload.addEventListener('dragleave', function (e) {
        upload.parentNode.className = 'area';
    }, false);

    upload.addEventListener('dragdrop', function (e) {
        onFile();
    }, false);

    upload.addEventListener('change', function (e) {
        onFile();
    }, false);
}
function Manual() {
  return (
    <>
    <Navbar2 />
    <div className='manual-container'>
        <div className='manual-heading'> 
            <h1>Upload CSV file</h1>
        </div>
        <div class="area">
            <input type="file" id="upload" placeholder='Click or drag to upload template with your customers filled in' />
        </div>
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
