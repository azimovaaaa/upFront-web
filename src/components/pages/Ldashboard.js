import { useState, useEffect } from 'react';

import '../../App.css';
import {Footer2} from '../Footer';
import {Navbar2} from '../Navbar';
import { TableDash } from '../Ltable';
import {DashCard} from '../Dashcard';
import PropertyService from '../../services/PropertyService';
import { countPosted, formatProperty } from '../../utils/Properties'
import BidService from '../../services/BidService';

const Ldashboard = () => {

  const [properties, setProperties] = useState([]);
  const [existsBids, setExistsBids] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await PropertyService.get();
        setProperties(data.map(property => formatProperty(property)));
        const bids = await BidService.get()
        setExistsBids(bids.length !== 0);
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
        avgPercentReceived={existsBids ? '42' : '0'} 
        targetIRR={existsBids ? '4.2' : '0'} 
        contractsNotOnMarketplace={properties.length - countPosted(properties)} 
        totalContractsCompleted={countPosted(properties) / 2} 
        ROI={existsBids ? '4.2' : '0'} 
      />
      <TableDash data={properties}/>
      <Footer2 />
    </>
  )
}

export default Ldashboard;
