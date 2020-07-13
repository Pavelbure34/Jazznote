import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home, Reviews} from './pages';

const App = ()=>{
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/reviews">
          <Reviews/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
