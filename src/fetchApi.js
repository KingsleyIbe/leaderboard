const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'Zl4d7IVkemOTTVg2fUdz';

const postData = () => {
  fetch(`${baseUrl}games/${gameId}/scores/`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: 'Kingsley Ibe',
      score: 100,
    }),
  })
    .then((response) => response.json())
    .then((jsonObject) => console.log(jsonObject));
};

const getData = async () => {
  const response = await fetch(`${baseUrl}games/${gameId}/scores/`, {
    method: 'GET'
  })
  const resData = await response.json();

  return console.log(resData);

}

export { getData, postData };