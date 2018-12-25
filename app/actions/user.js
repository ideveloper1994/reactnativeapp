import { USER_DETAILS } from '../actions/types';
import { makeRequest } from '../api/apiCall';
import { showAPICallError } from '../helper/appHelper';
import APIConstant from '../api/apiConstant';

export const getUsers = () => {
    return (dispatch, getState) => {
        return makeRequest(APIConstant.BASE_URL+APIConstant.USERS,'get')
            .then((response)=>{
                dispatch({
                    type: USER_DETAILS,
                    payload: response,
                });
                return Promise.resolve(true);
            })
            .catch((error)=>{
                // return Promise.reject(error);
                return dispatch(apiErrorHandler(error));
            })
    };
};


//Global error handling
export const apiErrorHandler = (error) => {
    return (dispatch, getState) => {
        console.log("-----------Error-----------");
        console.log(error);
        if(__DEV__){
            alert(JSON.stringify(error))
        }
        if(error && typeof error === 'object' && error.response){
            if(error.response && error.response.status){
                let errorCode = error.response.status;
                switch (errorCode){
                    case 401:
                        //Authenticaltion error
                        //redirect to login
                        return;
                    case 403:
                        break;
                    case 500:
                    case 501:
                    case 502:
                    case 503:
                    case 504:
                    case 505:
                    case 506:
                    case 507:
                    case 508:
                    case 509:
                    case 510:
                    case 520:
                    case 521:
                    case 522:
                    case 523:
                    case 524:
                    case 525:
                    case 526:
                    case 527:
                    case 530:
                        showAPICallError({
                            title: "Uh oh",
                            message: "We’re fixing an issue with our server. Please try again in a little while." + "(Error " + errorCode + ")",
                            leftBtn: "OK"});
//                        Alert.alert("Hmm something has gone wrong on our end. We should have this fixed soon.");
                        break;
                    default:
                        showAPICallError({
                            title: "Uh oh",
                            message: "Hmm something has gone wrong on our end. We should have this fixed soon.",
                            leftBtn: "OK"});
                        break;
                }
            }
        }else{
            //Check for internet connection
        }
        return Promise.reject(error);
    };
};