import {COMPANY_TYPE} from "../constants/Constants";
import CommonUtils from "../utils/CommonUtils";
import UserService from "./UserService";
class CompanyTypeAction {

    constructor() {
        if (this.constructor === CompanyTypeAction) {
            throw new Error("Abstract class can not be initiated!");
        }
    }

    getCompanyType() {
        throw new Error("Abstract method can not be called!");

    }

    getUpdatedCompanyList(state, companyList) {
        throw new Error("Abstract method can not be called!");

    }

    getCompanyList(props){
        throw new Error("Abstract method can not be called!");
    }
}


class AgentCompanyTypeAction extends CompanyTypeAction {
    constructor(){
        super();
    }
    getCompanyType() {
        return COMPANY_TYPE.AGENT;

    }

    getUpdatedCompanyList(state, companyList) {

        let newState = {...state};
        newState.companyAgentList = [...companyList];
        newState.companyAgentList[-1]={"uuid":"-1","companyName":"None"};
        return newState;
    }

    getCompanyList(props){
        return props.companyAgentList;
    }


}

class DistributorCompanyTypeAction extends CompanyTypeAction {
    constructor(){
        super();
    }
    getCompanyType() {
        return COMPANY_TYPE.DISTRIBUTOR;

    }

    getUpdatedCompanyList(state, companyList) {

        let newState = {...state};
        newState.companyDistributorList = [...companyList];
        newState.companyDistributorList[-1]={"uuid":"-1","companyName":"None"};

        return newState;
    }
    getCompanyList(props){
        return props.companyDistributorList;
    }

}

export default class CompanyService {


    static SINGLETON = CompanyService.instance();

    static instance(){
        if(CommonUtils.isEmpty(CompanyService.SINGLETON)){
            CompanyService.SINGLETON = new CompanyService();
        }
        return CompanyService.SINGLETON;

    }

    constructor() {
        this.companyTypeAction = [new AgentCompanyTypeAction(), new DistributorCompanyTypeAction()];
        this.companyTypeActionMap = {};
        this.companyTypeAction.map(compTypeAction => {
            this.companyTypeActionMap[compTypeAction.getCompanyType()] = compTypeAction;
            return compTypeAction;
        });
        if(!CommonUtils.isEmpty(CompanyService.SINGLETON)){
            throw new Error("Can not initiate multiple objects");
        }
    }




    getUpdatedCompanyList(state, action) {
        let newState = this.companyTypeActionMap[action.companyType].getUpdatedCompanyList(state, action.companyList);
        return this.getCompanyList(newState);
    }

    getCompanyListByType(props,companyType){
        return [...this.companyTypeActionMap[companyType].getCompanyList(props)];
    }


    getCompanyList(state) {
        let newState = {...state};
        let companyList = [];

        for (let i in newState.companyAgentList) {
            companyList.push(newState.companyAgentList[i]);
        }

        for (let i in newState.companyDistributorList) {
            companyList.push(newState.companyDistributorList[i]);
        }
        newState.companyList=companyList;
        return newState;
    }
}




