import axiosInstance from '../helpers/axios'
import { updateUser } from './auth.action';
import { userConstants } from "./constants"

export const signup = (user) => {

    console.log(user);

    return async (dispatch) => {

        dispatch({ type: userConstants.SIGNUP_REQUEST});

        const res = await axiosInstance.post(`/signup` , {
            ...user
        })

        if(res.status == 200){
            const {message} = res.data;
            dispatch({ 
                type: userConstants.SIGNUP_SUCCESS,
                payload:{
                    message
                }
            });
        }else{
            if(res.status === 206){
                dispatch({ 
                    type: userConstants.SIGNUP_FAILURE,
                    payload:{ error: res.data.error  }
                });
            }
        }
    }
}

export const userProfile = (userid) => {
    return async (dispatch) => {

        dispatch({ type: userConstants.USER_PROFILE_REQUEST});

        const res = await axiosInstance.get(`/user/${userid}`)

        if(res.status == 200){
            const {user , post} = res.data;
            dispatch({ 
                type: userConstants.USER_PROFILE_SUCCESS,
                payload:{user , post}
            });
        }else{
            if(res.status === 500){
                dispatch({ 
                    type: userConstants.USER_PROFILE_FAILURE,
                    payload:{ error: res.data.error  }
                });
            }
        }
    }
}

export const followUser = (userid) => {
    return async (dispatch) => {

        dispatch({ type: userConstants.FOLLOW_USER_REQUEST});

        const res = await axiosInstance.put(`/follow`,{followId:userid})

        if(res.status == 200){
            const {data} = res;
            console.log(data)
            dispatch({ 
                type: userConstants.FOLLOW_USER_SUCCESS,
            });
            // dispatch(userProfile(userid));
            dispatch(updateUser(res.data));
        }else{
            dispatch({ 
                type: userConstants.FOLLOW_USER_FAILURE,
                payload:{ error: res.data.error  }
            });
        }
    }
}
export const unfollowUser = (userid) => {
    return async (dispatch) => {
        dispatch({ type: userConstants.UNFOLLOW_USER_REQUEST});
        const res = await axiosInstance.put(`/unfollow`,{unfollowId:userid})
        
        if(res.status == 200){
            const {data} = res;
            console.log(data)
            dispatch({ 
                type: userConstants.UNFOLLOW_USER_SUCCESS,
            });
            // dispatch(userProfile(userid));
            dispatch(updateUser(res.data));
        }else{
                dispatch({ 
                    type: userConstants.UNFOLLOW_USER_FAILURE,
                    payload:{ error: res.data.error  }
                });
        }
    }
}

export const suggestedUsers = () => {
    return async (dispatch) => {
        dispatch({ type: userConstants.GET_SUGGESTED_USER_REQUEST});
        const res = await axiosInstance.get(`/suggesteduser`)
        const{result} = res.data;
        console.log("SuggestedUser" , result)

        if(res.status === 200) {
            dispatch({ 
                type: userConstants.GET_SUGGESTED_USER_SUCCESS,
                payload:{result}
            })
        }
    }
}

export const userChats = (receiverId) => {
    return async (dispatch) => {
        dispatch({ type: userConstants.USER_CHATS_REQUEST});
        const res = await axiosInstance.post(`/getreceiver`, {receiverId} )
        console.log("nice", receiverId)
        if(res.status == 200){
            const {data} = res;
            console.log("daaaaaaaaaaaaaatttttttttttttttaaaaaaaaaaaaaa",data)
            dispatch({ 
                type: userConstants.USER_CHATS_SUCCESS,
                payload:data
            });
        }else{
            dispatch({ 
                type: userConstants.USER_CHATS_FAILURE,
                payload:{ error: res.data.error  }
            });
        }
    }
}

export const getFollowers = (id) => {
    return async (dispatch) => {
      const res = await axiosInstance.get(`/getfollowers/${id}`);
      const user = res.data.user;
      let followers = user.map((e) => e.followers);
      var merged = [].concat.apply([], followers);
      if (res.status === 200) {
        dispatch({
          type: userConstants.GET_FOLLOWERS_DETAILS,
          payload: {
            followers: merged,
          },
        });
      }
    };
  };
  
  export const getFollowings = (id) => {
    return async (dispatch) => {
      const res = await axiosInstance.get(`/getfollowings/${id}`);
  
      if (res.status === 200) {
        const user = res.data.user;

      let followings = user.map((e) => e.following);

      var merged = [].concat.apply([], followings);

      console.log('Followings merged', merged);

      dispatch({
        type: userConstants.GET_FOLLOWINGS_DETAILS,
        payload: { followings: merged },
      });
      }
    };
  };
  