import Request from "../../utils/Request";
import {rollmapping, user} from "../../constants/Urls";
import {USER_TYPE} from "../../constants/Constants";
import {SET_USER} from "./types";
import {handleError} from "../appAction/action";


export function setalluser(data,userType) {
    return {
        type: SET_USER,
        userMap: data.data,
        userType:userType
    }
}

export function fetchUser(userType) {
    return (dispatch) => {
        const successFn = (data, headers) => {
            dispatch(setalluser(data,userType));
        };
        const errorFn = (data, headers, status) => {
            //handleError(data,status,dispatch);
        };
        const api = new Request(dispatch, successFn, errorFn, false);
        return api.get(user.GET_ALL_USER+userType);
    };
}
export function createUser(users, successFunctrion, errorFunction) {
    return (dispatch) => {


        var url = null;
        switch (users.userType) {
            case USER_TYPE.EXECUTIVE:

                url = user.USER_CREATE_EXECUTIVE;
                break;
            case USER_TYPE.AGENT:
                url = user.USER_CREATE_AGENT;
                break;
            case USER_TYPE.DISTRIBUTOR:
                url = user.USER_CREATE_DISTRIBUTOR;
                break;

        }

        const api = new Request(dispatch, successFunctrion, errorFunction, false);


        return api.post(url, users);
    };
}
export function editUser(users, successFunctrion, errorFunction) {
    return (dispatch) => {
        var url = null;
        url = user.USER_UPDATE;


        const api = new Request(dispatch, successFunctrion, errorFunction, false);


        return api.post(url, users);
    };
}
export function getUser(userId, successFunctionFetchUser) {
    return (dispatch) => {
        const succfn = (data, headers) => {
            successFunctionFetchUser(data,userId);
        };
        const errorFn = (data, headers, status) => {
            handleError(data,status,dispatch);
        };
        const api = new Request(dispatch, succfn, errorFn, false);
        return api.get(user.GET_USER+userId);
    };
}
