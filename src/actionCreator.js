import act from "./actionObject.js"
import fetch from 'cross-fetch'

export const loginLoading=()=>({
	type:act.LOGINLOADING
})
export const loggedIn=(name)=>({
	type:act.LOGGEDIN,
	name
})
export const logout=()=>({
	type:act.LOGGEDOUT,
	
})
export const signupLoading=()=>({
	type:act.SIGN_UP_LOADING
})
export const signedUp=()=>({
	type:act.SIGNED_UP

})
export const callPost=()=>({
	type:act.CALL_POST,
})
export const post=(postArray)=>({
	type:act.POST,
	postArray
})
export const callFriendList=()=>({
	type:act.CALL_FRIENDLIST
})
export const friendList=(friendListArray)=>({
	type:act.FRIENDLIST,
	friendListArray
})
export const callFriendRequest=()=>({
	type:act.CALL_FRIENDREQUEST
})
export const friendRequest=(friendRequestArray,id)=>({
	type:act.FRIENDREQUEST,
	friendRequestArray,
	id
})
export const sendFriendRequest=()=>({
	type:act.SEND_FRIENDREQUEST,
	
})
export const sendAcceptRequest=(id)=>({ //remember to use the id of the friendlist e.g[{name,id,acceptReject:false}]
	type:act.SEND_ACCEPTREQUEST,
	id
})
export const acceptRequest=(id,name)=>({
	type:act.ACCEPTREQUEST,
	id,
	name
})
export const sendRejectRequest=(id)=>({
	type:act.SEND_REJECTREQUEST,
	id
})
export const rejectRequest=(id,name)=>({
	type:act.REJECTREQUEST,
	id,
	name
})
export const sendingPost=(thePost)=>({
	type:act.SENDING_POST,
	thePost
})
export const postSent=(thePost)=>({
	type:act.POST_SENT,
	thePost
})

export const loadingMessage=()=>({
	type:act.LOADING_MESSAGE
})
export const messageRecieved=(messages)=>({
	type:act.MESSAGE,
	messages
})
export const sendingMessage=()=>({
	type:act.SENDING_MESSAGE
})
export const messageSent=()=>({
	type:act.MESSAGE_SENT
})
export const messageClicked =() =>({
	type:act.MESSAGE_CLICKED
})

export const messageUnclicked =()=>({
	type:act.UNCLICK
})

/*______________________________ASYNCHRONOUS ACTIONS______________________________________________________________*/


export const fetchLogin=(username,password)=>{
	return function(dispatch) {
		dispatch(loginLoading())
				fetch("https://social-network-api.herokuapp.com/login",{
		 		method:"post",
		 		credentials:"include",// used to send cookies back to backend
		 		headers: {
		 	"Accept":'application/json',
		    "Content-Type": 'application/json'

		  },
		  
		 		body:JSON.stringify({username,password})
		 	})
		 	.then(
		 		response=>{
		 			return response.json()}
		 		)
		 	.then((data)=>{
		 		if(data.success){
			 		console.log(data.user.name)
			 		dispatch(loggedIn(data.user.name))
			 		dispatch(callPost())
			 			fetch("https://social-network-api.herokuapp.com/allstatus",{
			 			credentials:"include",
			 			headers: {"Accept":'application/json', "Content-Type": 'application/json'}	
			 			})
			 			.then(response=>response.json())
			 			.then(data=>{
			 				const concatedStatus=data.statuses.reduce((a,v)=>{return [...a,...(v.status)]},[])
			 				dispatch(post(concatedStatus.reverse()))
			 			})

			 		dispatch(callFriendList())
			 			fetch("https://social-network-api.herokuapp.com/myfriends",{
			 			credentials:"include",
			 			headers: {"Accept":'application/json', "Content-Type": 'application/json'}	
			 			})
			 			.then(response=>response.json())
			 			.then(data=>{
			 				
			 				if(data.error){
			 					console.log([])
			 					dispatch(friendList([]))
			 				}else {
			 					const filteredData=data.filter(v=>(v))
			 					const mappedFriends=filteredData.map(v=>{ return {"name":v.name, "id":v._id,"acceptReject" :false}})
			 					dispatch(friendList(mappedFriends))
			 				}
			 				
			 			})

			 		dispatch(callFriendRequest())
			 			fetch("https://social-network-api.herokuapp.com/viewmyrequest",{
			 			credentials:"include",
			 			headers: {"Accept":'application/json', "Content-Type": 'application/json'}	
			 			})
			 			.then(response=>response.json())
			 			.then(data=>{
			 				if(data.error){
			 					console.log([])
			 					dispatch(friendRequest([]))
			 				}else {
				 				const filteredData=data.filter(v=>(v))
			 					const mappedFriends =filteredData.map(v=>{ return {"name":v.name, "id":v._id,"acceptReject" :false}})
			 					
			 					dispatch(friendRequest(mappedFriends))
		 				}
		 			})
		 		}	
		 	})
	}

}

export const fetchAcceptRequest=(id,name)=>{
	return function(dispatch){
		dispatch(sendAcceptRequest(id))
		fetch("https://social-network-api.herokuapp.com/acceptrequest/"+id,{
		 credentials:"include",
		 headers: {"Accept":'application/json', "Content-Type": 'application/json'}	
		 })
		.then(response=>response.json())
		.then(data=>{

			if(data.response){
				dispatch(acceptRequest(id,name))
					fetch("https://social-network-api.herokuapp.com/createmessage/"+id,{
			 		method:"post",
			 		credentials:"include",// used to send cookies back to backend
			 		headers: {
			 	"Accept":'application/json',
			    "Content-Type": 'application/json'

			  },
			  
			 		body:JSON.stringify({message:"this is the beginning of our chat"})
			 	})
			 	.then(response=>response.json())
			 	.then(data=>{
			 	})
				
			}
		})



	} 
}

export const fetchRejectRequest=(id,name)=>{
	return function(dispatch){
		dispatch(sendRejectRequest(id))
		fetch("https://social-network-api.herokuapp.com/rejectrequest/"+id,{
		 credentials:"include",
		 headers: {"Accept":'application/json', "Content-Type": 'application/json'}	
		 })
		.then(response=>response.json())
		.then(data=>{
			if(data.response){
				dispatch(rejectRequest(id,name))
			}
		})



	} 
}

export const fetchSendStatus=(thePost)=>{
	return function(dispatch){
		dispatch(sendingPost(thePost))

			let testArr=thePost.split(" : ")
			testArr.shift()
			let formattedString = testArr.join(" : ")

		fetch("https://social-network-api.herokuapp.com/mystatus",{
		 		method:"post",
		 		credentials:"include",// used to send cookies back to backend
		 		headers: {
		 	"Accept":'application/json',
		    "Content-Type": 'application/json'

		  },
		  
		 		body:JSON.stringify({status:formattedString})
		 	})
		.then(response=>response.json())
		.then(data=>{
			if(data.response){
				dispatch(postSent(thePost))
			}
		})

	}
}

export const fetchSendRequest=(name)=>{
	return function(dispatch){
		
		fetch("https://social-network-api.herokuapp.com/sendRequest/"+name,{
		 		credentials:"include",// used to send cookies back to backend
		 		headers: {
		 	"Accept":'application/json',
		    "Content-Type": 'application/json'

		  }
		 	})
		.then(response=>response.json())
		.then(data=>{
			if(data.response){
				dispatch(sendFriendRequest())
			}
		})
	 }
}

export const fetchmessages = () =>{
	return function(dispatch){
		dispatch(loadingMessage())
		fetch("https://social-network-api.herokuapp.com/allmessages",{
		 		credentials:"include",// used to send cookies back to backend
		 		headers: {
		 	"Accept":'application/json',
		    "Content-Type": 'application/json'

		  }
		 	})
		.then(response=>response.json())
		.then(data=>{
			if(!data.error){
				dispatch(messageRecieved(data.messaging))// fix it
			}
		})

	}
}

export const fetchSendMessage = (message,friendId,messageId) =>{
	return function(dispatch){
		dispatch(sendingMessage())
		fetch("https://social-network-api.herokuapp.com/createmessage/"+friendId,{
		 		method:"post",
		 		credentials:"include",// used to send cookies back to backend
		 		headers: {
		 	"Accept":'application/json',
		    "Content-Type": 'application/json'

		  },
		  
		 		body:JSON.stringify({message,messageId})
		 	})
			.then(response=>response.json())
			.then(data=>{
				if(!data.error){
					dispatch(messageSent()) /// posiibility to dispatch fetchmessages to refresh page as well
				}
			})

	}
}

export const fetchLogout =() => {
	return function(dispatch){
		
		fetch("https://social-network-api.herokuapp.com/logout",{
		 		credentials:"include",// used to send cookies back to backend
		 		headers: {
		 	"Accept":'application/json',
		    "Content-Type": 'application/json'

		  }
		 	})
		.then(response=>response.json())
		.then(data=>{
			if(data.response){
				dispatch(logout())
			}
		})
	}
}

export const fetchSignup=(name,age,password,email)=>{
	return function(dispatch){
		dispatch(signupLoading())
				fetch("https://social-network-api.herokuapp.com/new",{
		 		method:"post",
		 		credentials:"include",// used to send cookies back to backend
		 		headers: {
		 	"Accept":'application/json',
		    "Content-Type": 'application/json'

		  },
		  
		 		body:JSON.stringify({name,age,password,email})
		 	})
			.then(response=>response.json())
			.then(data=>{
				if(data.response){
					dispatch(signedUp())
				}
			})
	}
}