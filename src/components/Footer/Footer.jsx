import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className='footer'>
            <div className="footer_container">
                <div className="line"></div>
                <ul className='footer_lists'>
                    <li className='footer_list_item_one'>
                    <img src={logo} alt="" />
                    <p>Your natural candle made for your home and for your wellness.</p>
                    </li>
                    <li className='footer_items'>
                        <ul>
                            <li>
                                <Link to="discovery?filter=all">Discovery</Link>
                                <Link to="discovery?filter=new_season">New season</Link>
                                <Link to="discovery?filter=most_searched">Most searched</Link>
                                <Link to='discovery?filter=most_selled'>Most selled</Link>
                            </li>
                            <li>
                                <a href="">About</a>
                                <a href="">Help</a>
                                <a href="">Shipping</a>
                                <a href="">Affiliate</a>
                            </li>
                            <li>
                                <a href="">Info</a>
                                <a href="">Contact us</a>
                                <a href="">Privacy Policies</a>
                                <a href="">Terms & Conditions</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;