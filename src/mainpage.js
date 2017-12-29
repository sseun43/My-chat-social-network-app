import React, { Component } from 'react';
///import './App.css';

import Bar from "./header.js"
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import List, { ListItem } from 'material-ui/List';

import PostPaper from "./postpaper.js";
import FriendRequestChip from "./friendrequestchip.js"
import FriendChip from "./friendchip.js"


class MainPage extends Component {
  constructor(props){
    super(props)
    this.state={
      thePost:"",
    }
    this.handlePostChange=this.handlePostChange.bind(this)
    this.submit=this.submit.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.messageClicked && nextProps.loadedMessages.length){
    this.props.ready()
   }
  }

  handlePostChange(event){
    this.setState({
      thePost: event.target.value
    });

  }

  submit(){
    const { _sendRequest }=this.refs
    this.props.sendFriendRequestMethod(_sendRequest.value)
    alert("friend request sent");
    _sendRequest.value="";

  }

  render() {

const { 
  ready,
  name,
  friendList,
  friendRequest,
  post,
  messageReady,
  loadedMessages,
  acceptFriendRequestMethod,
  rejectFriendRequestMethod,
  sendPostMethod,
  sendFriendRequestMethod,
  loadingMessageMethod,
  messageClickedMethod,
  logoutMethod,
  logout } = this.props;

  const formattedPost = name+" : "+this.state.thePost
document.body.style.backgroundColor = "#f2f2f2";

    return (
      <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        <Bar/>
        <Grid container spacing={0} style={{marginTop: 30,paddingLeft :20,paddingRight:20}}>
        <h5 style={{color:"purple"}}>Welcome {name}</h5>
            <Grid item md={12} xs={12} sm={12}>
              <TextField
                id="multiline-static"
                label="Write Status"
                InputLabelProps={{
                  shrink: true,
                }}
                multiline
                rowsMax="4"
                placeholder="Share new status"
                fullWidth
                margin="normal"
                onKeyPress={(ev)=>{if (ev.key === 'Enter') {ev.preventDefault(); sendPostMethod(formattedPost);ev.target.value=""}} }
                onChange={(event)=>{this.handlePostChange(event)}} 
                />
            </Grid>
            <Grid item md={7} xs={12} sm={12}>
              
              <div style={{overflowY: "auto",maxHeight:440,}}>
                <h5 style={{color:"purple"}}>Posts</h5>
                {post.map((v,i)=><PostPaper key={i} status={v}/>)}
              </div>
            </Grid>


          <Grid item md={5} xs={12} sm={12}>

              
                
             
              <div style={{display: 'flex',justifyContent: "center",alignItems: "center",paddingBottom:20}}>
                <h4 style={{color:"purple"}}>Friend List</h4>
              </div>

                <List style={{backgroundColor:"white",overflowY: "auto",height:100}}>
            
                
                   {friendList.map((v,i)=> <FriendChip key={i} label ={v}/>)}

                  
                
              </List>

              <input ref ="_sendRequest" style={{marginTop:30}}></input> 
              <button onClick={()=>{this.submit()}} >Send Friend Request</button>

              <div style={{display: 'flex',justifyContent: "center",alignItems: "center",paddingBottom:20}}>
              <h4 style={{color:"purple",marginBottom:2}}>New Friend Requests</h4>
            </div>
           
              <List style={{backgroundColor:"white",overflowY: "auto",height:100}}>
          
                    
                      {friendRequest.map((v,i)=><FriendRequestChip 
                                                  key={i} 
                                                  label ={v} 
                                                  accept={acceptFriendRequestMethod}
                                                  reject={rejectFriendRequestMethod}
                                                  />)}
                    
                    
              </List>
           
          </Grid>

            <Grid item md={6} xs={6} sm={6} style={{display: 'flex',justifyContent: "center",alignItems: "center",paddingBottom:20,paddingTop:20}}>
              <Button onClick={()=>{loadingMessageMethod();messageClickedMethod();/*ready()*/}}  raised style={{backgroundColor:"purple",color:"white"}} >Messages</Button>
            </Grid>

            <Grid item md={6} xs={6} sm={6} style={{display: 'flex',justifyContent: "center",alignItems: "center",paddingBottom:20,paddingTop:20}}>
              <Button onClick={()=>{logoutMethod(); logout()}}   raised style={{backgroundColor:"purple",color:"white"}} >Logout</Button>
            </Grid>

        </Grid>
        
        
      </div>
    );
  }
}

export default MainPage;
