import {loginFailed, loginInit, loginSuccessful} from "./LoginProcessAction";
import Request from "../utils/Request";
import {wallet} from "../constants/Urls";

export function addMoneyWallet(wallets,successFunctrion,errorFunction){

    return (dispatch) => {
        const api = new Request(dispatch, successFunctrion, errorFunction, false);
        return api.post(wallet.ADD_MONEY_WALLET,wallets);
    };
}