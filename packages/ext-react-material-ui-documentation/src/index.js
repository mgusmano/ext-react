import '@sencha/ext-react-material-ui-engine';
import '@sencha/ext-react-material-ui-theme';
import React from 'react';
//import ReactDOM from 'react-dom';
//import ExtReactDOM from '@sencha/ext-react-material-ui';
import ExtReactDOM from '@sencha/ext-react-material-ui/dist/common/ExtReactDOM';
import CssBaseline from '@material-ui/core/CssBaseline';
//import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';



//import { Simple } from './Simple';
//import NestedList from './NestedList';
//import { AppRecent } from './AppRecent';
//import { Live } from './Live';
import * as serviceWorker from './serviceWorker';
import * as d3 from 'd3'
import './index.css';
import { App } from './App';

// const themedark = createMuiTheme({
//   palette: {
//     type: 'dark',
//   },
// })
//import './layout.css';
//import { Layout } from './Layout';
window.d3 = d3
ExtReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();

//var baseColor = '#024059';
var baseColor = theme.palette.primary.main;
document.documentElement.style.setProperty("--base-color", baseColor);
