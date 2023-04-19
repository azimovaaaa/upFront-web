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
import Manual from './components/Manual';
import Upload from './components/Upload';
import Idashboard from './components/pages/Idashboard';
import Imarketplace from './components/pages/Imarketplace';
import Unitinfo from './components/pages/Unitinfo';
import Bids from './components/Bids'
import Contractinfo from './components/pages/Contractinfo';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home-investor' exact component={Home_investor} />
          <Route path='/login-landlord' component={Login_landlord} />
          <Route path='/login-investor' component={Login_investor} />
          <Route path='/faq' component={Faq} />
          <Route path='/products' component={Products} />
          <Route path='/learn-more' component={LearnMoreContainer} />
          <Route path='/landlord-connect' component={Landlord} />
          <Route path='/landlord-marketplace' component={Lmarketplace} />
          <Route path='/landlord-dashboard' component={Ldashboard} />
          <Route path='/investor-dashboard' component={Idashboard} />
          <Route path='/investor-marketplace' component={Imarketplace} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/manual-upload' component={Manual} />
          <Route path='/file-upload' component={Upload} />
          <Route path='/unit-info' component={Unitinfo} />
          <Route path='/contract-info' component={Contractinfo} />
          <Route path='/unit-bids' component={Bids} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
