import {SET_POST} from "./types";

export const getPost = () => {
    return (dispatch, getState) => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: SET_POST,
                    payload: responseJson
                });
                return Promise.resolve(true);
            })
            .catch((error) => {
                alert(error);
            });
    };
};