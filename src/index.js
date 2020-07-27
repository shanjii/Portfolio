import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Home';
import * as serviceWorker from './serviceWorker';
import { Route, Link, HashRouter as Router, Switch, Redirect, HashRouter, BrowserRouter } from "react-router-dom";


const Home = ({ component: Component }) => (
  <Route render={props =>
    <Component {...props} />}
  />
)

const routing = (
  <BrowserRouter>
    <div>
      <Switch>
        <Home exact path='/' component={Main} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.register();


