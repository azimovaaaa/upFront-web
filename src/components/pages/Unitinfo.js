import React from 'react';
import '../../App.css';
import {Navbar2} from '../../components/Navbar';
import {Footer2} from '../Footer';
import { UnitDashCard } from '../Dashcard';

function Unitinfo() {
  return (
    <>
      <Navbar2 />
      <UnitDashCard />
      
    
      <Footer2 />
    </>
  );
}

export default Unitinfo;