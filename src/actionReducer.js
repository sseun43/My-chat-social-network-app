
import act from "./actionObject.js"

export const loginLoadingReducer=(state=false,action)=>{
	switch(action.type){
		case act.LOGINLOADING:
		return true
		case act.LOGGEDIN:
		return false
		default:
		return state
	}

}
export const loggedinReducer=(state={login:false,name:""},action)=>{
	switch(action.type){
		case act.LOGGEDIN:
		return {login:true,name:action.name}
		case act.LOGGEDOUT:
		return{login:false,name:""}
		default:
		return state
	}
	
}
/********************************************/
export const signupLoadingReducer=(state=false,action)=>{
	switch(action.type){
		case act.SIGN_UP_LOADING:
		return true
		case act.SIGNED_UP:
		return false
		default:
		return state
	}
	
}
/*export const signedupReducer=(state=false,action)=>{
	switch(action.type){
		case act.SIGNED_UP:
		return true
		default:
		return state
	}
}*/
/*******************************************/
export const callPostReducer=(state=false,action)=>{
	switch(action.type){
		case act.CALL_POST:
		return true
		case act.POST:
		return false
		default:
		return state
	}
}
export const postReducer=(state=[],action)=>{
	switch(action.type){
		case act.POST:
		return action.postArray
		case act.POST_SENT:
		return [action.thePost ,...state]
		default:
		return state
	}
	
}
/*****************************************/
export const callFriendListReducer=(state=false,action)=>{
	switch(action.type){
		case act.CALL_FRIENDLIST:
		return true
		case act.FRIENDLIST:
		return false
		default:
		return state
	}
}
export const FriendListReducer=(state=[],action)=>{
	switch(action.type){
		case act.FRIENDLIST:
		return action.friendListArray
		case act.ACCEPTREQUEST:
		return [...state , action.name]
		case act.REJECTREQUEST:
		return [...state , action.name]
		default:
		return state
	}
	
}
/**************************************/
export const callFriendRequestReducer=(state=false,action)=>{
	switch(action.type){
		case act.CALL_FRIENDREQUEST:
		return true
		default:
		return state
	}
}
export const friendRequestReducer=(state=[],action)=>{//remember to use the id of the friendlist e.g[{name,id,acceptReject:false}]
	switch(action.type){
		case act.FRIENDREQUEST:
		return action.friendRequestArray

		case act.SEND_ACCEPTREQUEST:
		return (state.map(v=>{
			if(v.id===action.id){
				v.acceptReject=true
				return v
			}
		}))

		case act.ACCEPTREQUEST:
		return state.filter(v=>{
			return v.id!==action.id 
		})

		case act.SEND_REJECTREQUEST:
		return (state.map(v=>{
			if(v.id===action.id){
				v.acceptReject=true
				return v
			}
		}))

		case act.REJECTREQUEST:
		return state.filter(v=>{
			return v.id!==action.id 
		})

		default:
		return state
	}
}
/******************************************/
export const sendFriendRequestReducer=(state=false,action)=>{
	switch(action.type){
		case act.SEND_FRIENDREQUEST:
		return !state
		default:
		return state
	}
}
/*******************************************/
/* export const sendAcceptRequestReducer=(state=[],action)=>{
	switch(action.type){
		case act.SEND_ACCEPTREQUEST:
		return (state.map(v=>{
			if(v.id===action.id)return v.acceptReject=true
		}))
		default:
		return state
	}
}

export const AcceptRequestReducer=(state=[],action)=>{
	switch(action.type){
		case act.ACCEPTREQUEST:
		return state.filter(v=>{
			return v.id!==action.id 
		})
		default:
		return state
	}
}
*/
/**************************************************/
/*
export const sendRejectRequestReducer=()=>{
	switch(action.type){
		case act.SEND_REJECTREQUEST:
		return (state.map(v=>{
			if(v.id===action.id)return v.acceptReject=true
		}))
		default:
		return state
	}
}
export const rejectRequestReducer=()=>{
	switch(action.type){
		case act.REJECTREQUEST:
		return state.filter(v=>{
			return v.id!==action.id 
		})
		default:
		return state
	}
}
*/
/***************************************************/
export const sendingPostReducer=(state=false,action)=>{
	switch(action.type){
		case act.SENDING_POST:
		return true
		case act.POST_SENT:
		return false
		default:
		return state
	}
}
/*
export const postSentReducer=(state)=>{
	switch(action.type){
	
		default:
		return state
	}
}
*/
/*************************************************/
export const loadingMessageReducer=(state=false,action)=>{
	switch(action.type){
		case act.LOADING_MESSAGE:
		return true
		default:
		return state
	}
}
export const messageReducer=(state=[],action)=>{
	switch(action.type){
		case act.MESSAGE:
		return action.messages
		case act.LOGGEDOUT:
		return []
		default:
		return state
	}
}
/***********************************************/
export const sendingMessageReducer=(state=false,action)=>{
	switch(action.type){
		case act.SENDING_MESSAGE:
		return true
		case act.MESSAGE_SENT:
		return false
		default:
		return state
	}
}

export const messageClickedReducer=(state=false,action)=>{
	switch(action.type){
		case act.MESSAGE_CLICKED:
		return true
		case act.UNCLICK:
		return false
		default:
		return state
	}
}


/*******************************************************************/
