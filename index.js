const person = {
  name: 'Sam',
  age: 50,
  rank: 'lieutenant',
};


const work = new Promise((resolve, reject) => {
  resolve('Some data');
});

work.then((data) => {
  console.log(data);
});
