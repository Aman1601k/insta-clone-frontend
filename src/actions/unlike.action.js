import axiosInstance from "../helpers/axios";
import {postConstants} from './constants';
import {getsubpost} from './allPost.action'

export const unlikepost = (id) => {
    return async (dispatch) => {
      try {
        dispatch({ type: postConstants.UNLIKE_POST_REQUEST });
        const res = await axiosInstance.put(`/unlike`,{postId:id});
        if (res.status === 200){
          dispatch(getsubpost())
            dispatch({type: postConstants.UNLIKE_POST_SUCCESS,});
        } else {
          dispatch({ type: postConstants.UNLIKE_POST_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };