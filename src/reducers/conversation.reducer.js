import { messageConstants} from "../actions/constants";

const initState = {
    specificChat:{},
    conversationId:"",
    userDetails:{},
}

export default (state = initState, action) => {
    console.log(action);

  switch (action.type) {
    case messageConstants.GET_ALL_CONVERSATIONS_REQUEST:
        state = {
          ...state,
        };
        break;
      case messageConstants.GET_ALL_CONVERSATIONS_SUCCESS:
        state = {
          ...state,
          conversation: action.payload,
        };
        break;
      case messageConstants.GET_ALL_CONVERSATIONS_FAILURE:
        state = {
          ...state,
          error: action.payload.error,
        }
        break;
    case messageConstants.GET_ALL_CONVERSATIONS_ID_REQUEST:
        state = {
          ...state,
        };
        break;
      case messageConstants.GET_ALL_CONVERSATIONS_ID_SUCCESS:
        state = {
          ...state,
          conversationId: action.payload,
        };
        break;
      case messageConstants.GET_ALL_CONVERSATIONS_ID_FAILURE:
        state = {
          ...state,
          error: action.payload.error,
        }
        break;
    case messageConstants.GET_SPECIFIC_CHATS_REQUEST:
        state = {
          ...state,
        };
        break;
      case messageConstants.GET_SPECIFIC_CHATS_SUCCESS:
        state = {
          ...state,
          specificChat: action.payload,
        };
        break;
      case messageConstants.GET_SPECIFIC_CHATS_FAILURE:
        state = {
          ...state,
          error: action.payload.error,
        }
        break;
    case messageConstants.SEND_MESSAGE_REQUEST:
        state = {
          ...state,
        };
        break;
      case messageConstants.SEND_MESSAGE_SUCCESS:
        state = {
          ...state,
          specificChat: [...state.specificChat ,action.payload],
        };
        break;
      case messageConstants.SEND_MESSAGE_FAILURE:
        state = {
          ...state,
          error: action.payload.error,
        }
        break;
    case messageConstants.GET_USER_DETAILS_REQUEST:
        state = {
          ...state,
        };
        break;
      case messageConstants.GET_USER_DETAILS_SUCCESS:
        state = {
          ...state,
          userDetails: action.payload,
        };
        break;
      case messageConstants.GET_USER_DETAILS_FAILURE:
        state = {
          ...state,
          error: action.payload.error,
        }
        break;
  }
  return state;
};
