// super simple fetch to get friends count
const fetch = require('node-fetch');

const friendsCount = async () => {
  const url = 'https://api.vk.com/method/friends.search?count=5&access_token=33a867024cbdbe6693ca25ae7c7af13fb7a7a953ffa3725db3ac87fc3cb23484a7162320fb76aba6ea415&v=5.52';

  await fetch(url, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('data:', data);
    })
    .catch((error) => error);
};

friendsCount();

// ---
Number.prototype.b = 5;
let a = 3;
if (a.b === 5) { console.log('hi') }

// ---
const array = [
  { brend: 'adidas', count: 3 },
  { brend: 'nike', count: 8 },
  { brend: 'adidas', count: 12 },
];

array.reduce((result, el) => {
  if (result[el.brend]) {
    result[el.brend] += el.count;
  } else {
    result[el.brend] = el.count;
  }
  return result;
}, {});

console.log(array);
