import "./style.scss";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";


const Footer = (): JSX.Element => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-3 mb-3">
                <h5 className="text-uppercase">About Sadith</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Overview</a></li>
                    <li><a href="#!">Values</a></li>
                    <li><a href="#!">Awards</a></li>
                    <li><a href="#!">Press Room</a></li>
                    <li><a href="#!">Life At Sadith place</a></li>
                    <li><a href="#!">Grow With Sadith</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Products</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Prepaid</a></li>
                    <li><a href="#!">Postpaid</a></li>
                    <li><a href="#!">IDD</a></li>
                    <li><a href="#!">Roaming</a></li>
                    <li><a href="#!">Entertainment</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Support</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Service Touch Points Locator</a></li>
                    <li><a href="#!">Get Help</a></li>
                    <li><a href="#!">Coverage Map</a></li>
                    <li><a href="#!">Contact Us</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Business</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Business Solutions</a></li>
                    <li><a href="#!">Become A Partner</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Connect with us</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"><FaFacebook /></a></li>
                    <li><a href="#!"><FaXTwitter /></a></li>
                    <li><a href="#!"><FaLinkedin /></a></li>
                    <li><a href="#!"><FaInstagramSquare /></a></li>
                    <li><a href="#!"><TiSocialYoutubeCircular /></a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2024 NoName | All rights reserved
        <a href="https://mdbootstrap.com/"> Privacy Policy</a>
        <a href="https://mdbootstrap.com/"> Terms and Conditions</a>
    </div>

</footer>

export default Footer