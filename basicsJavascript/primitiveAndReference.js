// Valores Primitivos x Valores por Referência

/*
 Os valores primitivos são Imutáveis - string, number, boolean, undefined, null
*/

/*
  Os valores por referência são Mutáveis - array, object, function
*/

// Valores Primitivos
let num1 = 10;
let num2 = num1;
num2 = 15;

console.log(num1, num2);

// Valores por referência
let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1];
arr2[arr2.length] = 5;

console.log(arr1, arr2);
