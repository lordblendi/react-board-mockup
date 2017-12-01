import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login/login';
import Board from '../pages/board/board';

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/board' component={Board}/>
    </Switch>
  </main>
)

export default Router
