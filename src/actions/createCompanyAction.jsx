import {loginFailed, loginInit, loginSuccessful} from "./LoginProcessAction";
import Request from "../utils/Request";
import {company, user} from "../constants/Urls";
import {handleError} from "./appAction/action";

export function createCompany(companyData,successFunctrion,errorFunction){
    return (dispatch) => {
        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(company.CREATE_DISTRIBUTOR,companyData);
    };
}
export function editCompany(companyData,successFunctrion,errorFunction){
    return (dispatch) => {
        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(company.UPDATE_DISTRIBUTOR,companyData);
    };
}
export function getCompany(companyId, successFunctionFetchCompany) {
    return (dispatch) => {
        const succfn = (data, headers) => {
            successFunctionFetchCompany(data,companyId);
        };
        const errorFn = (data, headers, status) => {
            handleError(data,status,dispatch);
        };
        const api = new Request(dispatch, succfn, errorFn, false);
        return api.get(company.GET_COMPANY+companyId);
    };
}

