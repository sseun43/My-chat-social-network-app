import React, { Component } from 'react';
///import './App.css';

import Button from 'material-ui/Button';

import List, { ListItem, ListItemText } from 'material-ui/List';


class MessageNames extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
    }
    this.handleClick=this.handleClick.bind(this)
  }


  handleClick(){
    this.props.runFunc(this.props.myKey)
  }
  

  render() {
    const {namesObj,runFunc}=this.props

document.body.style.backgroundColor = "#f2f2f2";

    return (
      <div>
      
          {/*<Messages/>*/}
          <ListItem>
                    <Button onClick={this.handleClick} data-something="here I am" style={{width:"100%"}}>
                        {namesObj.participants[0].name}
                    </Button>
                </ListItem>

              
      </div>
    );
  }
}

export default MessageNames;
