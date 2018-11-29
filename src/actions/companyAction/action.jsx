import Request from "../../utils/Request";
import {company} from "../../constants/Urls";
import {SET_COMPANY} from "./types";

import {handleError} from "../appAction/action";


export function setcompany(data,companyType) {
    return {
        type: SET_COMPANY,
        companyList: data.data,
        companyType
    }
}


export function fetchCompany(companyType) {
    return (dispatch) => {
        const successFn = (data, headers) => {
            dispatch(setcompany(data,companyType));
        };

        const errorFn = (data, headers, status) => {
            handleError(data,status,dispatch);
        };
        const api = new Request(dispatch, successFn, errorFn, false);
        return api.get(company.COMPANY+companyType);
    };
}