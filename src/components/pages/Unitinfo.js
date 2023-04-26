import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Navbar2 } from '../../components/Navbar';
import { Footer2 } from '../Footer';
import { UnitDashCard } from '../Dashcard';
import PropertyService from '../../services/PropertyService';
import { formatProperty } from '../../utils/Properties';

function Unitinfo(props) {
  
  const [property, setProperty] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await PropertyService.getOne(props.match.params.id);
        setProperty(formatProperty(data[0]));
      } catch (error) {
        console.error('Error fetching property data:', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <>
      <Navbar2 />
      <UnitDashCard data={property}/>
      <Footer2 />
    </>
  );
}

export default Unitinfo;