import './Navbar.css';
import { Link } from "react-router-dom"
import React, { Component }  from 'react';
const Navbar =()=>{
      return (
            <div class="flex-container">
                  <div><Link to="/"> Home </Link></div>
                  
                  <div><Link to="/about"> About </Link></div>
                  
                  <div><Link to="/careers"> Projects </Link></div>
            </div>
      )
}
export default Navbar;