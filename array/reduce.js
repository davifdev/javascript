// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valors (map)

const nums = [1, 3, 4, 5, 6, 10, 12, 14, 25, 17, 19];
const sum = nums.reduce((acc, val) => {
  acc = acc + val;
  return acc;
}, 0);

console.log(sum);

const pares = nums.reduce((acc, val) => {
  if (val % 2 === 0 ) acc.push(val);
  return acc;
}, []);

console.log(pares);

const double = nums.reduce((acc, val) => {
     acc.push(val * 2);
     return acc;
}, []);

console.log(double);

// Retorne a pessoa mais velha
const persons = [
  { name: "Davi", age: 24 },
  { name: "Robson", age: 32 },
  { name: "Felipe", age: 25 },
  { name: "Juliana", age: 33 },
  { name: "Laura", age: 21 },
  { name: "Lúcia", age: 48 },
];

const oldPerson = persons.reduce((acc, value) => {
  if (acc.age > value.age) return acc;
  return value;
})

console.log(oldPerson);