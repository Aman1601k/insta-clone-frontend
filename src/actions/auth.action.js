import { useHistory } from 'react-router-dom';
import axiosInstance from '../helpers/axios'
import { authConstants , userConstants } from "./constants"

export const login = (user) => {

    console.log(user);

    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST});

        const res = await axiosInstance.post(`/signin` , {
            ...user
        })

        if(res.status == 200){
            const {token , user} = res.data;
            localStorage.setItem('token', token );
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({ 
                type: authConstants.LOGIN_SUCCESS,
                payload:{
                    token , user
                }
            });
        }else{
            if(res.status == 206){
                dispatch({ 
                    type: authConstants.LOGIN_FAILURE,
                    payload:{ error: res.data.error }
                });
            }
        }
    }
}

export const signout = () => {
    return async dispatch => {

        dispatch({type: authConstants.LOGOUT_REQUEST})
        const res = await axiosInstance.post(`/signout`)

        if(res.status === 200) {
            localStorage.clear();
        dispatch({ type: authConstants.LOGOUT_SUCCESS})
        }else{
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: {error: res.data.error}
            })
        }
        
    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({ 
                type: authConstants.LOGIN_SUCCESS,
                payload:{
                    token , user
                }
            });
        }else{
            dispatch({ 
                type: authConstants.LOGIN_FAILURE,
                payload:{ error: 'User not login'  }
            });
        }
    }
}

export const updateUser = (user) => {
    return async (dispatch) => {
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({
        type: authConstants.UPDATE_FOLLOWINGS,
        payload: {
          user,
        },
      });
    };
  };

export const updateProfilePicture = (url) => {
  return async (dispatch) => {
    const res = await axiosInstance.put('/updateprofilepic', {
      profilePicture: url,
    });
    dispatch({
      type: userConstants.UPDATE_USER_DETAILS,
      payload: {
        user: res.data.result,
      },
    });
    localStorage.setItem('user', JSON.stringify(res.data.result));
  };
};
  
export const updateBio = (bio) => {
  return async (dispatch) => {
    const res = await axiosInstance.put('/updatebio', {
      bio,
    });
    dispatch({
      type: userConstants.UPDATE_USER_DETAILS,
      payload: {
        user: res.data.result,
      },
    });
    localStorage.setItem('user', JSON.stringify(res.data.result));
  };
};

export const resetPassword = (email) => {
  return async (dispatch) => {

      dispatch({ type: authConstants.RESET_PASSWORD_REQUEST});

      const res = await axiosInstance.post(`/reset-password`,{email})
      console.log(res);
      if(res.status == 200){
          const {message} = res.data;
          dispatch({ 
              type: authConstants.RESET_PASSWORD_SUCCESS,
              payload:{message}
          });
      }else{
          if(res.status == 206){
              dispatch({ 
                  type: authConstants.RESET_PASSWORD_FAILURE,
                  payload:{ error: res.data.error }
              });
          }
      }
  }
}

export const newPassword = (password , token) => {
  return async (dispatch) => {

      dispatch({ type: authConstants.NEW_PASSWORD_REQUEST});
      const res = await axiosInstance.post(`/new-password`,{
          password , token
      })
      console.log(res);
      if(res.status == 200){
          const {message} = res.data;
          dispatch({ 
              type: authConstants.NEW_PASSWORD_SUCCESS,
              payload:{message}
          });
      }else{
          if(res.status == 206){
              dispatch({ 
                  type: authConstants.NEW_PASSWORD_FAILURE,
                  payload:{ error: res.data.error }
              });
          }
      }
  }
}

export const getSavedPosts = (ids) => {
    return async (dispatch) => {
      const res = await axiosInstance.post('/get-savedposts', { ids });
      console.log('details from saved', res);
      if (res.status === 200) {
        localStorage.setItem('savedPosts', JSON.stringify(res.data));
        dispatch({
          type: authConstants.GET_SAVED_POSTS,
          payload: {
            posts: res.data,
          },
        });
      }
    };
  };
  
  export const savePost = (id) => {
    return async (dispatch) => {
      const res = await axiosInstance.post('/savepost', { id });
      console.log(res.data);
      dispatch({ type: authConstants.SAVE_POST_REQUEST });
  
      if (res.status === 200) {
        localStorage.setItem('ids', JSON.stringify(res.data));
        dispatch({
          type: authConstants.SAVE_POST_SUCCESS,
          payload: {
            id: res.data,
          },
        });
      }
    };
  };
  
  export const unsavePost = (id) => {
    return async (dispatch) => {
      const res = await axiosInstance.post('/unsavepost', { id });
      console.log('unsaved', res.data);
  
      if (res.status === 200) {
        if (res.data.length === 0) {
          localStorage.setItem('savedPosts', null);
        }
        localStorage.setItem('ids', JSON.stringify(res.data));
        dispatch({
          type: authConstants.UNSAVE_POST_SUCCESS,
          payload: {
            id: res.data,
          },
        });
      }
    };
  };