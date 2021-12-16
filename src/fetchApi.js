const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'Zl4d7IVkemOTTVg2fUdz';

const postUser = (user, score) => {
  fetch(`${baseUrl}games/${gameId}/scores/`, {
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
  // Get scores data
  const response = await fetch(`${baseUrl}games/${gameId}/scores/`);

  // Convert scores/data to Array
  const resData = await response.json();

  // Find data array
  const data = await resData.result;
  return data;
};
export { getUser, postUser };
