import { authConstants , userConstants} from "../actions/constants";

const initState = {
  token: null,
  user: {
    name:"",
    email: "",
    profilePicture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  resetLoading: false,
  error:null,
  message:''
}; 

export default (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true, 
        authenticating: false,
      };
      break;
    case authConstants.LOGIN_FAILURE:{
      state = {
        ...state,
        authenticating: false,
        error: action.payload.error,
      }
      break;
    }
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = null;
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading:false
      };
      break;
    case authConstants.UPDATE_FOLLOWINGS:
      state = {
        ...state,
        user: action.payload.user,
      };
      break;
    case userConstants.UPDATE_USER_DETAILS:
    state = {
      ...state,
      user: action.payload.user,
    };
    break;
    case authConstants.RESET_PASSWORD_REQUEST:
      state = {
        ...state,
      };
      break;
    case authConstants.RESET_PASSWORD_SUCCESS:
      state = {
        ...state,
        message: action.payload.message,
        resetLoading: true,
      };
      break;
    case authConstants.RESET_PASSWORD_FAILURE:{
      state = {
        ...state,
        error: action.payload.error,
      }
      break;
    }
    case authConstants.NEW_PASSWORD_REQUEST:
      state = {
        ...state,
      };
      break;
    case authConstants.NEW_PASSWORD_SUCCESS:
      state = {
        ...state,
        message: action.payload.message,
      };
      break;
    case authConstants.NEW_PASSWORD_FAILURE:{
      state = {
        ...state,
        error: action.payload.error,
      }
      break;
    }
  }
  return state;
};
