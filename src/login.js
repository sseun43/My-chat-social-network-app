import React, { Component } from 'react';
import Bar from "./header.js"
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      daname:"testUser",
      password:"testUser",
      name2:"",
      password2:"",
      age:"",
      email:""
    }
    this.handleNameChange=this.handleNameChange.bind(this)
    this.handlePasswordChange=this.handlePasswordChange.bind(this)
    this.signupName=this.signupName.bind(this)
    this.signupPassword=this.signupPassword.bind(this)
    this.signupEmail=this.signupEmail.bind(this)
    this.signupAge=this.signupAge.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.login){
    this.props.ready()
  }
  }

  handleNameChange(event){
    this.setState({
      daname: event.target.value
    });
  }

  handlePasswordChange(event){
    this.setState({
      password: event.target.value
    });
  }

  signupName(event){
    this.setState({
      name2: event.target.value
    })
  }

  signupPassword(event){
    this.setState({
      password2: event.target.value
    })
  }

  signupEmail(event){
    this.setState({
      email: event.target.value
    })
  }

  signupAge(event){
    this.setState({
      age: event.target.value
    })
  }

  render() {
const { loginLoading,loggedIn,isSignedUp,name,login,ready,signupMethod } = this.props;
const {daname,password,name2,password2,age,email} =this.state

document.body.style.backgroundColor = "#f2f2f2";

    return (

      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
        <Bar/>
        

        <Grid container spacing={0} justify="center" direction="column" alignItems="center">
          {(loginLoading||isSignedUp) ?<CircularProgress/>:null}
         <h1 style={{color:"purple"}}>Login</h1>
          <Grid item md={4} xs={12} sm={6} style={{width :"70%" }}>
        <Paper style={{display: 'flex',justifyContent: "center",alignItems: "center",paddingBottom:20}}>
            <form style={{display: 'flex',flexDirection: "column",justifyContent: "center",alignItems: "center"}} noValidate autoComplete="off">

                <TextField
                  id="uncontrolled"
                  label="Name"
                  defaultValue="testUser"
                  margin="normal"
                  onChange={(event)=>{this.handleNameChange(event)}}  
                />

                <TextField
                  required
                  id="required"
                  label="Password"
                  defaultValue="testUser"
                  margin="normal"
                  onChange={(event)=>{this.handlePasswordChange(event);}}
                />


                <Button raised color="primary" 
                style={{backgroundColor:"purple"}} 
                onClick={()=>{login(daname,password);}}> Login </Button> 


               
             </form>
          

         </Paper>

            
          </Grid>

          <h1 style={{color:"purple"}}>Sign Up</h1>
          <Grid item md={4} xs={12} sm={6} style={{width :"70%",}}>
            
            <Paper style={{display: 'flex',justifyContent: "center",alignItems: "center",paddingBottom:20}}>
            <form style={{display: 'flex',flexDirection: "column",justifyContent: "center",alignItems: "center"}} noValidate autoComplete="off">

                      <TextField
                        id="name"
                        label="Name"
                        onChange={(event)=>{this.signupName(event)}}
                        margin="normal"
                      />

                      <TextField
                        id="uncontrolled"
                        label="Age"
                        onChange={(event)=>{this.signupAge(event)}}
                        margin="normal"
                      />

                      <TextField
                        required
                        id="required"
                        label="Email"
                        onChange={(event)=>{this.signupEmail(event)}}
                        margin="normal"
                      />

                      <TextField
                        required
                        id="required"
                        label="Password"
                        onChange={(event)=>{this.signupPassword(event)}}
                        margin="normal"
                      />

                      <Button onClick={()=>{signupMethod(name2,age,password2,email);}} raised color="primary" style={{backgroundColor:"purple",alignSelf: "center"}}> Sign Up </Button> 

                </form>
            </Paper>
          </Grid>
           
          
        </Grid>
      </div>
    );
  }
}

export default Login;
