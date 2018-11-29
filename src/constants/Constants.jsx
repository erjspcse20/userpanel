import keyMirror from 'keymirror';


export const TOKEN="flightskipperadmin";

export const MARKUP_TYPE={
    Amount:"false",
    Percentage:"true"

}

export const COMPANY_TYPE={
    DISTRIBUTOR:"DISTRIBUTOR",
    AGENT:"AGENT"
}

export const STATUS={
    true:"Active",
    false:"Inactive"
}

export const USER_TYPE={
    EXECUTIVE:"EXECUTIVE",
    AGENT:"AGENT",
    DISTRIBUTOR:"DISTRIBUTOR"



}

export const TOKEN_HEADER="X-Auth-Token";
export const actions = keyMirror({
  LOGIN_RESET_STORE: null,
  LOGIN_RESET_STORAGE: null,
  LOGOUT_REQUEST: null,
  LOGIN_REQUEST_INIT: null,
  LOGIN_REQUEST_SUCCESS: null,
  LOGIN_REQUEST_FAILED: null,

  USER_PROFILE_FETCH_REQUEST_INIT: null,
  USER_PROFILE_FETCH_REQUEST_SUCCESS: null,
  USER_PROFILE_FETCH_REQUEST_FAILED: null,



});

export const others = keyMirror({
});

export const assetUrl = {
  IMAGE_BASE_URL: 'https://pimg.fabhotels.com/medium/',
};



export const pageTitle = {
  DASHBOARD: '',
  CUSTOMER_RATINGS: 'Customer Ratings',
  UNDER_MAINTENANCE_ROOMS: 'Under Maintenance Rooms',
  OCCUPANCY_REPORT: 'Occupancy',
  REVENUE_REPORT: 'ADR',
  PAY_AT_HOTEL: 'Pay @ Hotel',
  INVOICES_PAYMENTS: 'Payments',
  OPEN_ISSUES: 'Open Issues',
  DEBIT_NOTES: 'Debit Notes',
  BOOKINGS: 'Bookings',
  BOOKINGS_LIST: 'Bookings List',
  INVOICES: 'Invoices',
  HELP: 'Help',
};

export const httpStatusCodes = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};
export const timers = {
  USERDATA_TIME: (1000 * 60 * 24),

};
export const maxUploadSize = 5;
