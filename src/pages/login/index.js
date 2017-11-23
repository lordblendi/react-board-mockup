import React, { Component } from 'react';
import './styles/index.scss';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login__box">
          <div className="login__inputs">
            <TextField floatingLabelText="username" />
            <TextField floatingLabelText="password" />
          </div>
          <div className="login__actions">
            <RaisedButton label='login' />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
