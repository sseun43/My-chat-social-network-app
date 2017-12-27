import React, { Component } from 'react';
import { v4 } from 'uuid'
import Bar from "./header.js"
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import List, { ListItem, ListItemText } from 'material-ui/List';
import MessagePaper from "./messagepaper.js"
import MessageNames from "./messagenames.js"
import Divider from 'material-ui/Divider';
import openSocket from 'socket.io-client';
const connectOpt ={
  "force new connection":true,
  "reconnectionAttempts":"Infinity",
  "timeout" : 10000,
  "transports" :["websocket"]
}
const  socket = openSocket.connect("https://social-network-api.herokuapp.com",connectOpt);//


class Messages extends Component {
  constructor(props){
    super(props)
    this.state={
      currentIndex:0,
      theMessage:""
    }
    socket.on("message",()=>{
      this.props.loadingMessageMethod()
      

    })
    this.manageIndex=this.manageIndex.bind(this)
    this.handleMessageChange=this.handleMessageChange.bind(this)
    this.handleMessageSend=this.handleMessageSend.bind(this)
  }

  componentWillReceiveProps(nextProps){
    this.refs._blue.autoplay=true
    this.refs._blue.load()
  }

manageIndex(index){
  this.setState({currentIndex:index})
}

handleMessageSend(ev){
  const {loadedMessages, sendMessageMethod} =this.props
  const {theMessage, currentIndex} = this.state

  if (ev.key === 'Enter') {
    ev.preventDefault(); 
    sendMessageMethod(theMessage, loadedMessages[currentIndex].participants[0]._id, loadedMessages[currentIndex]._id);
    ev.target.value=""
  }
}

handleMessageChange(event){
  this.setState({
      theMessage: event.target.value
    })

}


  render() {
    const {loadedMessages, sendMessageMethod,ready,messageUnclickedMethod,logoutMethod,logout} =this.props
    const {theMessage, currentIndex} = this.state

document.body.style.backgroundColor = "#f2f2f2";

    return (
      <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
      <audio ref="_blue" src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"></audio>
        <Bar/>
        <Grid container spacing={0} style={{paddingRight:20}}>
            <Grid item md={4} xs={4} sm={4}>
            <List style={{backgroundColor:"white",overflowY: "auto",height:570}}>
          
                <ListItem>
                    <ListItemText primary="Messages" />
                </ListItem>
                <Divider/>
                    {loadedMessages.map((v,i)=><MessageNames key={v4()} myKey={i} namesObj={v} runFunc={this.manageIndex}/>)}
                
              </List>


            </Grid>

            <Grid item md={8} xs={8} sm={8}>

              <div style={{overflowY: "auto",height:520,}}>
                {loadedMessages[currentIndex].messages.map((v,i)=><MessagePaper key={v4()} display={v}/>) }
              </div>
              
              <TextField
                id="multiline-static"
                label="Write Messages"
                InputLabelProps={{
                  shrink: true,
                }}
                multiline
                rowsMax="4"
                fullWidth
                margin="normal"
                onKeyPress={this.handleMessageSend }
                onChange={(event)=>{this.handleMessageChange(event)}} 
                />

            </Grid>

            <Grid item md={6} xs={6} sm={6} style={{display: 'flex',justifyContent: "center",alignItems: "center",paddingBottom:20,paddingTop:20}}>
              <Button onClick={()=>{ready(); messageUnclickedMethod()}} raised style={{backgroundColor:"purple",color:"white"}} >Home</Button>
            </Grid>

            <Grid item md={6} xs={6} sm={6} style={{display: 'flex',justifyContent: "center",alignItems: "center",paddingBottom:20,paddingTop:20}}>
              <Button  onClick={()=>{logoutMethod(); logout()}} raised style={{backgroundColor:"purple",color:"white"}} >Logout</Button>
            </Grid>
        </Grid>


              
      </div>
    );
  }
}

export default Messages;