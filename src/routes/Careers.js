import { Link } from "react-router-dom"
import React, { Component }  from 'react';
const Careers =()=>{
      return (
            <div>
                  <h1>Projects</h1>
                  <div class="flex-container2">
                  <div><Link to="/Careers"> Hackathons </Link></div>
                  
                  <div><Link to="/Careers/OtherProjects"> Other Projects </Link></div>
                  
            </div>
                  <h3>AI YuGiOh Card Generator</h3>
                  <p>
                        <iframe width="500" height="345" src="https://www.youtube.com/embed/5kt11opV8no">
                        </iframe>
                        <div></div>
                        Working as a team of 4, 
                        Our application uses the OpenAI image generation and text classification APIs 
                        to create art, effects, and other details for a YuGiOh card 
                        based on the card name given by the user, and compile the results 
                        for display on our web interface.

                  </p>
                  <div></div>
                  <h3>Plant Defence</h3>
                  <p>
                        <iframe width="500" height="345" src="https://www.youtube.com/embed/DYnyIHmRpmA">
                        </iframe>
                        <div></div>
                        A short game designed in unity, our team created a tower defence game in 
                        2 days, I taught 3 of my members how code and build sprites from scratch, 
                        create collision systems, sound effects and AI.
                        
                  </p>
                  
                  <h3>Linear Algebra Student Aid Interface</h3>
                  <p>
                  <iframe width="500" height="345" src="https://www.youtube.com/embed/V5uDTMGNRco">
                        </iframe>
                        <div></div>
                        Using React and flask, we used axios to pull data from the backend to store user input
                        to perform matrix calculations on a local server. 
                  </p>

            </div>
      )
}
export default Careers;