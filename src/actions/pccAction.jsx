import {loginFailed, loginInit, loginSuccessful} from "./LoginProcessAction";
import Request from "../utils/Request";
import {company, pcc} from "../constants/Urls";
import {handleError} from "./appAction/action";

export function createPcc(pccs,successFunctrion,errorFunction){
    return (dispatch) => {

        // dispatch(loginInit());

        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(pcc.PCC_CREATE,pccs);
    };
}
export function editPcc(pccs,successFunctrion,errorFunction){
    return (dispatch) => {

        // dispatch(loginInit());

        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(pcc.PCC_UPDATE,pccs);
    };
}
export function pccMarkup(pccs,successFunctrion,errorFunction){
    return (dispatch) => {
        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(pcc.PCC_CREATE_MARKUP,pccs);
    };
}
export function editPccMarkup(pccs,successFunctrion,errorFunction){
    return (dispatch) => {
        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(pcc.PCC_UPDATE_MARKUP,pccs);
    };
}
export function getPcc(pccId, successFunctionFetchPcc) {
    return (dispatch) => {
        const succfn = (data, headers) => {

            successFunctionFetchPcc(data,pccId);
        };
        const errorFn = (data, headers, status) => {
            handleError(data,status,dispatch);
        };
        const api = new Request(dispatch, succfn, errorFn, false);
        return api.get(pcc.GET_PCC+pccId);
    };
}