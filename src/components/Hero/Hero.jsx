import React from 'react';
import './Hero.css';
import back from '../assets/bg-image.jpg';
import icon from '../assets/hero-title.png';
import { Link } from 'react-router-dom';
function Hero() {
    const onScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
    return (
        <div className='hero' style={{background: `url(${back})`, backgroundSize: '100% 100%'}}>
            <div className="hero_block">
                <img src={icon} alt="" />
                <h1>The nature candle</h1>
                <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
                <Link to='discovery' onClick={onScroll}>Discovery our collection</Link>
            </div>
        </div>
    )
}

export default Hero;
