import { useState, useEffect } from 'react';
import { createStage } from '../gameHelper';
import { TETROMINOS } from '../tetrominos';

export const useStage = (player, resetPlayer, resetBomb) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);
  var explode = false;

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = newStage =>
      newStage.reduce((ack, row) => { //accumulator and row
        if (row.findIndex(cell => cell[0] === 0) === -1) { //if any part of the row has 0, don't clear
          
          
          
          setRowsCleared(prev => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return ack; //return empty cell
        }
        ack.push(row);
        return ack; //no changes to cell
      }, []) //returns a completely new stage

    const updateStage = prevStage => {
      // First flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
      );
      
      
      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          //if the bomb appears...
          if (player.tetromino === TETROMINOS['B'].shape && value !== 0) {
            
            //updates the stage to include each pixel of the tetromino
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
            //Checks if the bomb hits another tetromino
            if (player.collided && y + player.pos.y < newStage.length && 
              x + player.pos.x < newStage[0].length) {
              console.log("exploded");
              explode = true;
            }
          } else { //otherwise draw the tetromino like normal

            if (value !== 0) {
              newStage[y + player.pos.y][x + player.pos.x] = [
                value,
                `${player.collided ? 'merged' : 'clear'}`,
              ];
            }

          }
        });
      });
      

      // if the bomb exploded
      if (explode === true) {
        explode = false;
        player.tetromino.forEach((row, y) => {
          row.forEach((value, x) => {

            if (player.collided && y + player.pos.y < newStage.length && 
              x + player.pos.x < newStage[0].length) {
                newStage[y + player.pos.y][x + player.pos.x] = [
                value,
                `clear`,
              ];
            }
          })
        });
        resetPlayer();
        return sweepRows(newStage);
      }

      // Then check if we collided
      if (player.collided) {
        resetPlayer();
        
        newStage.reduce((ack, row) => { //if row is cleared we drop a bomb
          if (row.findIndex(cell => cell[0] === 0) === -1) {
            resetBomb();
          }
        });

        return sweepRows(newStage);
      }

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer, resetBomb]);

  return [stage, setStage, rowsCleared];
};