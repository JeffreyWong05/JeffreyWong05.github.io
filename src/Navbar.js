import { Link } from "react-router-dom"
import React, { Component }  from 'react';
const Navbar =()=>{
      return (
            <div>
                  <Link to="/">Home</Link>
                  <div></div>
                  <Link to="/about">About</Link>
                  <div></div>
                  <Link to="/careers">Careers</Link>
            </div>
      )
}
export default Navbar;