import axiosInstance from "../helpers/axios";
import {messageConstants} from './constants';

// const userId = "60e14e99b79e7196ec6d575f"

export const getConversation = (userId) => {
    return async (dispatch) => {
      try {
        dispatch({ type: messageConstants.GET_ALL_CONVERSATIONS_REQUEST });
        const res = await axiosInstance.get(`/conversation/${userId}`,);
        console.log(res.data);
        if (res.status === 200){
          dispatch({
            type: messageConstants.GET_ALL_CONVERSATIONS_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({ type: messageConstants.GET_ALL_CONVERSATIONS_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  export const getConversationId = (senderId , receiverId ) => {

    return async (dispatch) => {
      try {
        dispatch({ type: messageConstants.GET_ALL_CONVERSATIONS_ID_REQUEST });
        console.log("SEEEENDDDD", senderId , receiverId)
        const res = await axiosInstance.post(`/getConversationId`, {senderId,receiverId});
        console.log("daaaaaaaaaaaattttttttttaaaaaaaaaa-------------------------" ,res);
        if (res.status === 200){
          dispatch({
            type: messageConstants.GET_ALL_CONVERSATIONS_ID_SUCCESS,
            payload: res.data.result[0]._id
          });
          dispatch(getUserDetails(receiverId))
        } else {
          dispatch({ type: messageConstants.GET_ALL_CONVERSATIONS_ID_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  }; 

  export const getUserDetails = (receiverId ) => {

    return async (dispatch) => {
      try {
        dispatch({ type: messageConstants.GET_USER_DETAILS_REQUEST });
        // console.log("SEEEENDDDD",  receiverId)
        const res = await axiosInstance.get(`/userdetails/${receiverId}`);
        if (res.status === 200){
          dispatch({
            type: messageConstants.GET_USER_DETAILS_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({ type: messageConstants.GET_USER_DETAILS_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  }; 
  
  export const getSpecificChats = (conversationId) => {
      return async (dispatch) => {
        try {
          dispatch({ type: messageConstants.GET_SPECIFIC_CHATS_REQUEST });
          const res = await axiosInstance.get(`/message/${conversationId}`,);
          console.log(res.data);
          if (res.status === 200){
            dispatch({
              type: messageConstants.GET_SPECIFIC_CHATS_SUCCESS,
              payload: res.data
            });
          } else {
            dispatch({ type: messageConstants.GET_SPECIFIC_CHATS_FAILURE });
          }
        } catch (error) {
          console.log(error);
        }
      };
    };

    export const sendMessage = (message) => {
      console.log("rrrrrrreeeeeeee",message);
      return async (dispatch) => {
        try {
          dispatch({ type: messageConstants.SEND_MESSAGE_REQUEST });
          // console.log("SEEEENDDDD",  receiverId)
          const res = await axiosInstance.post(`/message` , message);

          if (res.status === 200){
            dispatch({
              type: messageConstants.SEND_MESSAGE_SUCCESS,
              payload:res.data
            });
          } else {
            dispatch({ type: messageConstants.SEND_MESSAGE_FAILURE });
          }
        } catch (error) {
          console.log(error);
        }
      };
    }; 

    export const newConversation = (senderId, receiverId) => {
      return async (dispatch) => {
        console.log(senderId, receiverId, 'sender receiver');
        const res = await axiosInstance.post('/conversations', { senderId, receiverId });
        console.log(res);
    
        if (res.status === 200) {
          dispatch({ type: messageConstants.NEW_CONVERSATION });
          dispatch(getConversation(senderId));
          getUserDetails(receiverId);
        }
      };
    };