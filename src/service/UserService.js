import {USER_TYPE} from "../constants/Constants";
import CommonUtils from "../utils/CommonUtils";

class UserTypeAction {

    constructor() {
        if (this.constructor === UserTypeAction) {
            throw new Error("Abstract class can not be initiated!");
        }
    }

    getUserType() {
        throw new Error("Abstract method can not be called!");

    }

    getUpdatedUserList(state, userList) {
        throw new Error("Abstract method can not be called!");

    }

    getUserList(props){
        throw new Error("Abstract method can not be called!");
    }
}


class AgentUserTypeAction extends UserTypeAction {
    constructor() {
        super();
    }

    getUserType() {
        return USER_TYPE.AGENT;

    }

    getUpdatedUserList(state, userList) {

        let newState = {...state};
        newState.userAgentList = [...userList];
        return newState;
    }
    getUserList(props){
        return props.userAgentList;
    }


}

class DistributorUserTypeAction extends UserTypeAction {
    constructor() {
        super();
    }

    getUserType() {
        return USER_TYPE.DISTRIBUTOR;

    }

    getUpdatedUserList(state, userList) {

        let newState = {...state};
        newState.userDistributorList = [...userList];
        return newState;
    }

    getUserList(props){
        return props.userDistributorList;
    }
}
class ExecutiveUserTypeAction extends UserTypeAction {
    constructor() {
        super();
    }

    getUserType() {
        return USER_TYPE.EXECUTIVE;

    }

    getUpdatedUserList(state, userList) {

        let newState = {...state};
        newState.userExecutiveList = [...userList];
        return newState;
    }

    getUserList(props){
        return props.userExecutiveList;
    }

}

class UserService {

    static SINGLETON = UserService.instance();

    static instance() {
        if (CommonUtils.isEmpty(UserService.SINGLETON)) {
            UserService.SINGLETON = new UserService();
        }
        return UserService.SINGLETON;

    }

    validateForm = (state) => {


        var error = {};
        if (CommonUtils.isEmpty(state.userName)) {

            error.userName = "Is Required!";
        }

        if (CommonUtils.isEmpty(state.password)) {
            error.password = "Is Required!";
        }

        if (CommonUtils.isEmpty(state.emailId)) {
            error.emailId = "Is Required!";
        }
        if (CommonUtils.isEmpty(state.phone)) {
            error.phone = "Is Required!";
        }
        if (CommonUtils.isEmpty(state.country)) {
            error.country = "Is Required!";
        }

        if (CommonUtils.isEmpty(state.firstName)) {
            error.firstName = "Is Required!";
        }
        if (CommonUtils.isEmpty(state.lastName)) {
            error.lastName = "Is Required!";
        }

        if (CommonUtils.isEmpty(state.confirmPassword)) {
            error.confirmPassword = "Is Required!";
        }else if(CommonUtils.isEmpty(error.password) && state.password!=state.confirmPassword){
            error.confirmPassword = "Password does not match !";

        }

        return error;

    }

    initState(){
        return {
            userName: '',
            name: '',
            password: '',
            confirmPassword: '',
            country: "INDIA",
            active: true,
            userType: USER_TYPE.EXECUTIVE,
            error: {},
            message: null,
            phone:"",
            emailId:"",
            lastName:"",
            firstName:""
        };
    }


    constructor() {
        this.userTypeAction = [new AgentUserTypeAction(), new DistributorUserTypeAction(), new ExecutiveUserTypeAction()];
        this.userTypeActionMap = {};
        this.userTypeAction.map(userTypeAction => {
            this.userTypeActionMap[userTypeAction.getUserType()] = userTypeAction;
            return userTypeAction;
        });
        if (!CommonUtils.isEmpty(UserService.SINGLETON)) {
            throw new Error("Can not initiate multiple objects");
        }
    }


    getUpdatedUserList(state, action) {
        let newState = this.userTypeActionMap[action.userType].getUpdatedUserList(state, action.userMap);
        return this.getUserList(newState);
    }

    getUserListByType(props,userType){
        return [...this.userTypeActionMap[userType].getUserList(props)];
    }


    getUserList(state) {
        let newState = {...state};
        let usersList = [];

        for (let i in newState.userAgentList) {
            usersList.push(newState.userAgentList[i]);
        }

        for (let i in newState.userDistributorList) {
            usersList.push(newState.userDistributorList[i]);
        }
        for (let i in newState.userExecutiveList) {
            usersList.push(newState.userExecutiveList[i]);
        }
        newState.usersList = usersList;
        return newState;
    }
}


export default UserService;

