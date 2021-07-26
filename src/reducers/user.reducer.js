import { userConstants } from "../actions/constants"

const initState = {
    error:null,
    message:'',
    userPost:[],
    suggestedUser:[],
    followers: [],
    followings: [],
    userChats:[],
    loading:false,
    following:false,
    unfollowing:false,
    signUp:false,
}

export default (state = initState , action) => {
    switch (action.type) {
        case userConstants.SIGNUP_REQUEST:
            state ={
                ...state ,
                loading:true 
            }
            break;
        case userConstants.SIGNUP_SUCCESS:
            state ={
                ...state,
                loading:false,
                signUp: true,
                message: action.payload.message
            }
            break;
        case userConstants.SIGNUP_FAILURE:
            state={
                ...state,
                loading:false,
                error: action.payload.error
            }
            break;
        case userConstants.USER_PROFILE_REQUEST:
            state ={
                ...state ,
                loading:true 
            }
            break;
        case userConstants.USER_PROFILE_SUCCESS:
            state ={
                ...state,
                loading:false,
                userprofile: action.payload.user,
                userPost: action.payload.post,
            }
            break;
        case userConstants.USER_PROFILE_FAILURE:
            state={
                ...state,
                loading:false,
                error: action.payload.error
            }
            break;
            case userConstants.FOLLOW_USER_REQUEST:
                state ={
                    ...state,
                    following:true,
                }
                break;
            case userConstants.FOLLOW_USER_SUCCESS:
                state ={
                    ...state,
                    following:false,
                }
                break;
            case userConstants.FOLLOW_USER_FAILURE:
                state={
                    ...state,
                    error: action.payload.error
                }
                break;
            case userConstants.UNFOLLOW_USER_REQUEST:
                state ={
                    ...state,
                    unfollowing:true,
                }
                break;
            case userConstants.UNFOLLOW_USER_SUCCESS:
                state ={
                ...state,
                unfollowing:false
            }
            break;
            case userConstants.UNFOLLOW_USER_FAILURE:
                state={
                    ...state,
                    error: action.payload.error
                }
                break;
            case userConstants.GET_SUGGESTED_USER_REQUEST:
                state ={
                    ...state,
                }
                break;
            case userConstants.GET_SUGGESTED_USER_SUCCESS:
                state={
                    ...state,
                    suggestedUser: action.payload.result
                }
                break;
            case userConstants.USER_CHATS_REQUEST:
                state ={
                    ...state,
                }
                break;
            case userConstants.USER_CHATS_SUCCESS:
                state ={
                ...state,
                userChats:action.payload
            }
            break;
            case userConstants.USER_CHATS_FAILURE:
                state={
                    ...state,
                    error: action.payload.error
                }
                break;
            case userConstants.GET_FOLLOWERS_DETAILS:
                state = {
                    ...state,
                    followers: action.payload.followers,
                };
                break;
            case userConstants.GET_FOLLOWINGS_DETAILS:
            state = {
                ...state,
                followings: action.payload.followings,
            };
            break;
        }
    return state;
}

