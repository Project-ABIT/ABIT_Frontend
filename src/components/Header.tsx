import React from "react";
import {Link} from "react-router-dom";
import CartSymbol from'../assets/cart.svg';
import SearchSymbol from '../assets/search.svg';
import '../style/Header.css';
const Header:React.FC = () =>(
  <header className="header">
    <div className="logo-container">
      <p className="logo-text"><Link to ='/'>ABIT</Link></p>
    </div>
    <div className="symbol-container">
      <div className='symbol'><img src={SearchSymbol} alt="search" className='symbol' id="search"/></div>
      <div className='symbol'><img src={CartSymbol} alt="cart"  id="cart"/></div>
    </div>
  </header>
)
export default Header;