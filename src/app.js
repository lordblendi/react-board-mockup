import React from 'react';

// route
import Router from './routers/router';
import { BrowserRouter } from 'react-router-dom'

// header
import AppBar from 'material-ui/AppBar';

// style
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal700, teal800, teal900} from 'material-ui/styles/colors'
import './styles/default.scss';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal900,
    primary2Color: teal800,
    primary3Color: teal700,
    shadowColor: teal900
  }
});

// the MuiThemeProvider can have only 1 child!
const App = () => (<BrowserRouter>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar title="Board View" showMenuIconButton={false} />
        <Router/>
      </div>
    </MuiThemeProvider>
  </BrowserRouter>)

export default App
