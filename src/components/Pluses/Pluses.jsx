import React from 'react';
import './Pluses.css';
import pluses from '../assets/pluses.png';
import one from '../assets/image 1.png';
import check from '../assets/check.png';
import { Link } from 'react-router-dom';
function Pluses() {
    const onScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
    return (
       <div className='pluses'>
        <div className="pluses_wrapper">
        <ul className='pluses_container'>
        <li>
            <h2 className='pluses_title'>Clean and <br /> fragrant soy wax</h2>
            <p className='pluses_text'>Made for your home and for your wellness</p>
            <ul className='pluses_checks'>
                <li><span className='pluses_checks_check'><img src={check} alt="" /></span><span>Eco-sustainable: </span> All recyclable materials, 0% CO2 emissions</li>
                <li><span className='pluses_checks_check'><img src={check} alt="" /></span><span>Hyphoallergenic: </span> 100% natural, human friendly ingredients </li>
                <li><span className='pluses_checks_check'><img src={check} alt="" /></span><span>Handmade: </span> All candles are craftly made with love.</li>
                <li><span className='pluses_checks_check'><img src={check} alt="" /></span><span>Long burning: </span> No more waste. Created for last long.</li>
            </ul>
            <Link className='to_about' onClick={onScroll} to='about'><button>Learn more</button></Link>
        </li>
        <li><img src={pluses} alt="" /></li>
        </ul>
        </div>
       </div>
    )
}

export default Pluses
