import getLink from './getLink.js';
import display from './display.js';

const btnSubmit = document.querySelector('.btn-submit');
const board = document.querySelector('#scoresBoard');

async function postScore() {
  const newUrl = await getLink();
  btnSubmit.addEventListener('click', () => {
    const name = document.getElementById('name');
    const score = document.getElementById('score');
    fetch(newUrl, {
      method: 'POST',
      body: JSON.stringify({
        user: `${name.value}`,
        score: parseInt(score.value, 10),
      }),
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) => res.json());
    name.value = '';
    score.value = '';
  });
  const refresh = document.querySelector('.refresh');

  refresh.addEventListener('click', () => {
    fetch(newUrl)
      .then((res) => res.json())
      .then((data) => {
        board.innerHTML = '';
        display(data.result.forEach((item) => display(item.user, item.score)));
      });
  });
}

export default postScore;
