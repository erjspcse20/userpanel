import {loginFailed, loginInit, loginSuccessful} from "./LoginProcessAction";
import Request from "../utils/Request";
import {usermapping,rollmapping} from "../constants/Urls";
import {handleError} from './appAction/action';
export function mapUser(maps, successFunctrion, errorFunction) {
    return (dispatch) => {
        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(usermapping.USER_MAP, maps);
    };
}

export function fetchRollspecific(companyId,successFunctionFetchRoles) {
    return (dispatch) => {
        const succfn = (data, headers) => {
            successFunctionFetchRoles(data,companyId);
        };
        const errorFn = (data, headers, status) => {
            handleError(data,status,dispatch);
        };
        const api = new Request(dispatch, succfn, errorFn, false);
        return api.get(rollmapping.GET_ROLL_SPECIFIC+companyId);
    };
}