import "./style.scss";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";


const Footer = (): JSX.Element => <footer className="page-footer font-small blue pt-4">
    <div className="content">
    <div className="container-fluid text-left text-md-left">
        <div className="row">

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-2 mb-md-3 mb-3">
                <h5>About Sadith </h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Overview</a></li>
                    <li><a href="#!">Values</a></li>
                    <li><a href="#!">Awards</a></li>
                    <li><a href="#!">Press Room</a></li>
                    <li><a href="#!">Life At Sadith place</a></li>
                    <li><a href="#!">Grow With Sadith</a></li>
                </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
                <h5>Products</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Prepaid</a></li>
                    <li><a href="#!">Postpaid</a></li>
                    <li><a href="#!">IDD</a></li>
                    <li><a href="#!">Roaming</a></li>
                    <li><a href="#!">Entertainment</a></li>
                </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
                <h5>Support</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Service Touch Points Locator</a></li>
                    <li><a href="#!">Get Help</a></li>
                    <li><a href="#!">Coverage Map</a></li>
                    <li><a href="#!">Contact Us</a></li>
                </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
                <h5>Business</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Business Solutions</a></li>
                    <li><a href="#!">Become A Partner</a></li>
                </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-3">
                <h5>Connect with us</h5>
                <ul className="list-unstyled mb custom-social-links" >
                    <a href="#!"><FaFacebook /></a>
                    <a href="#!"><FaXTwitter /></a>
                    <a href="#!"><FaLinkedin /></a>
                    <a href="#!"><FaInstagramSquare /></a>
                    <a href="#!"><TiSocialYoutubeCircular /></a>
                </ul>
            </div>
        </div>
    </div>
    </div>

    <div className="container-fluid footer-bottom">
        <div className="container footer-inner col-md-12 no-padding">
            <div className="copyright col-sm-6">© 2024 sadith | All rights reserved </div>
        <div className="col-sm-6">
            <ul>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms and Conditions</a></li>
            </ul>
        </div>
        </div>
    </div>


</footer>

export default Footer;