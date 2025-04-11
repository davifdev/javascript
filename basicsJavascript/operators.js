// Operadores em Javascript

// Operadores Aritméticos
// Adição = +
// Subtração = -
// Multiplicação = *
// Divisão = /
// Resto da divisão / Módulo = %
// Potenciação = **

// Precedência dos operadores aritiméticos
// (), **, / * %, + -

const num1 = 5;
const num2 = 3;

const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
const module = num1 % num2;
const pontetiation = num1 ** num2;

// Operadores de incremento e decremento, pós incremento e pós decremento

const count = 10;

// Pré Incremento
++count;

// Pré Decremento
--count;

// Pós Incremento
count++;

// Pós Decremento
count--;

// Operadores de atribuição
// =, +=, -=, *=, /=, **=, %=
let num = 1;
num = 10;
num += 10; // num = num + 10;
num -= 10; // num = num - 10;
num *= 10; // num = num * 10;
num /= 10; // num = num / 10;
num %= 10; // num = num % 10;
num **= 10; // num = num ** 10;

// Operadores de comparação
// ==, ===, !=, !==, >, <, >=, <=
const x = 5;
const y = 4;
console.log(x == y); // Igual a
console.log(x === y); // Igual a tanto valor quanto tipo
console.log(x != y); // Diferente de
console.log(x !== y); // Diferente de tanto valor quanto tipo
console.log(x > y); // Maior que
console.log(x < y); // Menor que
console.log(x >= y); // Maior ou igual
console.log(x <= y); // Menor ou igual

// Operadores lógicos
// And &&, Or ||, Not !

// And
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

// Or
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

// Not
console.log(!true); // false
console.log(!false); // true
