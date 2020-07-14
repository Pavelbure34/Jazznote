import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom';
import {Home, Reviews} from './pages';

const App = ()=>{
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/reviews">
          <Reviews/>
        </Route>
        <Redirect to="/home"/>
      </Switch>
    </Router>
  );
};

export default App;
