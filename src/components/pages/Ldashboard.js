import '../../App.css';
import {Footer2} from '../Footer';
import {Navbar2} from '../../components/Navbar';
import { TableDash } from '../Ltable';
import {DashCard} from '../Dashcard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { extractCityAndState, extractStreetAddress } from '../../utils/Address';

const Ldashboard = () => {

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
    const temp = property.address;
    property.address = extractStreetAddress(temp);
    property.location = extractCityAndState(temp);
    property.occupied = (property.occupied ? 'occupied' : 'empty')
  })

  console.log(properties);

  return (
    <>
      <Navbar2 />
      <DashCard 
        contractsOutstanding={properties.length} 
        avgPercentReceived={'--'} 
        targetIRR={'--'} 
        contractsNotOnMarketplace={'--'} 
        totalContractsCompleted={'--'} 
        ROI={'--'} 
        propertyLocationHeatmap={'--'} 
        tenantsPaidOnTime={'--'} 
      />
      <TableDash data={properties}/>
      <Footer2 />
    </>
  )
}

export default Ldashboard;
