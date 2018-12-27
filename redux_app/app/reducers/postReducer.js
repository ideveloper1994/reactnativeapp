import {SET_POST} from "../actions/types";

const INITIAL_STATE = { postList: [] };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_POST:{
            return{
                ...state,
                postList: action.payload
            }
        }
        default:
            return state;
    }
}