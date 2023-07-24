import { Link } from "react-router-dom"
import React, { Component }  from 'react';


const Home =()=>{
      return (
            <div>
                  
                  <h2>Hi, my name is Jeffrey Wong. Welcome to my website!</h2>
                  <p>Check out my most recent project of my modified <Link to="/TetrisBomb"> Tetris!</Link> Also feel free to 
                        click one of the links above to get started!</p>

            </div>
      )
}
export default Home;