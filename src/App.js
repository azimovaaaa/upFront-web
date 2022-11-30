import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Faq from './components/pages/FAQ';
import Landlord from './components/pages/Landlord';
import Lmarketplace from './components/pages/Lmarketplace';
import Ldashboard from './components/pages/Ldashboard';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/faq' component={Faq} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/landlord-home' component={Landlord} />
          <Route path='/landlord-marketplace' component={Lmarketplace} />
          <Route path='/landlord-dashboard' component={Ldashboard} />


        </Switch>
      </Router>
    </>
  );
}

export default App;
