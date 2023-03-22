import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import PropertyMap from './PropertyMap';

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('/api/properties/')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Switch>
      <Route path="/map">
        <PropertyMap properties={properties} />
      </Route>
      {/* other routes */}
    </Switch>
  );
}

export default App;