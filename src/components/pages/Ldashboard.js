import React from 'react';
import '../../App.css';
import {Footer2} from '../Footer';
import {Navbar2} from '../../components/Navbar';
import { Table_dash } from '../Ltable';
import {DashCard} from '../Dashcard';


export default function Ldashboard() {
  return(
    <> 
      <Navbar2 />
      <DashCard />
      <Table_dash />
      <Footer2 />
      
    </>
  )

}
