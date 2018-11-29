import React from 'react';
//import {NavLink} from 'react-router-dom';
class HeaderTop extends React.Component{
    render(){
        return(
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <a className="logo" href="index.html">
                                <img src={require('../../../assets/img/logo-invert.png')} alt="Alternative text" title="Image Title" />
                            </a>
                        </div>
                        <div className="col-md-3 col-md-offset-2">
                            <form className="main-header-search">
                                <div className="form-group form-group-icon-left">
                                    <i className="fa fa-search input-icon"></i>
                                    <input type="text" className="form-control"/>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <div className="top-user-area clearfix">
                                <ul className="top-user-area-list list list-horizontal list-border">
                                    <li className="top-user-area-avatar">
                                        <a href="user-profile.html">
                                            <img className="origin round" src={require('../../../assets/img/amaze_40x40.jpg')} alt="Alternative text" title="AMaze" />Hi, John</a>
                                    </li>
                                    <li><a href="">Sign Out</a>
                                    </li>
                                    <li className="nav-drop"><a href="">USD $<i className="fa fa-angle-down"></i><i className="fa fa-angle-up"></i></a>
                                        <ul className="list nav-drop-menu">
                                            <li><a href="">EUR<span className="right">€</span></a>
                                            </li>
                                            <li><a href="">GBP<span className="right">£</span></a>
                                            </li>
                                            <li><a href="">JPY<span className="right">円</span></a>
                                            </li>
                                            <li><a href="">CAD<span className="right">$</span></a>
                                            </li>
                                            <li><a href="">AUD<span className="right">A$</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="top-user-area-lang nav-drop">
                                        <a href="">
                                            <img src={require('../../../assets/img/flags/32/uk.png')} alt="Alternative text" title="Image Title" />ENG<i className="fa fa-angle-down"></i><i className="fa fa-angle-up"></i>
                                        </a>
                                        <ul className="list nav-drop-menu">
                                            <li>
                                                <a title="German" href="">
                                                    <img src={require('../../../assets/img/flags/32/de.png')} alt="Alternative text" title="Image Title" /><span className="right">GER</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a title="Japanise" href="">
                                                    <img src={require('../../../assets/img/flags/32/jp.png')} alt="Alternative text" title="Image Title" /><span className="right">JAP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a title="Italian" href="">
                                                    <img src={require('../../../assets/img/flags/32/it.png')} alt="Alternative text" title="Image Title" /><span className="right">ITA</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a title="French" href="">
                                                    <img src={require('../../../assets/img/flags/32/fr.png')} alt=" Alternative text" title="Image Title" /><span className="right">FRE</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a title="Russian" href="">
                                                    <img src={require('../../../assets/img/flags/32/ru.png')} alt="Alternative text" title="Image Title" /><span className="right">RUS</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a title="Korean" href="">
                                                    <img src={require('../../../assets/img/flags/32/kr.png')} alt="Alternative text" title="Image Title" /><span className="right">KOR</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HeaderTop;