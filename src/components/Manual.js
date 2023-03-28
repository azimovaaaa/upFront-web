import React, { useState } from 'react';
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
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

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

        <a class="button" href="#popup_flight_travlDil1">Click Me</a> 
        <a class="button" href="#popup_flight_travlDil2">Click Me</a>
        <a class="button" href="#popup_flight_travlDil3">Click Me</a>

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

        

    <div id="popup_flight_travlDil1" class="overlay_flight_traveldil">
        <div class="popup_flight_travlDil">
            <a class="close_flight_travelDl" href="#">&times;</a>
            <div class="content_flightht_travel_dil">
                <b>Based on your upload, we believe that your file has the following information:</b>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th><b>Your Information</b></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Address</td>
                            <td>411 West 112th St, 191 Claremont Ave, 122 La Salle Ave, 566</td>
                        </tr>
                        <tr>
                            <td>Tenant Name</td>
                            <td>The Smiths, The Kims, Miller Family, DeCarlo Family, Garcias</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>New York, NY</td>
                        </tr>
                        <tr>
                            <td>Monthly Rent</td>
                            <td>$1200/month, $1300/month, $2300/month, $1700/month, $18</td>
                        </tr>
                        <tr>
                            <td>Size</td>
                            <td>300 sq feet, 600 sq feet, 1800 sq feet, 900 sq feet, 1200 sq feet</td>
                        </tr>
                        <tr>
                            <td>Gross Value</td>
                            <td>$32000, $23000, $64000, $22000, $52000, $50000, $20000</td>
                        </tr>
                        <tr>
                            <td>Term Remainder</td>
                            <td>8 months, 14 months, 9 months, 10 months, 24 months, 15 months</td>
                        </tr>
                        <tr>
                            <td>Occupancy Status</td>
                            <td>Occupied</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Contact Type</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Lease length</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <div className='heading'>
                    <div className='manual-heading'>
                        <b>Please confirm that this is accurate, by clicking Confirm. Otherwise, click Make Changes.</b>
                    </div>
                    <div className='template-bttn'>
                            <Button>
                                Make Changes
                            </Button>
                        
                            <Button>
                                Confirm
                            </Button>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div id="popup_flight_travlDil2" class="overlay_flight_traveldil">
        <div class="popup_flight_travlDil">
            <a class="close_flight_travelDl" href="#">&times;</a>
            <div class="content_flightht_travel_dil">
                <b>You clicked Make Changes, select all of the titles that you’d like to change:</b>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th><b>Your Information</b></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>Address</td>
                            <td>411 West 112th St, 191 Claremont Ave, 122 La Salle Ave, 566</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>Tenant Name</td>
                            <td>The Smiths, The Kims, Miller Family, DeCarlo Family, Garcias</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>Location</td>
                            <td>New York, NY</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>Monthly Rent</td>
                            <td>$1200/month, $1300/month, $2300/month, $1700/month, $18</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>Size</td>
                            <td>300 sq feet, 600 sq feet, 1800 sq feet, 900 sq feet, 1200 sq feet</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>Gross Value</td>
                            <td>$32000, $23000, $64000, $22000, $52000, $50000, $20000</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>Term Remainder</td>
                            <td>8 months, 14 months, 9 months, 10 months, 24 months, 15 months</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>Occupancy Status</td>
                            <td>Occupied</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>Email</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>Contact Type</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>Lease length</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <div className='heading'>
                    <div className='manual-heading'>
                        <b>Click Next to add/edit selected titles</b>
                    </div>
                    <div className='template-bttn'>
                            <Button>
                                Next
                            </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="popup_flight_travlDil3" class="overlay_flight_traveldil">
        <div class="popup_flight_travlDil">
            <a class="close_flight_travelDl" href="#">&times;</a>
            <div class="content_flightht_travel_dil">
                <b>Based on your upload, we believe that your file has the following information:</b>
                
            </div>
        </div>
    </div>
    </div>
    <Footer2 />
    </>
    

  );
  
}


    

export default Manual;
