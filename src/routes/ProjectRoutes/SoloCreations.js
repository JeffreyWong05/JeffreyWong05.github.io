import './SoloCreations.css';
import { Link } from "react-router-dom"
import React, { Component }  from 'react';
const SoloCreations =()=>{
      return (
            
        <div>
            <h1>Projects</h1>
            <div class="flex-container2">
            <div><Link to="/Careers"> Hackathons </Link></div>
        
            <div><Link to="/Careers/OtherProjects"> Other Projects </Link></div>
        
            </div>

            <h3>Ramen Recommender</h3>

            <img src='https://cdn.discordapp.com/attachments/1029635450895339603/1125733121980108830/image.png' width="500" height="300"/>

            <p>Based on user input, offers suggestions based on location, rating, 
                type of noodle, and other factors for the Ramen you want.
                You can also add your own review.
                I connected to MongoDB, to which I saved a database with 2500 reviews
                to be modified and edited through pycharm.</p>

            
        </div>
      )
}
export default SoloCreations;