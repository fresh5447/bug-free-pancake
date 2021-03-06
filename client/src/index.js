import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './views/index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './containers/HomeContainer';
import Game from './containers/GameContainer';

render((
  <Router history={browserHistory} >
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
        <Route path='/Game/:gameId'  component={Game}/>
        {/*<Route path='/Answer' component={Answer}/>
        <Route path='/Results' component={Results} /> */}
    </Route>
  </Router>
), document.getElementById('root'));
