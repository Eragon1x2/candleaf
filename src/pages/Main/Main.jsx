import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero';
import Products from '../../components/Products';
import './Main.css';
import bg from '../../bg';
import Pluses from '../../components/Pluses/Pluses';
import Team from '../../components/Team/Team';
function Main() {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        let transformedArray = bg.filter(a => a.most_selled === true);
        setPopular(transformedArray);
    },[])
    return (
        <div>
            <Hero></Hero>
            <h2 className='product_title'>Products</h2>
            <p className='product_text'>Order it for you or for your beloved ones </p>
            <Products items={bg}></Products>
            <Pluses></Pluses>
            <Team></Team>
            <h2 className='product_title'>Popular</h2>
            <p className='product_text'>Our top selling product that you may like</p>
            <Products items={popular}></Products>
        </div>
    )
}

export default Main;
