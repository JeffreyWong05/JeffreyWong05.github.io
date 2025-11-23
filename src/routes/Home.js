import { Link } from "react-router-dom"
import React, { Component }  from 'react';

import { useState } from 'react'

import Pdf from '../routes/Jeffrey_Wong_Resume.pdf';


const Home =()=>{

      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

      const navigation = [
            { name: 'Product', href: '#' },
            { name: 'Features', href: '#' },
            { name: 'Marketplace', href: '#' },
            { name: 'Company', href: '#' },
      ]
          

      const links = [
        { name: 'Email', href: 'mailto:jeffjeff217@hotmail.com' },
        { name: 'Github', href: 'https://github.com/JeffreyWong05' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jeffreywong05/' },
      ]

      return (
            <div class=" md:absolute inset-0 -z-10 w-full h-full bg-[url('../img/pixilart-SKY_scaled_40x_pngcrushed2.png')] bg-scroll bg-cover overflow-y-auto">
            
    
    <div class=" mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Check out my tetris-like game <a href="#/TetrisBomb" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span> here <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Coding whatever, whenever</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">A statistics graduate with interests in games and websites.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#/Careers" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          <a href="#/About" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    
    

    <div className="pb-10 justify-center object-contain grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
            <a href = {Pdf} target = "_blank">My Resume &rarr;</a>
    </div>

      </div>
      )
}
export default Home;