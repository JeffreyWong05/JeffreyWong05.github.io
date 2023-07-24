import React from 'react';
import Tetris from './components/Tetris';

const AppGame = () => (
    <div className="AppGame">
        <p>Tetris with my own twist! If you clear one or more rows a special object appears.
            Try my game to find out what it does!
        </p>
        <Tetris />
    </div>

);

export default AppGame;