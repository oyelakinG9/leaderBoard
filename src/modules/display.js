import scoreValue from './getValue.js';

const board = document.querySelector('#scoresBoard');

const display = (name, score) => {
  if (name === undefined || score === undefined) {
    return;
  } 

  board.appendChild(scoreValue(name, score));
};

export default display;
