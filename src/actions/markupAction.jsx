import {loginFailed, loginInit, loginSuccessful} from "./LoginProcessAction";
import Request from "../utils/Request";
import {pccmarkup} from "../constants/Urls";
import {airlinesmarkup} from "../constants/Urls";

export function pccMarkup(pccmarkups,successFunctrion,errorFunction){
    /* var start = urls.corporateAggregation.BASE_URL + urls.corporateAggregation.CORPORATE_DETAILS.BASE +
         urls.corporateAggregation.CORPORATE_DETAILS.DELETE_CORPORATE;
     var url = start + corporateId;
     return dispatch => {
         return post(url,null,getHeader(start));
     }*/

    return (dispatch) => {
        // dispatch(loginInit());
        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(pccmarkup.PCC_CREATE_MARKUP,pccmarkups);
    };
}

export function airlinesMarkup(airlinesmarkups,successFunctrion,errorFunction){
    /* var start = urls.corporateAggregation.BASE_URL + urls.corporateAggregation.CORPORATE_DETAILS.BASE +
         urls.corporateAggregation.CORPORATE_DETAILS.DELETE_CORPORATE;
     var url = start + corporateId;
     return dispatch => {
         return post(url,null,getHeader(start));
     }*/

    return (dispatch) => {
        // dispatch(loginInit());

        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(airlinesmarkup.AIRLINES_CREATE_MARKUP,airlinesmarkups);
    };
}