import React, { Component } from 'react';
///import './App.css';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';



class PostPaper extends Component {
  constructor(props){
    super(props)
    
  }

  render() {

document.body.style.backgroundColor = "#f2f2f2";
 const {status} =this.props
    return (
      <div>
          <Paper style={{marginTop :10,marginBottom :10,marginRight:5}}>
                  <Typography component="p">
                    {status}
                  </Typography>
                </Paper>


              
      </div>
    );
  }
}

export default PostPaper;
