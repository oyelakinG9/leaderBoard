import './style.css';

const scoreRecord = [
  { name: 'name:', score: 100 },
  { name: 'name:', score: 20 },
  { name: 'name:', score: 50 },
  { name: 'name:', score: 78 },
  { name: 'name:', score: 125 },
  { name: 'name:', score: 77 },
  { name: 'name:', score: 42 }
];

const scores = document.querySelector('#scores');
const scoreSheet = () => {
  scoreRecord.forEach((score) => {
    scores.innerHTML += `<tr><td>${score.name}</td><td>${score.score}</td></tr>`;
  });
};

scoreSheet();