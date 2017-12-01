import React, { Component } from 'react';
import './styles/index.scss';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import { Link } from 'react-router-dom'


class Login extends Component {
  render() {
    return (
       <Card className="login" >
        <CardHeader className="login__title">
          Login
        </CardHeader>
        <CardText className="login__inputs">
          <TextField className="login__input" floatingLabelText="username" />
          <TextField className="login__input" floatingLabelText="password" type="password" />
        </CardText>
        <CardActions className="login__actions">
          <RaisedButton primary={true}>
            <Link to='/board'>Login</Link>
          </RaisedButton>
        </CardActions>
      </Card>
    );
  }
}

export default Login;
