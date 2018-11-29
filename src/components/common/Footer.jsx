import React from 'react';
export default class Footer extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row row-wrap">
                    <div className="col-md-3">
                        <a className="logo" href="index.html">
                            <img src={require('../../../assets/img/logo-invert.png')} alt=" Alternative text" title="Image Title" />
                        </a>
                        <p className="mb20">Booking, reviews and advices on hotels, resorts, flights, vacation rentals, travel packages, and lots more!</p>
                        <ul className="list list-horizontal list-space">
                            <li>
                                <a className="fa fa-facebook box-icon-normal round animate-icon-bottom-to-top" href=""></a>
                            </li>
                            <li>
                                <a className="fa fa-twitter box-icon-normal round animate-icon-bottom-to-top" href=""></a>
                            </li>
                            <li>
                                <a className="fa fa-google-plus box-icon-normal round animate-icon-bottom-to-top" href=""></a>
                            </li>
                            <li>
                                <a className="fa fa-linkedin box-icon-normal round animate-icon-bottom-to-top" href=""></a>
                            </li>
                            <li>
                                <a className="fa fa-pinterest box-icon-normal round animate-icon-bottom-to-top" href=""></a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h4>Newsletter</h4>
                        <form>
                            <label>Enter your E-mail Address</label>
                            <input type="text" className="form-control"/>
                            <p className="mt5"><small>*We Never Send Spam</small>
                            </p>
                            <input type="submit" className="btn btn-primary" value="Subscribe"/>
                        </form>
                    </div>
                    <div className="col-md-2">
                        <ul className="list list-footer">
                            <li><a href="">About US</a>
                            </li>
                            <li><a href="">Press Centre</a>
                            </li>
                            <li><a href="">Best Price Guarantee</a>
                            </li>
                            <li><a href="">Travel News</a>
                            </li>
                            <li><a href="">Jobs</a>
                            </li>
                            <li><a href="">Privacy Policy</a>
                            </li>
                            <li><a href="">Terms of Use</a>
                            </li>
                            <li><a href="">Feedback</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Have Questions?</h4>
                        <h4 className="text-color">9479275716</h4>
                        <h4><a href="" className="text-color">support@flightskipper.com</a></h4>
                        <p>24/7 Dedicated Customer Support</p>
                    </div>

                </div>
            </div>
        )
    }
}