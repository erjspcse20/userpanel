import {loginFailed, loginInit, loginSuccessful} from "./LoginProcessAction";
import Request from "../utils/Request";
import {airlines, user} from "../constants/Urls";
import {handleError} from "./appAction/action";

export function createAirlines(airliness,successFunctrion,errorFunction){
    return (dispatch) => {


        // dispatch(loginInit());

        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(airlines.AIRLINES_CREATE,airliness);
    };
}
export function editAirlines(airliness,successFunctrion,errorFunction){
    return (dispatch) => {


        // dispatch(loginInit());

        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(airlines.AIRLINES_UPDATE,airliness);
    };
}
export function airlinesMarkup(airliness,successFunctrion,errorFunction){
    return (dispatch) => {
        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(airlines.AIRLINES_CREATE_MARKUP,airliness);
    };
}
export function editAirlinesMarkup(airliness,successFunctrion,errorFunction){
    return (dispatch) => {
        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(airlines.AIRLINES_Update_MARKUP,airliness);
    };
}

export function getAirlines(airlinesId, fetchAirlines) {
    return (dispatch) => {
        const succfn = (data, headers) => {
            fetchAirlines(data,airlinesId);
        };
        const errorFn = (data, headers, status) => {
            handleError(data,status,dispatch);
        };
        const api = new Request(dispatch, succfn, errorFn, false);
        return api.get(user.GET_USER+airlinesId);
    };
}