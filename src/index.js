import { getData, postData } from './fetchApi.js';
import { checkInputValue, clearInputsFields } from './utils.js';

getData();
postData();

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', () => {
  console.log('clicked')
  clearInputsFields();
  checkInputValue();
});