import { Link } from "react-router-dom"
import React, { Component }  from 'react';
const Careers =()=>{
      return (
            <div class="md:absolute inset-0 -z-10 w-full h-full bg-[url('../img/blossom-pixilart_2_scaled_40x_pngcrushed.png')] bg-scroll bg-cover overflow-y-auto">


                  
<div class="flex flex-col py-4 px-12">
        <div class="py-4">
            <div class="text-center py-8 px-4">
                <div class="bg-white/70 ld:text-7xl md:text-7xl text-black font-bold">My projects</div>
                <div class="bg-white/70 lead-xl font-light py-1">Here are some of my personal projects</div>
            </div>
        </div>
    <div class="flex flex-col px-5 md:px-5 lg:flex-row items-center justify-center gap-6 py-6">
        <div>
        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/5kt11opV8no"/>
            <div class="px-9 pt-10 pb-14 bg-red-200/[.95] rounded-b-lg">
                <div class="text-black space-y-4">
                    <h3 class="text-xl font-bold lead-xl bold">AI YuGiOh Card Generator</h3>
                    <div width = "30px" class="text-lg font-light">Working as a team of 4, 
                        Our application uses the OpenAI image generation 
                        and text classification APIs 
                        to create art, effects, and 
                        other details for a YuGiOh card 
                        based on the card name given by the user,
                        and compile the results 
                        for display on our web interface.</div>
                </div>
                <div class="flex justify-between pt-8">
                    {/* <ul class="flex flex-col gap-y-2.5">
                        <li class="flex space-x-3 text-white">
                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li class="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li class="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                    </ul> */}
                    <div class="flex flex-col justify-end">
                        <a href="https://github.com/JeffreyWong05/ygoAIcardGenerator" class="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">Github Link</a>
                    </div>
                </div>
            </div>
        </div> 
        <div class="">
            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/DYnyIHmRpmA"/>
            <div class="px-9 pt-10 pb-14 bg-red-50/[.95] rounded-b-lg flex-grow-1">
                <div class="text-black space-y-4">
                    <h3 class="text-xl font-bold lead-xl bold">Plant Defence</h3>
                    <div class="text-lg font-light"> A short game designed in unity, our team created a tower defence game in 
                        2 days, I taught 3 of my members how code and build sprites from scratch, 
                        create collision systems, sound effects and AI.</div>
                </div>
                <div class="flex justify-between pt-8">
                   {/* <ul class="flex flex-col gap-y-2.5">
                        <li class="flex space-x-3 text-white">
                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li class="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li class="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                    </ul> */}
                    <div class="flex flex-col justify-end">
                        <a href="https://github.com/JeffreyWong05/Plant-Defense" class="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">Github Link</a>
                    </div>
                </div>
            </div>
        </div> 
    </div>

    <div class="flex flex-col px-5 md:px-5 lg:flex-row items-center justify-center gap-6">
        <div>
        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/V5uDTMGNRco"/>
            <div class="px-9 pt-10 pb-14  bg-red-50/[.95] rounded-b-lg">
                <div class="text-black space-y-4">
                    <h3 class="text-xl font-bold lead-xl bold">Linear Algebra Student Aid Interface</h3>
                    <div width = "30px" class="text-lg font-light">Using React and flask, we used axios to pull data from the backend to store user input
                        to perform matrix calculations on a local server. I taught and lead 3 students new to 
                        website development how to develop and design functions for a local website.
                        
                        </div>
                </div>
                <div class="flex justify-between pt-8">
                    {/* <ul class="flex flex-col gap-y-2.5">
                        <li class="flex space-x-3 text-white">
                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li class="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li class="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                    </ul> */}
                    <div class="flex flex-col justify-end">
                        <a href="https://github.com/JeffreyWong05/Linear-Algebra-Student-Aid-Interface" class="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">Github Link</a>
                    </div>
                </div>
            </div>
        </div> 
        <div class="">
            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/lUA6NrDILFU"/>
            <div class="px-9 pt-10 pb-14 bg-red-200/[.95] rounded-b-lg flex-grow-1">
                <div class="text-black space-y-4">
                    <h3 class="text-xl font-bold lead-xl bold">Ramen Recommender</h3>
                    <div class="text-lg font-light"> Based on user input, offers suggestions based on location, rating, 
                type of noodle, and other factors for the Ramen you want.
                You can also add your own review.
                I connected to MongoDB, to which I saved a database with over 2500 reviews
                to be modified and edited through pycharm.</div>
                </div>
                <div class="flex justify-between pt-8">
                   {/* <ul class="flex flex-col gap-y-2.5">
                        <li class="flex space-x-3 text-white">
                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li class="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li class="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                    </ul> */}
                    <div class="flex flex-col justify-end">
                        <a href="https://github.com/JeffreyWong05/Ramen-Recommender" class="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">Github Link</a>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    
    <div class="flex flex-col px-5 md:px-5 lg:flex-row items-center justify-center gap-6 py-6">
        <div>
        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/a2DHUDUxZj8?si"/>
            <div class="px-9 pt-10 pb-14 bg-red-100/[.95] rounded-b-lg">
                <div class="text-black space-y-4">
                    <h3 class="text-xl font-bold lead-xl bold">Automated AI anime recommender</h3>
                    <div width = "30px" class="text-lg font-light"> I designed and deployed a fully automated bot that posts the top 3 trending anime daily on Bluesky, 
                        combining multiple APIs and workflow automation.
Using Make.com, I connected to Google Sheets (for structured data handling) 
and OpenRouter with DeepSeek AI (for content generation and formatting). 
I set up variables, filters, and conditional logic to ensure each post is different. You can check out my bot posting daily with the button below.</div>
                </div>
                <div class="flex justify-between pt-8">
                    {/* <ul class="flex flex-col gap-y-2.5">
                        <li class="flex space-x-3 text-white">
                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li class="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                            <li class="flex space-x-3 text-white">
                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" class="w-6 h-6"/>
                            <span class="paragraph-l font-bold">Item 1</span>
                        </li>
                    </ul> */}
                    <div class="flex flex-col justify-end">
                        <a href="https://bsky.app/profile/makecom007.bsky.social" class="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">Link to my Bluesky bot</a>
                    </div>
                </div>
            </div>
        </div> 
    </div>

</div>

            </div>
      )
}
export default Careers;