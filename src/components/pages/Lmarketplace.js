import React, { useEffect, useState} from 'react';

import '../../App.css';
import { Footer2 } from '../Footer';
import { Navbar2 } from '../Navbar';
import { TableMarketplace } from '../Ltable';
import { MDashCard } from '../Dashcard';
import PropertyService from '../../services/PropertyService';
import { countPosted, formatProperty } from '../../utils/Properties';


export default function Lmarketplace() {

  const [properties, setProperties] = useState([]);
  const [postedCount, setPostedCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await PropertyService.get();
        console.log(data)
        setPostedCount(countPosted(data));
        setProperties(data.map(property => formatProperty(property)));
      } catch (error) {
        console.error('Error fetching property data:', error);
      }
    };
    fetchData();
  }, []);
  
  return(
    <>
      <Navbar2 />
      <MDashCard 
        totalCount={properties.length}
        postedCount={postedCount}
        upfrontCapital={69}
      />
      <TableMarketplace data={properties}/>
      <Footer2 />
    </>
  );
};
