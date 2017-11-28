import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login/index';
import Board from '../pages/board/index';

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/board' component={Board}/>
    </Switch>
  </main>
)

export default Router
