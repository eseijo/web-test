import logo from '../../../assets/logo.png';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <img className="main-logo" src={logo} />
        <Button size="large" variant="contained" color="primary">Pide cita</Button>
      </div>
    );
  }
}

export default Main;
