export const BASE_URL = "/flightskipper/api";

export const login =
    {
        LOGIN_REQUEST: '/authenticate',
        LOGOUT_REQUEST: '/logout',
        FETCH_USER_PROFILE: '/admin/user/getUserProfile'
    }

export const constants =
    {
        COUNTRIES: '/constants/country'

    }
    
export const user = {
    USER_CREATE_EXECUTIVE: "/admin/user/create/executive",
    USER_CREATE_AGENT: "/admin/user/create/agent",
    USER_CREATE_DISTRIBUTOR: "/admin/user/create/distributor",
    USER_UPDATE: "/admin/user/update",
    GET_USER: "/admin/user/view/",
    GET_ALL_USER: "/admin/user/view/all?userType="
}

export const company = {
    CREATE_DISTRIBUTOR: "/admin/company/create/distributor",
    UPDATE_DISTRIBUTOR: "/admin/company/update/distributor",
    GET_COMPANY: "/admin/company/find/",
    COMPANY: '/admin/company/find/all/'
}

export const usermapping = {
    USER_MAP: "/admin/user/company/mapping/create"
}

export const rollmapping = {
    Roll_MAP:
        "/admin/role/executive/assign",
    GET_ROLL_SPECIFIC: 'admin/user/company/mapping/roles?companyId='
}

export const pcc = {
    PCC_CREATE: "/admin/pcc/create",
    PCC_UPDATE: "/admin/pcc/update",
    GET_PCC: "/admin/pcc/list/",
    PCC_CREATE_MARKUP: "/admin/markup/create/pccmarkup",
    PCC_UPDATE_MARKUP: "/admin/markup/create/pccmarkup",
    GET_ALL_PCC: "/admin/pcc/list"
}

export const airlines = {
    AIRLINES_CREATE: "/admin/airlines/create",
    AIRLINES_UPDATE: "/admin/airlines/update",
    AIRLINES_CREATE_MARKUP: "/admin/markup/create/airlines",
    GET_ALL_AIRLINES: "/admin/airlines/list"
}

export const wallet = {
    ADD_MONEY_WALLET:
        "/admin/wallets/add/wallet"
}

