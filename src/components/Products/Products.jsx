import React from 'react';
import './Products.css';
import one from '../assets/image 1.png';
import { Link } from 'react-router-dom';

function Products({items}) {
    const onScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
    return (
        <div className='products'>
            <ul className='products_list'>
            {items && items.map(item => (
            <li className='products_item' key={item.id}>
               <Link to={"/candleaf/items/" + item.id} onClick={onScroll}>
               <img src={item.img}></img>
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.price}$</p>
                </div></Link>
            </li>))}
            </ul>
        </div>
    )
}
export default Products;
