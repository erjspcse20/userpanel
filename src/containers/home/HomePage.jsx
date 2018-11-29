import React from 'react';
import image from '../../../assets/img/hotel_the_cliff_bay_spa_suite_2048x1310.jpg';
const hotal = {
    background:{image}
}
export default class Home extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="container">
                    <div className="row row-wrap" data-gutter="60">
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header"><i className="fa fa-dollar box-icon-md round box-icon-black animate-icon-top-to-bottom"></i>
                                </header>
                                <div className="thumb-caption">
                                    <h5 className="thumb-title"><a className="text-darken" href="">Best Price Guarantee</a></h5>
                                    <p className="thumb-desc">Eu lectus non vivamus ornare lacinia elementum faucibus natoque parturient ullamcorper placerat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header"><i className="fa fa-lock box-icon-md round box-icon-black animate-icon-top-to-bottom"></i>
                                </header>
                                <div className="thumb-caption">
                                    <h5 className="thumb-title"><a className="text-darken" href="">Trust & Safety</a></h5>
                                    <p className="thumb-desc">Imperdiet nisi potenti fermentum vehicula eleifend elementum varius netus adipiscing neque quisque</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumb">
                                <header className="thumb-header"><i className="fa fa-thumbs-o-up box-icon-md round box-icon-black animate-icon-top-to-bottom"></i>
                                </header>
                                <div className="thumb-caption">
                                    <h5 className="thumb-title"><a className="text-darken" href="">Best Travel Agent</a></h5>
                                    <p className="thumb-desc">Curae urna fusce massa a lacus nisl id velit magnis venenatis consequat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gap gap-small"></div>
                </div>
                <div className="bg-holder">
                    <div className="bg-mask"></div>
                    <div className="bg-parallax" style={hotal}></div>
                    <div className="bg-content">
                        <div className="container">
                            <div className="gap gap-big text-center text-white">
                                <h2 className="text-uc mb20">Last Minute Deal</h2>
                                <ul className="icon-list list-inline-block mb0 last-minute-rating">
                                    <li><i className="fa fa-star"></i>
                                    </li>
                                    <li><i className="fa fa-star"></i>
                                    </li>
                                    <li><i className="fa fa-star"></i>
                                    </li>
                                    <li><i className="fa fa-star"></i>
                                    </li>
                                    <li><i className="fa fa-star"></i>
                                    </li>
                                </ul>
                                <h5 className="last-minute-title">The Peninsula - New York</h5>
                                <p className="last-minute-date">Fri 14 Mar - Sun 16 Mar</p>
                                <p className="mb20"><b>$120</b> / person</p><a className="btn btn-lg btn-white btn-ghost" href="">Book Now <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="gap"></div>
                    <h2 className="text-center">Top Destinations</h2>
                    <div className="gap">
                        <div className="row row-wrap">
                            <div className="col-md-3">
                                <div className="thumb">
                                    <header className="thumb-header">
                                        <a className="hover-img curved" href="">
                                            <img src={require('../../../assets/img/the_journey_home_400x300.jpg')} alt="Alternative text" title="the journey home" /><i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                                        </a>
                                    </header>
                                    <div className="thumb-caption">
                                        <h4 className="thumb-title">Africa</h4>
                                        <p className="thumb-desc">Ut blandit pharetra suspendisse montes libero eleifend bibendum</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="thumb">
                                    <header className="thumb-header">
                                        <a className="hover-img curved" href="">
                                            <img src={require('../../../assets/img/upper_lake_in_new_york_central_park_800x600.jpg')} alt=" Alternative text" title="Upper Lake in New York Central Park" /><i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                                        </a>
                                    </header>
                                    <div className="thumb-caption">
                                        <h4 className="thumb-title">USA</h4>
                                        <p className="thumb-desc">Cursus faucibus egestas rutrum mauris vulputate consequat ante</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="thumb">
                                    <header className="thumb-header">
                                        <a className="hover-img curved" href="">
                                            <img src={require('../../../assets/img/people_on_the_beach_800x600.jpg')} alt=" Alternative text" title="people on the beach" /><i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                                        </a>
                                    </header>
                                    <div className="thumb-caption">
                                        <h4 className="thumb-title">Australia</h4>
                                        <p className="thumb-desc">Senectus hendrerit torquent lorem scelerisque quam a curae</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="thumb">
                                    <header className="thumb-header">
                                        <a className="hover-img curved" href="">
                                            <img src={require('../../../assets/img/lack_of_blue_depresses_me_800x600.jpg')} alt="Alternative text" title="lack of blue depresses me" /><i className="fa fa-plus box-icon-white box-icon-border hover-icon-top-right round"></i>
                                        </a>
                                    </header>
                                    <div className="thumb-caption">
                                        <h4 className="thumb-title">Greece</h4>
                                        <p className="thumb-desc">Penatibus ac lacinia platea cras lobortis nullam dapibus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}