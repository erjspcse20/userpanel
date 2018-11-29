import Request from "../../utils/Request";
import {SET_COUNTRIES, SET_COMPANY, SET_USER, SET_ROLE, SET_AIRLINES} from "./types";
import {logoutUser} from '../LoginProcessAction';
import {constants, company, user, pcc, airlines} from "../../constants/Urls";


export function setcountries(data) {
    return {
        type: SET_COUNTRIES,
        countriesMap: data.data
    }
}


export function setairlines(data) {
    return {
        type: SET_AIRLINES,
        airlinesList: data.data,
    }
}

export function fetchCountries() {
    return (dispatch) => {
        const successFn = (data, headers) => {
            dispatch(setcountries(data));
        };
        const errorFn = (data, headers, status) => {
            handleError(data,status,dispatch);
        };
        const api = new Request(dispatch, successFn, errorFn, false);
        return api.get(constants.COUNTRIES);
    };
}





export function fetchPcc(successFunctionFetchPcc) {
    return (dispatch) => {
        const successFn = (data, headers) => {
            successFunctionFetchPcc(data);
        };
        const errorFn = (data, headers, status) => {
            //handleError(data,status,dispatch);
        };
        const api = new Request(dispatch, successFn, errorFn, false);
        return api.get(pcc.GET_ALL_PCC);
    };
}

export function fetchAirlines(successFunctionFetchAirlines) {
    return (dispatch) => {
        const successFn = (data, headers) => {
            successFunctionFetchAirlines(data);
        };
        const errorFn = (data, headers, status) => {
            handleError(data,status,dispatch);
        };
        const api = new Request(dispatch, successFn, errorFn, false);
        return api.get(airlines.GET_ALL_AIRLINES);
    };
}


export function handleError(error, status, dispatch) {
    // dispatch(removeGeneralMessage());
    var msg = {};
    msg.success = false;
    console.log(error);

    switch (status) {
        case 401:
           logoutUser()(dispatch);
            return null;
        case 403:
        //timeout(removeGeneralMessage, 3000, dispatch);
        case 400:
        case 503:
        case 500:
        default:
            return error;

    }

}

export function handleAuthenticationAndAuthorization(status) {
    switch (status) {
        case 401:

        case 403:
        //show message
        //return handleGeneralMessage(false, "Oops! You are not authorized for this actions. ");

    }
}


