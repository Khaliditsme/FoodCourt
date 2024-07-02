

import image from '../asset/logo.png'
import '../css/Header.css'
import { Link } from 'react-router-dom'

const Header = ()=>{
    return(
        <div className="container">
            <div className="logo-container">
                <img className="logo" src={image} alt="" />
                <p>FoodCourt</p>
            </div>
            <nav>
                <ul>
                    <li className='list_item'><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><button className='cart header_button'>Cart</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;