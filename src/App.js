import React, { Component } from 'react';
import Login from "./login.js"
import Messages from "./messaging.js"
import Mainpage from "./mainpage.js";
import { Provider } from 'react-redux'
import {store} from "./daStore.js"
import {NewLogin,NewMainpage, NewMessage} from "./dispatcher.js"




class App extends Component {
  constructor(props){
    super(props)
    this.state={
      mainpageReady:false,
      messageReady:false,
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleMessageChange=this.handleMessageChange.bind(this)
    this.handleHomepage=this.handleHomepage.bind(this)
    this.handleLogout=this.handleLogout.bind(this)
  }

  handleChange(){
    this.setState({mainpageReady:store.getState().loggedinReducer.login,})
  }

  handleMessageChange(){
    this.setState({mainpageReady:false, messageReady:true})
  }

  handleHomepage(){
    this.setState({messageReady:false,mainpageReady:true})
  }

  handleLogout(){
    this.setState({messageReady:false,mainpageReady:false})
  }
  

  render() {
 const {mainpageReady,messageReady} =this.state

document.body.style.backgroundColor = "#f2f2f2";

    return (
      <div>
        
          <Provider store = {store}>
          <div> {/* AlWAYS WRAP COMPONENT INSIDE PROVIDER WITH DIV*/}
             {(!mainpageReady&&!messageReady) ? <NewLogin ready={this.handleChange}/> : null}//
             {(mainpageReady&&!messageReady) ? <NewMainpage ready={this.handleMessageChange} logout={this.handleLogout}/> : null} 
            {messageReady ? <NewMessage ready={this.handleHomepage} logout={this.handleLogout}/> : null}
          </div>
          </Provider>
           
      </div>
    );
  }
}

export default App;
