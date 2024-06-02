import React from 'react';
import Tetris from './components/Tetris';
import screenshot from './img/fallingTetroScreenshot.png';

const features = [
    {
      name: 'The controls',
      description:
        'Press the start button to begin. Use the arrow keys to move the tetromino (the blocks) and the up key to rotate. Press shift to drop the tetromino immediately.',
      //icon: CloudArrowUpIcon,
    },
    {
      name: 'Increasing difficulty',
      description: 'As the level increases, so does the speed of the tetromino. Aim for a high score!',
      //icon: LockClosedIcon,
    },
    {
      name: 'Made using react.',
      description: 'Done all on a static website, and coded purely in javascript, by using extentions like styled-components. Designed my own functions and special tetromino.',
      //icon: ServerIcon,
    },
  ]

  const scrolltoBot = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }


const AppGame = () => (
    <div className="bg-[url('../img/falling-tetrominos-pixilart_scaled_40x_pngcrushed2.png')] bg-[length:450px_650px]">

        <div className="overflow-hidden py-5 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg bg-white p-2 rounded-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Welcome to</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tetris, almost</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Tetris with my own twist! If you clear one or more rows a special object appears.
            Try my game to find out what it does!
              </p>

              <button type="button" onClick={e => scrolltoBot()} class="inline-flex items-center rounded-md bg-indigo-600 mt-5 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <svg class="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
        </svg>
        Play now!
      </button>

              <dl className="mt-5 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {/* <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" /> */}
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={screenshot}
            alt="Product screenshot"
            className="border-double border-4 border-white w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>

        <Tetris />
    </div>

);

export default AppGame;