import printMe from './print.js';
import './style.css';

let scoreRecord = [
  { name: 'name:', score: 100 },
  { name: 'name:', score: 20 },
  { name: 'name:', score: 50 },
  { name: 'name:', score: 78 },
  { name: 'name:', score: 125 },
  { name: 'name:', score: 77 },
  { name: 'name:', score: 42 }
];

const scores = document.querySelector('#scores');
// function chore() {
//   Tasks.forEach((task) => {
//     workList.innerHTML += `<li class="item-list" data-key="${task.index}">
//           <div class="checkList">
//               <input type="checkbox" name="checkbox" id="checkbox" data-key="${task.index}">
//               <input type="text" id="inputList"  value="${task.description}">
//               <button data-key="${task.index}" class="move-item"><i class="fas fa-ellipsis-v"></i></button>
//           </div>
//       </li>`;
//   });
// }
function scoreSheet() {
  scoreRecord.forEach((score) => {
    scores.innerHTML += `<tr><td>${score.name}</td><td>${score.score}</td></tr>`;
  });
}

scoreSheet();