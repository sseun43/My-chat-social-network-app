import { connect } from 'react-redux'
import Login from "./login.js"
import Messages from "./messaging.js"
import Mainpage from "./mainpage.js";

/*import {
		loginLoadingReducer,
		loggedinReducer,
		signupLoadingReducer,
		signedupReducer,
		callPostReducer,
		postReducer,
		callFriendListReducer,
		FriendListReducer,
		callFriendRequestReducer,
		friendRequestReducer,
		sendFriendRequestReducer,
		sendingPostReducer,
		loadingMessageReducer,
		messageReducer,
		sendingMessageReducer
		messageClickedReducer
	} from "./actionReducer.js"*/

import {
	loginLoading,
	loggedIn,
	signupLoading,
	signedUp,
	callPost,
	post,
	callFriendList,
	friendList,
	callFriendRequest,
	friendRequest,
	sendFriendRequest,
	sendAcceptRequest,
	acceptRequest,
	sendRejectRequest,
	rejectRequest,
	sendingPost,
	postSent,
	loadingMessage,
	messageRecieved,
	sendingMessage,
	messageSent,
	fetchLogin,
	fetchAcceptRequest,
	fetchRejectRequest,
	fetchSendStatus,
	fetchSendRequest,
	fetchmessages,
	fetchSendMessage,
	messageClicked,
	messageUnclicked,
	fetchSignup,
	fetchLogout

} from "./actionCreator.js"

	export const NewLogin =connect(
		state=>({
			loginLoading:state.loginLoadingReducer,
			loggedIn:state.loggedinReducer.login,
			isSignedUp:state.signupLoadingReducer,
			name:state.loggedinReducer.name	
		}),
		dispatch=>({
			login(name,password){
				dispatch(fetchLogin(name,password))
			},
			signupMethod(name,age,password,email){
				dispatch(fetchSignup(name,age,password,email))
			}
		})
		)(Login)

	export const NewMainpage = connect(
		state=>({
			name:state.loggedinReducer.name	,
			friendList:state.FriendListReducer,
			friendRequest:state.friendRequestReducer,
			post:state.postReducer,
			messageReady:state.loadingMessageReducer,
			loadedMessages:state.messageReducer,
			messageClicked:state.messageClickedReducer
		}),
		dispatch=>({
			acceptFriendRequestMethod(id,name){
				dispatch(fetchAcceptRequest(id,name))
			},
			rejectFriendRequestMethod(id,name){
				dispatch(fetchRejectRequest(id,name))
			},
			sendPostMethod(thePost){
				dispatch(fetchSendStatus(thePost))
			},
			sendFriendRequestMethod(name){
				dispatch(fetchSendRequest(name))
			},
			loadingMessageMethod(){
				dispatch(fetchmessages())
			},
			messageClickedMethod(){
				dispatch(messageClicked())
			},
			logoutMethod(){
				dispatch(fetchLogout())
			}
		})

		)(Mainpage)

export const NewMessage=connect(
	state=>({
		messageReady:state.loadingMessageReducer,
		loadedMessages:state.messageReducer,
		messageClicked:state.messageClickedReducer
	}),
	dispatch=>({
		sendMessageMethod(message,friendId,messageId){
			dispatch(fetchSendMessage(message,friendId,messageId))
		},
		loadingMessageMethod(){
				dispatch(fetchmessages())
			},
		messageUnclickedMethod(){
			dispatch(messageUnclicked())
		},
		logoutMethod(){
				dispatch(fetchLogout())
			}
	})
	)(Messages)