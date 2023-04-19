import React from 'react';
import '../../App.css';
import {Navbar3} from '../../components/Navbar';
import {Footer2} from '../Footer';
import { ContractCard } from '../Dashcard';

function Contractinfo() {
  return (
    <>
      <Navbar3 />
      <ContractCard />
      <Footer2 />
    </>
  );
}

export default Contractinfo;