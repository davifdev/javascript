// O objeto Math é utilizado para realizar operações matemáticas
/*
Math.floor() => Aredonda um número para baixo;
Math.ceil() => Arredonda um número para cima;
Math.round() => Arredonda para o valor mais próximo;
Math.max() => Pega o maior número de uma sequência de números;
Math.min() => Pega o menor número de uma sequência de números;
Math.random() => pega um número aleátorio entre 0 e 1 porém o 1 não é incluido;

Math.random() * (max - min) + min => Pega um valor entre um número e outro
Math.PI => Pega o valor de pi;
Math.pow() => É usado para fazer potenciação; 
*/

const num = 1.5;

// Math.floor()
console.log(Math.floor(num));

// Math.ceil()
console.log(Math.ceil(num));

// Math.round()
console.log(Math.round(num));

// Math.max()
console.log(Math.max(1, 2, 3, 4, 5, 6));

// Math.min()
console.log(Math.min(1, 2, 3, 4, 5, 6));

// Math.random()
console.log(Math.floor(Math.random() * 10));

// Math.random() entre um valor e outro
console.log(Math.floor(Math.random() * (10 - 1) + 1));

// Math.PI
console.log(Math.PI.toFixed(2));

// Math.pow()
console.log(Math.pow(10, 2));

// Math.sqrt()
console.log(Math.sqrt(9));

const raiz = 9 ** 0.5;

console.log(raiz);

// Infinity
// No Javascript é possível dividir um número por 0 o resultado é Infinity

console.log(50 / 0);