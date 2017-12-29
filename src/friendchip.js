import React, { Component } from 'react';
import List, { ListItem } from 'material-ui/List';
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
          <ListItem>
            <Chip 
              avatar={<Avatar src="https://source.unsplash.com/random"/>}
              label={this.props.label.name||this.props.label}
            />
          </ListItem>


              
      </div>
    );
  }
}

export default FriendChip;
