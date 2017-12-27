import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {
		loginLoadingReducer,
		loggedinReducer,
		signupLoadingReducer,
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
		sendingMessageReducer,
		messageClickedReducer
	} from "./actionReducer.js"



export const store = createStore(combineReducers(
	{
		loginLoadingReducer,
		loggedinReducer,
		signupLoadingReducer,
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
		sendingMessageReducer,
		messageClickedReducer
	}
	),
	applyMiddleware(
    thunkMiddleware
  )
)
