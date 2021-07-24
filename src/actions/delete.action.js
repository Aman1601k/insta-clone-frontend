import axiosInstance from "../helpers/axios";
import {postConstants} from './constants';
import {getsubpost} from './allPost.action'

export const deletepost = (id) => {
    return async (dispatch) => {
      try {
        dispatch({ type: postConstants.DELETE_POST_REQUEST });
        const res = await axiosInstance.delete(`/deletepost/${id}`);
        if (res.status === 200){
          dispatch(getsubpost())
          dispatch({type: postConstants.DELETE_POST_SUCCESS,});
        } else {
          dispatch({ type: postConstants.DELETE_POST_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
 