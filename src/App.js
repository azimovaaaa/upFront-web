import React from 'react';
import './App.css';
import {Home, Home_investor} from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login_investor, Login_landlord } from './components/pages/Login';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Faq from './components/pages/FAQ';
import Landlord from './components/pages/Landlord';
import Lmarketplace from './components/pages/Lmarketplace';
import Ldashboard from './components/pages/Ldashboard';
import LearnMoreContainer from './components/LearnMoreContainer';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home-investor' exact component={Home_investor} />
          <Route path='/learn-more' component={LearnMoreContainer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
