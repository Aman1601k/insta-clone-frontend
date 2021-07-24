import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import postReducer from './post.reducer';
import conversationReducer from './conversation.reducer';

import {combineReducers} from 'redux';


const rootReducer = combineReducers(
    {
        auth: authReducer,
        user: userReducer,
        post: postReducer,
        convo: conversationReducer,
    }    
)

export default rootReducer;