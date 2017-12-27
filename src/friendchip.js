import React, { Component } from 'react';
///import './App.css';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';



class FriendChip extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
    }
  }


  render() {

document.body.style.backgroundColor = "#f2f2f2";

    return (
      <div>
      
          {/*<Mainpage/>*/}
          <Chip
                    avatar={
                      <Avatar src="https://source.unsplash.com/random"/>
                    }
                    label={this.props.label.name||this.props.label}
                    />


              
      </div>
    );
  }
}

export default FriendChip;
