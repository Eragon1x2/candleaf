import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import bg from '../../bg';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import no from '../../components/assets/no.jpg';
import {toast} from 'react-toastify';
function ItemDetail() {
    const isLogin = useSelector(store => store.auth.isAuthenticated)
    const gg = useParams()
    const [a, setA] = useState();
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        bg.find(a => Number(a.id) === Number(gg.id) && setA(a))
    },[gg.id])
    const dispatch = useDispatch();
    const sendtoCard = (e) => {
        e.preventDefault()
        const ggb = {
            ...a,
            count: counter
        }
        if(isLogin) dispatch(cartActions.addItemToCart(ggb));
        else {
            toast.error('Login to Account!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                })}
    }
    return (
        <>
        {a && <div className='ItemDetail'>
                <div className="itemdetail_one">
                <img src={a.img_scale ? a.img_scale: no} alt="" />
                <h3>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</h3>
                <p>🚚 FREE SHIPPING</p>
                </div>
                <div className="itemdetail_two"> 
                <h2>{a.name} Candleaf®</h2>
                <div className='itemdetal_two_items'>
                    <div className='itemdetal_two_items_one'>
                        <p className='itemdetal_two_price'><span>$</span>{a.price}</p>
                        <div className='quantity'>
                            Quantity
                            <div><button onClick={() => setCounter(counter + 1)}>+</button>{counter}<button onClick={() => setCounter(counter - 1)}>-</button></div>
                        </div>
                    </div>
                    <div className='itemdetal_two_items_two'>
                        <form action="" onSubmit={(e) => {sendtoCard(e)}}>
     <label className='radio'>
     <div>
      <input type="radio" id="coding" name="interest" value="coding" />
       One time purchase
      </div>
     </label>
      <label className='radio'>
        <div>   <input type="radio" id="coding" name="interest" value="coding" />
         Subscribe and delivery every
         <select name="user_profile_color_1">
  <option value="1">4 weeks</option>
  <option value="2">2 weeks</option>
  <option value="3">1 weeks</option>
</select>
     </div>

        <p>Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. See details</p>
      </label>
      <button type='submit' className='form_submit'>+ Add to cart</button>
                        </form>
                    </div>
                </div>
                <div className='about'><span>Wax:</span> {a.about.wax} <span>Fragrance: </span>{a.about.fragnance} <span>Burning Time:</span> {a.about.burning_time} <span>Dimension: </span>{a.about.dimension} <span>Weight: </span>{a.about.weight}</div>
                </div>
            </div>}
        </>
    )
}

export default ItemDetail
