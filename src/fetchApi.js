const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'fd2424274e864c17cfe8';

const postUser = async (user, score) => {
  await fetch(`${baseUrl}games/${gameId}/scores/`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  })
    .then((response) => response.json())
    .then((jsonObject) => jsonObject);
};

const getUser = async () => {
  const response = await fetch(`${baseUrl}games/${gameId}/scores/`);
  const resData = await response.json();
  const data = await resData.result;
  return data;
};

export { getUser, postUser };