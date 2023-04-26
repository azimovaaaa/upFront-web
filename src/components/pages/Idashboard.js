import '../../App.css';
import { Footer2 } from '../Footer';
import { Navbar3 } from '../Navbar';
import { ITableDash } from '../Itable';
import { InvDashCard } from '../InvDashcard';
import BidService from '../../services/BidService';
import { useState, useEffect } from 'react';
import PropertyService from '../../services/PropertyService';
import { combinePropertiesBids, formatProperty } from '../../utils/Properties';

const Idashboard = () => {

  const [combinedPropertiesBids, setCombinedPropertiesBids] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bids = await BidService.get();
        const properties = await PropertyService.get();
        const formattedProperties = properties.map(property => formatProperty(property));
        setCombinedPropertiesBids(combinePropertiesBids(formattedProperties, bids));
      } catch (error) {
        console.error('Error fetching bid data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar3 />
      <InvDashCard 
        bidsOutstanding={combinedPropertiesBids.length}
        pendingBids={combinedPropertiesBids.length}
        avgPercentReceived={100}
        targetIRR={7} 
        totalContractsCompleted={2} 
        ROI={7} 
      />
      <ITableDash data={combinedPropertiesBids}/>
      <Footer2 />
    </>
  )
}

export default Idashboard;
