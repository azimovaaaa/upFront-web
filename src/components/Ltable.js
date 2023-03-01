import React, { useState, useEffect } from 'react';
import './Ltable.css';

function Table_dash() {

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
            <tr>
                <td>411 West 112th St</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Occupied</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                
            </tr>
            <tr>
                <td>191 Claremont Ave</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Occupied</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
            <tr>
                <td>122 La Salle Ave</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Empty</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
            <tr>
                <td>566 West 114th St</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Empty</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
            <tr>
                <td>411 West 112th St</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Occupied</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                
            </tr>
            <tr>
                <td>191 Claremont Ave</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Occupied</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
            <tr>
                <td>122 La Salle Ave</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Empty</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
            <tr>
                <td>566 West 114th St</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Empty</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
            <tr>
                <td>411 West 112th St</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Occupied</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                
            </tr>
            <tr>
                <td>191 Claremont Ave</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Occupied</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
            <tr>
                <td>122 La Salle Ave</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Empty</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
            <tr>
                <td>566 West 114th St</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Empty</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
            <tr>
                <td>411 West 112th St</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Occupied</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                
            </tr>
            <tr>
                <td>191 Claremont Ave</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Occupied</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
            <tr>
                <td>122 La Salle Ave</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Empty</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
            <tr>
                <td>566 West 114th St</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Empty</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr><tr>
                <td>411 West 112th St</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Occupied</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                
            </tr>
            <tr>
                <td>191 Claremont Ave</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Occupied</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
            <tr>
                <td>122 La Salle Ave</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Empty</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
            <tr>
                <td>566 West 114th St</td>
                <td>New York, NY</td>
                <td>Res, Apts</td>
                <td>$32,000</td>
                <td>Empty</td>
                <td>$24,320</td>
                <td>$24,320</td>
                <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
            </tr>
        </tbody>
        
        </table>
        <br />
     </div>
    </>
  );
};


function Table_market() {

    return (
        <>
        <div className='container-table'>
            <table className='dash-table'>
            <thead>
            <tr>
                <th>&nbsp;</th>
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
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>411 West 112th St</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Occupied</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                    
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>191 Claremont Ave</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Occupied</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>122 La Salle Ave</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Empty</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>566 West 114th St</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Empty</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>411 West 112th St</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Occupied</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                    
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>191 Claremont Ave</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Occupied</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>122 La Salle Ave</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Empty</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>566 West 114th St</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Empty</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>411 West 112th St</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Occupied</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                    
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>191 Claremont Ave</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Occupied</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>122 La Salle Ave</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Empty</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>566 West 114th St</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Empty</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>411 West 112th St</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Occupied</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                    
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>191 Claremont Ave</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Occupied</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>122 La Salle Ave</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Empty</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>566 West 114th St</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Empty</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr><tr>
                    <td><input type="checkbox"/></td>
                    <td>411 West 112th St</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Occupied</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                    
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>191 Claremont Ave</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Occupied</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>122 La Salle Ave</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Empty</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>566 West 114th St</td>
                    <td>New York, NY</td>
                    <td>Res, Apts</td>
                    <td>$32,000</td>
                    <td>Empty</td>
                    <td>$24,320</td>
                    <td>$24,320</td>
                    <td><i class="fa-sharp fa-regular fa-square-plus"></i></td>
                </tr>
            </tbody>
            
            </table>
            <br />
         </div>
        </>
      );
}


export {Table_dash, Table_market};
