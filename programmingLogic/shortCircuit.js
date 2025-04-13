// Em javascript tudo pode ser avaliado em verdadeiro e falso
// Valores thurty e falsy

/*
Falsy Values
false
0
'',"",``
null / undefined
NaN
*/

// Qualquer coisa diferente de um falsy value é avaliado como true em javascript // thurty

// Short Circuit

// And &&

// Quando todos os valores são falsos o primeiro é retornado
console.log(false && undefined && null); // false

// Quando apenas um valor é falso esse valor é retornado
console.log(true && "Hello World" && false); // false

// Quando todos os valores são verdadeiros o último é retornado
console.log(true && 1 && "Hello Word"); // Hello Word

// Quando apenas um valor é verdadeiro ele me retorna o primeiro falso
console.log(0 && true && ""); // 0

// Or ||

// Quando todos os valores são verdadeiros o primeiro é retornado
console.log(true || 1 || "Hello Word"); // true

// Quando apenas um valor é verdadeiro ele é retornado
console.log(true || 0 || false); // true

// Quando todos os valores são falsos o último é retornado
console.log(false || 0 || undefined); // undefined

// Quando apenas um valor é falso ele retorna o primeiro verdadeiro
console.log( "Hello Word" || false || true); // Hello Word
