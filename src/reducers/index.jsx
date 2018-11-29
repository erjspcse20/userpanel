import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import LoginUser from './LoginProcessReducer';


const allReducers = combineReducers({
    routing: routerReducer,
    loginUser: LoginUser,

});

export default allReducers;
