const arr = [
  { name: "user", value: 1 },
  { name: "email", value: 33 },
  { name: "password", value: "hihi" }
];

const x = arr.reduce((accum, current) => {
  const key = current.name;
  const value = current.value;
  return { ...accum, [key]: value };
}, {});

console.log(x);
