import { Link } from "react-router-dom"
import React, { Component }  from 'react';
const About =()=>{

      const links = [
            { name: 'My Projects', href: '#/careers' }
      ]
          const stats = [
            { name: 'Internships participated in last year', value: '3' },
            { name: 'Sprites created for games', value: '100+' },
            { name: 'Development experience', value: 'Full-Stack' },
            { name: 'jeffjeff217@hotmail.com', value: 'Contact me' },
          ]

      return (
            <div class="absolute inset-0 -z-10 w-full h-full bg-[url('https://cdn.discordapp.com/attachments/1029635450895339603/1145243152324759593/night-pixilart_2_scaled_40x_pngcrushed.png')] bg-scroll bg-cover overflow-y-auto">
                  

                  <div className="pt-20">
      
      {/* BELOW IS THE PURPLE BLURS THAT ARE UNEEDED */}
      {/* <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
      {/* <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
      <div className="py-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Hi, my name is Jeffrey Wong</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          I'm 4th year statistics student who has dabbled with databases like MongoDB, 
          game software like Unity and statistics tools like Jupyter and Rstudio. 
          I'm always willing to try new things, currently I'm learning tailwindcss (Inspect this page!). 
          With several years of experience in coding in various languages, 
          I can help modernize websites, create games, analyze data and more.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex pl-[290px] lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
      )
}
export default About;