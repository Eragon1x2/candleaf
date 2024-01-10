import React from 'react'
import './Busket.css'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/cart';
import { toast } from 'react-toastify';

function Busket() {
    const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    return (
        <div className='carts'>
            <h1 className='product_title'>Your cart items</h1>
           <Link to='/candleaf' className='product_text'>Back to shopping</Link>
            <div className='cart_panel'>
            <div>Product</div>
            <div><p>Price</p> <p>Quantity</p> <p>Total</p></div>
            </div>
            <div className="cart_line"></div>
            <ul>
           {cartItems && cartItems.items.map(item => (
            <li key={item.id}>
            <div className="cart_item">
            <div className='cart_item_info'>
                <img src={item.img} alt="" />
                <div> <h2>{item.name}</h2>
                <button onClick={() => dispatch(cartActions.removeItemFromCart(item.id))}>Remove</button></div>
            </div>
          <div className='cart_item_numbers'>
          <p>${item.price}</p>
            <p className='busket_count_item'><button onClick={() => dispatch(cartActions.updateItemInCart(['+', item.id]))}>+</button>{item.count}<button  onClick={() => dispatch(cartActions.updateItemInCart(['-', item.id]))}>-</button></p>
            <p>${Math.round(item.total)}</p>
          </div>
            <h6 className='for_mobile'><span>Price:</span> ${item.price}</h6>
            <h6 className='busket_count_item_mobile'><button onClick={() => dispatch(cartActions.updateItemInCart(['+', item.id]))}>+</button>{item.count}<button  onClick={() => dispatch(cartActions.updateItemInCart(['-', item.id]))}>-</button></h6>
            <h6 className='for_mobile'><span>Total:</span> ${Math.round(item.total)}</h6>
            </div>
            <div className='cart_item_line'></div>
            </li>
           ))}
            </ul>
            <div className="buy">
            <div><p>Sub-total ${Math.round(cartItems.totalPrice)}</p><p>Tax and shipping cost will be calculated later</p></div>
            <button onClick={() => toast.error('Sorry, but we are currently unable to provide purchases from this site.', {
position: "top-right",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
})} style={{cursor: 'pointer'}}>Check-out</button>
            </div>
        </div>
    )
}

export default Busket
