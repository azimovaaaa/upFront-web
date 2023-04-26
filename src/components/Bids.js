import React, { useState, useEffect } from 'react';
import {Navbar2} from '../components/Navbar';
import {Footer2} from './Footer';
import './Bids.css';
import { BidsCard } from './Dashcard';
import PropertyService from '../services/PropertyService';
import { formatProperty } from '../utils/Properties';
import BidService from '../services/BidService';

function Bids(props) {
  const [property, setProperty] = useState({});
  const [bids, setBids] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await PropertyService.getOne(props.match.params.id);
        setProperty(formatProperty(data[0]));
        const data2 = await BidService.getByProperty(props.match.params.id);
        setBids(data2);
      } catch (error) {
        console.error('Error fetching property data:', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <>
      <Navbar2 />
      <BidsCard property={property} bids={bids} />
      <Footer2 />
    </>
  );
}

export default Bids;