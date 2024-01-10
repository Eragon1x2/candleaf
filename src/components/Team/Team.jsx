import React from 'react';
import './Team.css';
import one from '../assets/team_1.png';
import two from '../assets/team_2.png';
import three from '../assets/team_3.png';
import { IoStarSharp } from "react-icons/io5";
function Team() {
    return (
        <div className='team'>
           <div className="team_container">
           <h2>Testimonials</h2>
            <p>Some quotes from our happy customers</p>
            <ul className='team_list'>
                <li>
                    <img src={one} alt="" />
                    <div className='stars'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                    <h3>“I love it! No more air fresheners”</h3>
                    <p>Luisa</p>
                </li>
                <li>
                <img src={two} alt="" />
                    <div className='stars'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                    <h3>“Raccomended for everyone”</h3>
                    <p>Edoardo</p>
                </li>
                <li>
                <img src={three} alt="" />
                    <div className='stars'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>
                    <h3>“Looks very natural, the smell is awesome”</h3>
                    <p>Mart</p>
                </li>
            </ul>
           </div>
        </div>
    )
}

export default Team
