import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login/index';
import './styles/default.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function returnPage(page) {
  return (<MuiThemeProvider>
    {page}
  </MuiThemeProvider>);
}

ReactDOM.render(returnPage(<Login/>), document.getElementById('root'));
