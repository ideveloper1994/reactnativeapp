import { combineReducers } from 'redux';
import UserReducer from "./userReducer";
import PostReducer from "./postReducer";

export default appReducer = combineReducers({
    user: UserReducer,
    post: PostReducer
});


