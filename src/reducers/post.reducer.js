import { postConstants } from "../actions/constants";

const initialState = {
    posts: [],
    mypost: [],
    postDetails: [],
    commenting:false,
    deleting:false,
    error:null,
    creating:false,
    }

export default (state = initialState, action) => {
    switch (action.type) {
        case postConstants.ALL_POST_SUCCESS:
            state={
                ...state,
                posts: action.payload.posts,
            }
            break;
        case postConstants.SUB_POST_SUCCESS:
            state={
                ...state,
                posts: action.payload.posts,
            }
            break;
        case postConstants.MY_POST_SUCCESS:
            state={
                ...state,
                mypost: action.payload.mypost,
            }
            break;
        case postConstants.CREATE_POST_REQUEST:
            state={
                ...state,
                creating: true,
            }
            break;
        case postConstants.CREATE_POST_SUCCESS:
            state={
                ...state,
                creating: false,
            }
            break;
        case postConstants.CREATE_POST_FAILURE:
            state={
                ...state,
                creating: false,
                error: action.payload.error  
            }
            break;
        case postConstants.LIKE_POST_REQUEST:
            state={
                ...state,
            }
            break;
        case postConstants.LIKE_POST_SUCCESS:
            state={
                ...state,
            }
            break;
        case postConstants.UNLIKE_POST_REQUEST:
            state={
                ...state,
            }
            break;
        case postConstants.UNLIKE_POST_SUCCESS:
            state={
                ...state,
            }
            break;
        case postConstants.COMMENT_POST_REQUEST:
            state={
                ...state,
                commenting:true,
            }
            break;
        case postConstants.COMMENT_POST_SUCCESS:
            state={
                ...state,
                commenting:false,
            }
            break;
        case postConstants.DELETE_POST_REQUEST:
            state={
                ...state,
                deleting:true,
            }
            break;
        case postConstants.DELETE_POST_SUCCESS:
            state={
                ...state,
                deleting:false,
            }
            break;
        case postConstants.DELETE_COMMENT_POST_REQUEST:
            state={
                ...state,
            }
            break;
        case postConstants.DELETE_COMMENT_POST_SUCCESS:
            state={
                ...state,
            }
            break;
        case postConstants.POST_DETAILS:
            state = {
                ...state,
                postDetails: action.payload.post,
            };
            break;
    }
    return state;
}