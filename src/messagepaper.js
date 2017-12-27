import React, { Component } from 'react';
///import './App.css';

import Paper from 'material-ui/Paper';


import Typography from 'material-ui/Typography';






class MessagePaper extends Component {
  constructor(props){
    super(props)
   
  }

  


  render() {

document.body.style.backgroundColor = "#f2f2f2";

    return (
      <div>
      
          <Paper style={{marginTop :5,marginBottom :5,marginLeft:5}}>
              <Typography component="p">
                    {this.props.display}
              </Typography>
          </Paper>
      

              
      </div>
    );
  }
}

export default MessagePaper;
