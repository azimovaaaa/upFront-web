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
  const [checkedRows, setCheckedRows] = useState([]);  // indices from properties that have been selected
  const [postedCount, setPostedCount] = useState(0);
  const [totalValueSelected, setTotalValueSelected] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);  // integer represents a percentage

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

  // update chekced rows and total value
  const handleCheckboxChange = (event, index) => {
    const isChecked = event.target.checked;
    if (isChecked) {
        setCheckedRows([...checkedRows, index]);
        setTotalValueSelected(totalValueSelected + properties[index].gross_value);
    } else {
        setCheckedRows(checkedRows.filter(row => row !== index));
        setTotalValueSelected(totalValueSelected - properties[index].gross_value);
    }
  }

  const handleButtonClick = async () => {
    for (const i of checkedRows) {
      try {
        await PropertyService.postProperty(properties[i].id, true, sliderValue);
      } catch (error) {
        console.error('Failed to update property:', error);
        return;
      }
    }
    window.location.href = '/landlord-marketplace/#';
  };
  
  return(
    <>
      <Navbar2 />
      <MDashCard 
        totalCount={properties.length}
        postedCount={postedCount}
        totalValueSelected={totalValueSelected}
        checkedRows={checkedRows}
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        handleButtonClick={handleButtonClick}
      />
      <TableMarketplace
        data={properties}
        checkedRows={checkedRows}
        handleCheckboxChange={handleCheckboxChange}
      />
      <Footer2 />
    </>
  );
};
