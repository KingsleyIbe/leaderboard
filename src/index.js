import './css/style.css';
import { postUser, getUser } from './fetchApi.js';

const displayTable = document.querySelector('#scores-list');

window.addEventListener('DOMContentLoaded', async () => {
  const clearInputsFields = () => {
    const userName = document.querySelector('#user');
    const userScore = document.querySelector('#score');

    userName.value = '';
    userScore.value = '';
  };

  const submitBtn = document.querySelector('#submit');
  submitBtn.addEventListener('click', (e) => {
    const userName = document.querySelector('#user').value;
    const userScore = document.querySelector('#score').value;

    e.preventDefault();

    postUser(userName, userScore);
    clearInputsFields();
  });

  const scoreElement = (name, score) => {
    const listElem = document.createElement('li');
    const listElem1 = document.createElement('li');

    listElem1.innerHTML = `${name}: ${score} `;

    listElem.appendChild(listElem1);
    displayTable.appendChild(listElem);
  };

  const displayScores = async () => {
    const allScores = await getUser();
    allScores.forEach((score) => scoreElement(score.user, score.score));
  };
  displayScores();

  const refreshBtn = document.querySelector('#refresh');
  refreshBtn.addEventListener('click', () => {
    displayScores();
  });
});
