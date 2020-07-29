import React from 'react';
import {SampleReviews} from './data';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {Home, Reviews} from './pages';
import {Review} from './components';

const App = ()=>{
  const renderArticlesLinks = ()=>{
    return SampleReviews.map(item=>{
      const {id, link} = item;
      return (
        <Route key={id} exact path={link}>
            <Review information = {item}>
                <section>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                    aliquam id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                    aliquam id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                    aliquam id sapien.
                </section>
                <blockquote className="review-album-oneliner">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                </blockquote>
                <section>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                    aliquam id sapien.Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                    aliquam id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel iaculis libero. Sed mi mauris, convallis ac elementum nec,
                    aliquam id sapien.
                </section>
            </Review>
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
