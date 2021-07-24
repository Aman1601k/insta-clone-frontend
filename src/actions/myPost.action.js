import axiosInstance from "../helpers/axios";
import {postConstants} from './constants'

export const mypost = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: postConstants.MY_POST_REQUEST });
        const res = await axiosInstance.get(`/mypost`);
        if (res.status === 200) {
          const { mypost } = res.data;
          dispatch({
            type: postConstants.MY_POST_SUCCESS,
            payload: { mypost },
          });
        } else {
          dispatch({ type: postConstants.MY_POST_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };