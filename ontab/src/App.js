import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './Scenes/Landing';
import NotFound from './Scenes/NotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={Landing}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
