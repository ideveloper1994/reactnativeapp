import {SET_USER_LIST} from "./types";

export const getUser = () => {
    return (dispatch, getState) => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: SET_USER_LIST,
                    payload: responseJson
                });
                return Promise.resolve(true);
            })
            .catch((error) => {
                alert(error);
            });
    };
};