import axiosInstance from "../helpers/axios";
import {postConstants} from './constants'
import {allposts} from './allPost.action'

export const createpost = (post) => {
    return async (dispatch) => {
      try {
        dispatch({ type: postConstants.CREATE_POST_REQUEST });
        const res = await axiosInstance.post(`/createpost` ,{
            ...post
        });
        if (res.status === 201) {
          dispatch(allposts())
          const { post } = res.data;
          dispatch({
            type: postConstants.CREATE_POST_SUCCESS,
            payload: { post },
          });
        } else {
          dispatch({ 
            type: postConstants.CREATE_POST_FAILURE 
            ,payload: {error : res.data.error}
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };