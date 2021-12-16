// const gameId = 'Zl4d7IVkemOTTVg2fUdz';
// const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

// const fetchScores = async () => {
//   try {
//     const res = await fetch(
//       `${baseUrl}games/${gameId}/scores/`,
//     );

//     console.log(res);
//     if (!res.ok) throw new Error('Unsuccessful request');
//     return res.json();
//   } catch (error) {
//     return error;
//   }
// };

// fetchScores();

const postData = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/', {
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
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/', {
    method: 'GET'
  })
  const resData = await response.json();

  return console.log(resData);

}

export { getData, postData };