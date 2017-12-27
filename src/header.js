import React, { Component } from 'react';
import logo from './logo.svg';
//import { red, purple } from 'material-ui/colors';
//import './App.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


class Bar extends Component {
  constructor(props){
    super(props)
  }

  render() {
document.body.style.backgroundColor = "#f2f2f2";


    return (
      <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
      <AppBar position="static" style={{"backgroundColor":"purple"}}>
        <Toolbar>
          <Typography type="title" style={{"color":"white"}}>
            Fakebook
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
      
    );
  }
}

export default Bar;