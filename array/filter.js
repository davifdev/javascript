const nums = [5, 80, 50, 30, 15, 70, 50, 30, 25, 22, 2, 1, 3, 4];

const numsFilter = nums.filter(num => num > 10);
console.log(numsFilter);

// Retorne as pessoas que tem o nome com mais de 5 letras
// Retorne as pessoas com mais de 30 anos
// Retorne as pessoas cujo nome termina com a

const persons = [
  { name: "Davi", age: 24},
  { name: "Robson", age: 32},
  { name: "Felipe", age: 25},
  { name: "Juliana", age: 27},
  { name: "Laura", age: 21},
  { name: "Lúcia", age: 48},
]

const personName = persons.filter(person => person.name.length > 5);
console.log(personName);

const personAge = persons.filter(person => person.age > 30);
console.log(personAge);

const personLastName = persons.filter(person => person.name.endsWith("a"));
console.log(personLastName);
