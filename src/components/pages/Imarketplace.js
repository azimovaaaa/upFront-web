import React from 'react';
import '../../App.css';
import {Footer2} from '../Footer';
import {Navbar3} from '../Navbar';
import { ITableMarket } from '../Itable';
import { InvMarketCard } from '../InvDashcard';

export default function Imarketplace() {
  return(
    <>
      <Navbar3 />
      <InvMarketCard />
      <ITableMarket />
      <Footer2 />
    </>
  )
  
  
  
  
}
