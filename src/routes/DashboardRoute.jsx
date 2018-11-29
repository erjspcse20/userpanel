import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import  Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Home from "../containers/home/HomePage";

import '../../assets/css/bootstrap.less';
import '../../assets/css/font-awesome.less';
import '../../assets/css/icomoon.less';
import '../../assets/css/styles.less';
import '../../assets/css/mystyles.less';
import '../../assets/css/switcher.less';
import '../../assets/css/schemes/bright-turquoise.less';
import '../../assets/css/schemes/turkish-rose.less';
import '../../assets/css/schemes/salem.less';
import '../../assets/css/schemes/hippie-blue.less';
import '../../assets/css/schemes/mandy.less';
import '../../assets/css/schemes/green-smoke.less';
import '../../assets/css/schemes/horizon.less';
import '../../assets/css/schemes/cerise.less';
import '../../assets/css/schemes/brick-red.less';
import '../../assets/css/schemes/de-york.less';
import '../../assets/css/schemes/shamrock.less';
import '../../assets/css/schemes/studio.less';
import '../../assets/css/schemes/leather.less';
import '../../assets/css/schemes/denim.less';
import '../../assets/css/schemes/scarlet.less';

class HomeRoute extends React.Component{
  constructor(props){
      super();
      //this.scrollToTop = this.scrollToTop.bind(this);
  }

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    scrollToWithContainer() {

        let goToContainer = new Promise((resolve, reject) => {

            Events.scrollEvent.register('end', () => {
                resolve();
                Events.scrollEvent.remove('end');
            });

            scroller.scrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });

        });

        goToContainer.then(() =>
            scroller.scrollTo('scroll-container-second-element', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'scroll-container'
            }));
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

  render(){
    return(
        <div className="global-wrap">
            <header id="main-header">
                <Header/>
            </header>
            <div className="row">
                <Switch>
                    <Route path="home" key="1" component={Home} />
                </Switch>
            </div>
            <footer id="main-footer">
                <Footer />
            </footer>
        </div>
    );
  }
}
HomeRoute.defaultProps = {
  isMenuListLoading: false,
};

function mapStateToProps(state) {
  const {} = state;
  return {};
}

//export default compose(withStyles(styles, { withTheme: true }), connect(mapStateToProps, {logoutUser}))(DashboardRoute);
export default connect(mapStateToProps)(HomeRoute);

