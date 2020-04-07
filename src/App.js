import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './Scenes/Landing';
import Survey from './Scenes/Survery';
import NotFound from './Scenes/NotFound';
import ScrollToTop from './Functions/ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={Landing}></Route>
          <Route exact path='/landing' component={Landing}></Route>
          <Route exact path='/survey' component={Survey}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
