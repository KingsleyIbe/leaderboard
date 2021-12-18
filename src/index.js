import './css/style.css';
import { postUser, getUser } from './fetchApi.js';

const displayTable = document.querySelector('#scores-list');
const loading = document.querySelector('#loading');

window.addEventListener('DOMContentLoaded', async () => {
  loading.innerHTML = 'Loading...';
  setTimeout(() => {
    loading.remove();
  }, 1000);

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

    if (userName === '' || userScore === '') {
      const displayError = document.querySelector('#error');
      displayError.innerHTML = '*All fields must be filled';
      setTimeout(() => {
        displayError.remove();
      }, 5000);
    } else {
      postUser(userName, userScore);
      clearInputsFields();
    }
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
