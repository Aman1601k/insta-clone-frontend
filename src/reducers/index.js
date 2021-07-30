import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import postReducer from './post.reducer';
import conversationReducer from './conversation.reducer';

import {combineReducers} from 'redux';

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_SUCCESS') {
      return appReducer(undefined, action);
    }
    return appReducer(state, action);
  };

const appReducer = combineReducers(
    {
        auth: authReducer,
        user: userReducer,
        post: postReducer,
        convo: conversationReducer,
    }    
)

export default rootReducer;