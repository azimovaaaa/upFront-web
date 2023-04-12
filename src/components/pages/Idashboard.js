import '../../App.css';
import {Footer2} from '../Footer';
import {Navbar3} from '../Navbar';
import {ITableDash } from '../Itable';
import {InvDashCard} from '../InvDashcard';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Idashboard = () => {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/landlord/api/properties?user=1')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  properties.forEach(property => {
    const address = `${property.address.number} ${property.address.street} ${property.address.address_2}`;
    const location = `${property.address.city}, ${property.address.state}`;
    property.address = address;
    property.location = location;
    property.occupied = (property.occupied ? 'occupied' : 'empty')
  })

  console.log(properties);

  return (
    <>
      <Navbar3 />
      <InvDashCard 
        contractsOutstanding={properties.length} 
        avgPercentReceived={'--'} 
        targetIRR={'--'} 
        contractsNotOnMarketplace={'--'} 
        totalContractsCompleted={'--'} 
        ROI={'--'} 
        propertyLocationHeatmap={'--'} 
        tenantsPaidOnTime={'--'} 
      />
      <ITableDash data={properties}/>
      <Footer2 />
    </>
  )
}

export default Idashboard;
