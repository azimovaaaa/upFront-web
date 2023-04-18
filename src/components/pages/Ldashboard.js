import { useState, useEffect } from 'react';

import '../../App.css';
import {Footer2} from '../Footer';
import {Navbar2} from '../Navbar';
import { TableDash } from '../Ltable';
import {DashCard} from '../Dashcard';
import PropertyService from '../../services/PropertyService';
import { countPosted, formatProperty } from '../../utils/Properties'

const Ldashboard = () => {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await PropertyService.get();
        setProperties(data.map(property => formatProperty(property)));
      } catch (error) {
        console.error('Error fetching property data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar2 />
      <DashCard 
        contractsOutstanding={properties.length} 
        avgPercentReceived={'--'} 
        targetIRR={'--'} 
        contractsNotOnMarketplace={properties.length - countPosted(properties)} 
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
