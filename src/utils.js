// import necessary files
// Loading spinner function
// stop loading spinner function
//  render data
// get localstorage data function
// set localstorage data function
// generate userId
// clear field function
// display result function
// input checker function
// input focus function
// checker score function
// display error message function

const user = document.querySelector('#user');
const score = document.querySelector('#score');

const getLocal = () => JSON.parse(localStorage.getItem('ID'));

const setLocal = (id, data) => {
  localStorage.setItem(id, JSON.stringify(data));
};

const clearInputsFields = () => {
  user.value = '';
  score.value = '';
};

const checkInputValue = () => {
  const displayError = document.querySelector('#error');
  if (user.value === '' || score.value === '') {
    displayError.innerHTML = 'Please all input must be filled';
  } else {
    displayError.innerHTML = 'nnnn';
  }
};

export { clearInputsFields, checkInputValue };