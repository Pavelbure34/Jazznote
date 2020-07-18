import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom';
import {Home, Reviews} from './pages';
import {Articles} from './articles';

const App = ()=>{
  const renderArticlesLinks = ()=>{
    return Articles.map(item=>{
      const {id, Post, link} = item;
      return (
        <Route key={id} exact path={link}>
            <Post/>
        </Route>
      );
    });
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/reviews">
          <Reviews/>
        </Route>
        {renderArticlesLinks()}
        <Redirect to="/home"/>
      </Switch>
    </Router>
  );
};

export default App;
