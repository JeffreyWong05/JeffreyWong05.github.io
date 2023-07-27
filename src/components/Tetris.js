import React, { useState } from 'react';

import { createStage, checkCollision, STAGE_HEIGHT } from '../gameHelper';

// styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/styledTetris';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, resetBomb, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer, resetBomb);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    console.log("re-render")

    const movePlayer = dir => {
        if(!checkCollision(player, stage, { x: dir, y: 0})) {
            updatePlayerPos({ x: dir, y:0 });
        }
    }

    const startGame = () => {
        // Reset everything
        setStage(createStage());
        setDropTime(1000); //1000 = 1 second
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    }
    
    const drop = () => {
        //increase level when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            // Also increase speed
            setDropTime(1000 / (level + 1) + 200);
        }

        if (!checkCollision(player, stage, { x: 0, y: 1})) {
            updatePlayerPos({ x: 0, y: 1, collided: false })
        } else {
            // Game Over
            if (player.pos.y < 1) {
                console.log("GAME OVER!!!");
                setGameOver(true);
                setDropTime(null);
            }
            console.log("hit bottom")
            updatePlayerPos({ x: 0, y: 0, collided: true});
            
        }
    }

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 83 || keyCode === 32) {
                console.log("interval on");
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    }

    const dropPlayer = () => {
        console.log("interval off");
        setDropTime(null);
        drop();
    }

    const instDrop = () => { //immediately drop the block
        console.log(player.pos.y);

        let maxDrop = 0;
        
        for (let i=0; i < STAGE_HEIGHT - player.pos.y; i++) {

            console.log(!checkCollision(player, stage, { x: 0, y: i}));
            console.log(i);

            if (checkCollision(player, stage, { x: 0, y: i})) {
                maxDrop = i-1;
                break;
            }

            maxDrop = i-1;
        }
        
        updatePlayerPos({ x: 0, y: maxDrop, collided: true });
        
    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 65) {
                movePlayer(-1);
            } else if (keyCode === 68) {
                movePlayer(1); //move right
            } else if (keyCode === 83) {
                dropPlayer();
            } else if (keyCode === 87) {
                playerRotate(stage, 1);
            } else if (keyCode === 32) {
                instDrop();
            }
        }
    }

    useInterval(() => {
        drop();
    }, dropTime)

    return (
        <StyledTetrisWrapper 
        role="button" 
        tabIndex="0" 
        onKeyDown={e => move(e)} 
        onKeyUp={keyUp}>
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over"/>
                    ): (
                    <div>
                        <Display text={`Score: ${score}`}/>
                        <Display text={`Rows: ${rows}`}/>
                        <Display text={`Level: ${level}`}/>
                    </div>
                    )}
                    <StartButton callback={startGame} />
                    <div><Display text="How to play: ASD Keys to move.
                    W key to rotate, and space bar to drop immediately."/></div>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;