//                 0      1       2        3
const fruits = ["Maçã", "Pêra", "Uva", "Melancia"];

fruits.unshift("Abacaxi");
fruits.push("Laranja");

const elemento1 = fruits.shift();
const elemento2 = fruits.pop();

console.log(elemento1, elemento2);
