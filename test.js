const arr = [
  {
    id: 1
  },
  { id: 2 },
  { id: 3 },
  { id: 4 }
];

const x = arr.map(item => item.id).indexOf(4);
console.log(x);
