import React, { useState, useEffect } from 'react';
import '../../App.css';
import {Footer2} from '../Footer';
import {Navbar3} from '../Navbar';
import { ITableMarket } from '../Itable';
import { InvMarketCard } from '../InvDashcard';
import { formatProperty } from '../../utils/Properties';
import PropertyService from '../../services/PropertyService';
import BidService from '../../services/BidService';

export default function Imarketplace() {
  
  const [postedProperties, setPostedProperties] = useState([]);
  const [checkedRows, setCheckedRows] = useState([]);  // indices from properties that have been selected
  const [totalValueSelected, setTotalValueSelected] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);  // integer represents a percentage

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await PropertyService.getPosted();
        console.log(data)
        setPostedProperties(data.map(property => formatProperty(property)));
      } catch (error) {
        console.error('Error fetching property data:', error);
      }
    };
    fetchData();
  }, []);

  // update checked rows and total value
  const handleCheckboxChange = (event, index) => {
    const isChecked = event.target.checked;
    if (isChecked) {
        setCheckedRows([...checkedRows, index]);
        setTotalValueSelected(totalValueSelected + postedProperties[index].gross_value);
    } else {
        setCheckedRows(checkedRows.filter(row => row !== index));
        setTotalValueSelected(totalValueSelected - postedProperties[index].gross_value);
    }
  };

  const handleButtonClick = async () => {
    for (const i of checkedRows) {
      try {
        await BidService.post(postedProperties[i].id, 1, sliderValue);
      } catch (error) {
        console.error('Failed to make bid[s]:', error);
        return;
      }
    }
    window.location.href = '/investor-marketplace';
  };

  return(
    <>
      <Navbar3 />
      <InvMarketCard
        totalValueSelected={totalValueSelected}
        checkedRows={checkedRows}
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        handleButtonClick={handleButtonClick}
        portfolioValue={23000}
        tradingLimit={100000}
        contractPayouts={5}
        cancellations={1}
      />
      <ITableMarket
        data={postedProperties}
        checkedRows={checkedRows}
        handleCheckboxChange={handleCheckboxChange}
      />
      <Footer2 />
    </>
  )
}
