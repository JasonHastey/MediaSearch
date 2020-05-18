import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {HomePage} from './components/pages/HomePage';
import {MoviePage} from './components/pages/MoviePage';
import {SearchPage} from './components/pages/SearchPage';

import {Header} from './components/Header';
import {Search} from './components/Search';

import AppState from './context/app/AppState';
import './App.scss';

const App = () => {
  return (
    <AppState>
          <Router>
              <div className='App'>
                <Header />
                <Switch>
                  <Route exact path='/' component={HomePage}  />
                  <Route exact path='/search' component={Search} />
                  <Route exact path='/moviePage' component={MoviePage} />
                  <Route exact path='/searchPage' component={SearchPage} />
                </Switch>
              </div>
          </Router>
    </AppState>
  );
};

export default App;