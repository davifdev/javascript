// Tipos de dados primitivos
// string, number, boolean, undefined, null
// Existem dois tipos de dados em javascript tipos de dados primitivos e tipos de dados derivados (Objetos, funções, Arrays, RegExp)

const personName = "Davi";
const personAge = 24;
const personIsOn = true;
let personCity;
const personRole = null;

console.log(typeof personName); // string;
console.log(typeof personAge);  // number;
console.log(typeof personIsOn); // boolean;
console.log(typeof personCity); // undefined;
console.log(typeof personRole); // object;

// Tipos de dados por valor x Tipos de dados por referência
let num1 = 10;
let num2 = num1;
num2 = 15;
console.log(num1, num2);

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[arr2.length] = 4
console.log(arr1, arr2);