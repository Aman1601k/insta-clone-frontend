import axiosInstance from "../helpers/axios";
import {postConstants} from './constants';
import {getsubpost} from './allPost.action'

export const comment = (text ,id) => {
    return async (dispatch) => {
      try {
        dispatch({ type: postConstants.COMMENT_POST_REQUEST });
        const res = await axiosInstance.put(`/comment`,{postId:id , text});
        if (res.status === 200){
          dispatch(getsubpost())
          dispatch({type: postConstants.COMMENT_POST_SUCCESS,});
        } else {
          dispatch({ type: postConstants.COMMENT_POST_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
 