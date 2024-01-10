import React, { useEffect, useState } from 'react'
import './Discovery.css'
import bg from '../../bg';
import Products from '../../components/Products';
import Filter from '../../components/Filter/Filter';
import { useSelector } from 'react-redux';
function Discovery() {
    const items = useSelector(store => store.ui.items)
    const [show, setShow] = useState(true);
    const onShow = () => {
        setShow(!show)
    }
    useEffect(() => {
        if(window.innerWidth < 801) {
            setShow(false)
        }
    },[])
    return (
        <div className='discovery'>
             <h2 className='product_title'>All our Products</h2>
            <p className='product_text'>Order it for you or for your beloved ones </p>
            <button onClick={() => setShow(!show)} className='show_filters'>Filters</button>
            <div className="discovery_items">
            <Filter show={show} onShow={onShow}></Filter>
            <Products items={items}></Products>
            </div>
        </div>
    )
}

export default Discovery
