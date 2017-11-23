import React, { Component } from 'react';
import './styles/index.scss';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


class Login extends Component {
  render() {
    return (


       <Card className="login" >
        <CardHeader title="Login" />
        <CardText className="login__inputs">
          <TextField className="login__input" floatingLabelText="username" />
          <TextField className="login__input" floatingLabelText="password" type="password" />
        </CardText>
        <CardActions className="login__actions">
          <RaisedButton label='login' />
        </CardActions>
      </Card>
    );
  }
}

export default Login;
