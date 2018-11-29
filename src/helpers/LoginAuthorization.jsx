import React from 'react';

import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

class LoginAuthorization extends React.Component {

    componentWillMount() {
        if (!this.props.isAuthenticated) {

            this.context.router.push('/login');
        }
    }

    componentWillUpdate(nextProps) {
        if (!nextProps.isAuthenticated) {
            this.context.router.push('/login');
        }
    }

    render() {
        if (!this.props.isAuthenticated) {

            return (<Redirect to="/login"/>);
        }

        return  (

            React.cloneElement(this.props.children, { dispatch: this.props.dispatch })
        );
    }
}





/*LoginAuthorization.contextTypes = {
    router: React.PropTypes.object.isRequired,
};*/

function mapStateToProps(state) {
    const { isAuthenticated } = state.loginUser;

    return {
        isAuthenticated: isAuthenticated,
    };
}

export default connect(mapStateToProps)(LoginAuthorization);
