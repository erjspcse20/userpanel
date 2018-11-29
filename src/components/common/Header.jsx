import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import HeaderDown from './HeaderDown';
//import Footer from './Footer';
//import { fetchUserProfileIfNeeded, logoutUser } from './../../actions/LoginProcessAction';

//import Logout from './../logout/Logout';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggingOut: false,
        };

        this.onLogoutClick = this.onLogoutClick.bind(this);
        this.onLogoutConfirm = this.onLogoutConfirm.bind(this);
        this.onLogoutCancel = this.onLogoutCancel.bind(this);
    }

    // componentDidMount() {
    //   this.props.fetchUserProfileIfNeeded();
    // }

    onLogoutClick() {
        this.setState({ isLoggingOut: true });
    }

    onLogoutConfirm() {
        this.props.logoutUser();
    }

    onLogoutCancel() {
        this.setState({ isLoggingOut: false });
    }

    render() {
        return (

            <div>
                <HeaderTop />
                <HeaderDown />
            </div>

        );
    }
}

// Specifies the default values for props:
Header.defaultProps = {
    fetchUserProfileIfNeeded() {
    },
    logoutUser() {
    },
    isAuthenticated: true,
};


export default connect(null)(Header);
