// Estruturas de Repetição

// O for é uma estrutura de repetição mais complexa porém possui uma flexibilidade maior para trabalhar com os elementos

// Geralmente usados com iteráveis (Array ou Strings)
const fruit = "Laranja";
const fruits = ["Abacaxi", "Uva", "Pêra"];

// String
for (let index = 0; index < fruit.length; index++) {
  // console.log(fruit[index]);
}

// Array
for (let index = 0; index < fruits.length; index++) {
  // console.log(fruits[index]);
}

// O for in ele ler os índices ou chaves de um objeto
const person = {
  name: "Davi",
  lastName: "Fernandes",
  age: 24,
  role: "Software Developer",
  stacks: "React, React Native, NodeJS, Typescrit"
}

for (let data in person) {
  console.log(data);
}

for (let index in fruits) {
  console.log(index);
}

// O for of é utilizado quando nós temos um objeto iterável, tanto string quanto array
// Retorna o valor em sim
const stacks = ["React", "React Native", "NodeJS", "Typescript"];

for (let stack of stacks) {
  console.log(stack);
}
