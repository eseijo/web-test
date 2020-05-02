import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Panel from '../Panel';
import Navbar from '../Navbar';

class App extends Component {

  render() {

    const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#f9e388',
          main: '#facb0b',
          dark: '#e6bb09',
          contrastText: '#fff'
        }
      }
    });

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar></Navbar>
          <Panel content="Main"></Panel>
          <Panel content="Info"></Panel>
          <Panel content="Banner"></Panel>
          <Panel content="About"></Panel>
          <Panel content="Contact"></Panel>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
