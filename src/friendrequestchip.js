import React, { Component } from 'react';
///import './App.css';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';



class FriendRequestChip extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
    }
    this.handleClick=this.handleClick.bind(this)
    this.handleRequestDelete=this.handleRequestDelete.bind(this)
  }

  handleClick(id,name){
    this.props.accept(id,name)
  }
  handleRequestDelete(id,name){
    this.props.reject(id,name)
  }

  render() {

document.body.style.backgroundColor = "#f2f2f2";
const {label} = this.props

    return (
      <div>
      
          {/*<Mainpage/>*/}
          <Chip
                    avatar={
                      <Avatar src="https://source.unsplash.com/random"/>
                    }
                    label={label.name}
                    onClick={()=>{this.handleClick(label.id,label.name)}}
                    onRequestDelete={()=>{this.handleRequestDelete(label.id,label.name)}}
                    
                  />


              
      </div>
    );
  }
}

export default FriendRequestChip;
