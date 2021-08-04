import axiosInstance from "../helpers/axios";
import {postConstants} from './constants'

export const allposts = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: postConstants.ALL_POST_REQUEST });
        const res = await axiosInstance.get(`/allpost`);
        if (res.status === 200) {
          const { posts } = res.data;
          dispatch({
            type: postConstants.ALL_POST_SUCCESS,
            payload: { posts },
          });
        } else {
          dispatch({ type: postConstants.ALL_POST_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const getsubpost = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: postConstants.SUB_POST_REQUEST });
        const res = await axiosInstance.get(`/getsubpost`);
        if (res.status === 200) {
          const { posts } = res.data;
          dispatch({
            type: postConstants.SUB_POST_SUCCESS,
            payload: { posts },
          });
        } else {
          dispatch({ type: postConstants.SUB_POST_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };