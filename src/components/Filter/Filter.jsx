import React, { useEffect, useState } from 'react';
import './Filter.css';
import { useSubmit, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui';
import { IoMdClose } from "react-icons/io";
function Filter({show, onShow}) {
    let submit = useSubmit();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [checked, setChecked] = useState('all');
    const gg = searchParams.get('filter');
    const onSubmit = (e) => {
        e.preventDefault(); 
        submit(e.currentTarget)
    }
    const onCheckeds = (e) => {
        setChecked(e.target.value)
    }   
    useEffect(() => {
        setChecked(gg)
        dispatch(uiActions.changeItemsByFilter(gg))
    }, [searchParams])
    return (
        <>
        {show &&        <div className='filter_container'>
         <form className='filter' onSubmit={e => onSubmit(e)}>
                <label className='radio' htmlFor=""><input type="radio" id="filter" name="filter" value="all" checked={checked === 'all'} onChange={onCheckeds}  />All</label>
               <label className='radio' htmlFor="">  <input type="radio" id="filter" name="filter" value="most_selled" checked={checked === 'most_selled'} onChange={onCheckeds} />Most Selled</label>
               <label className='radio' htmlFor="">  <input type="radio" id="filter" name="filter" value="new_season" checked={checked === 'new_season'} onChange={onCheckeds} />New season</label>
                <label className='radio' htmlFor=""><input type="radio" id="filter" name="filter" value="most_searched" checked={checked === 'most_searched'} onChange={onCheckeds} />Most searched</label>
                <button type='submit'>Submit</button>
        </form>
        <p onClick={() => onShow()}><IoMdClose></IoMdClose></p>
       </div>}
        </>
    )
}

export default Filter
