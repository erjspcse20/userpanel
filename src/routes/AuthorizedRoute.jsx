import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import AuthenticationHelper from './../helpers/AuthenticationHelper';
import {fetchCountries} from '../actions/appAction/action';
import CommonUtils from '../utils/CommonUtils';

class AuthorizedRoute extends React.Component {

    componentWillMount() {
        /*const {dispatch, countriesMap} = this.props;
        if (CommonUtils.isEmpty(countriesMap)) {
            dispatch(fetchCountries());
        }*/
    }

    render() {
        if (!AuthenticationHelper.isAuthenticated() || !this.props.isAuthenticated) {
            return (<Redirect to="/login"/>);
        }

        return (<Route {...this.props} component={ this.props.component}/>);
    }
}

AuthorizedRoute.defaultProps = {
    isAuthenticated: true,
    component() {
    },
};

function mapStateToProps(state) {
    const {loginUser} = state;
    const {appReducer} = state;
    return {
        isAuthenticated: loginUser.isAuthenticated

    };
}

export default connect(mapStateToProps)(AuthorizedRoute);
