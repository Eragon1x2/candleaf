import React, { useState } from 'react';
import './Nav.css';
import logo from './logo.jpg';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { LogOut } from '../../store/auth-actions';
import Modal from '../Mobile_modal/Modal';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { auth } from '../../unit/Firebase';
function Nav() {
    const cartItems = useSelector(store => store.auth.isAuthenticated);
    const [modal, toogleModal] = useState(false);
    const dispatch = useDispatch();
    const onScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
    return (
        <div className='nav'>
                <div className="nav_container">
                <button onClick={() => toogleModal(!modal)} className='burger'><GiHamburgerMenu /></button>
                <ul className='nav_panel'>
                    <li><Link to='/candleaf' onClick={onScroll}><img src={logo} alt="" /></Link></li>
                    <li className='nav_panel_block'>
                        <Link to='discovery?filter=all' onClick={onScroll}>Discovery</Link>
                        <Link to='about' onClick={onScroll}>About</Link>
                        <Link to='contact' onClick={onScroll}>Contact us</Link>
                    </li>
                    <li>
                    <Link className='icon' to={cartItems ? '/candleaf' : '/candleaf/auth?mode=signup'} onClick={() => {
                        if(cartItems) {
                           dispatch(LogOut())
                        }
                    }}>{cartItems ? <MdLogout /> : <IoPerson /> }</Link>
                    <Link className='icon' to='/candleaf/busket' onClick={onScroll}><FaCartShopping /></Link>
                    </li>
                </ul>
                {modal && <Modal modal={modal} toogleModal={toogleModal}>
                <ul className='modal'>
                <IoMdClose onClick={() => toogleModal()} className='close'/>
                    <li><Link to='/candleaf' onClick={() => toogleModal()}><img src={logo} alt="" /></Link></li>
                        <li className='modal_icons'>    <Link className='icon' to={cartItems ? '/candleaf' : '/candleaf/auth?mode=signup'} onClick={() => {
                        if(cartItems) {
                           dispatch(LogOut())
                        }
                        toogleModal()
                    }}>{cartItems ? <MdLogout /> : <IoPerson /> }</Link>
                   <Link className='icon' to='/candleaf/busket' onClick={() => {onScroll(); toogleModal()}}><FaCartShopping /></Link></li>
                    <li> <Link to='discovery?filter=all' onClick={() => {toogleModal();onScroll()}}>Discovery</Link>
                        <Link to='about' onClick={() => {toogleModal();onScroll()}}>About</Link>
                        <Link to='contact' onClick={() => {toogleModal();onScroll()}}>Contact us</Link></li>
                    </ul>
                    </Modal>
                    }
                </div>
        </div>
    )
}

export default Nav
