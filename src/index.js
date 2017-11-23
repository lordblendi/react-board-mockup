import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login/index';
import './styles/default.scss';
import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal700, teal800, teal900} from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal900,
    primary2Color: teal800,
    primary3Color: teal700,
  }
});

function returnPage(page) {
  return (<MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <AppBar title="Board View" showMenuIconButton={false} />
      {page}
    </div>
  </MuiThemeProvider>);
}

ReactDOM.render(returnPage(<Login/>), document.getElementById('root'));
