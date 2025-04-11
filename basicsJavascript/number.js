const num1 = 50;

// Converter um número para string
console.log(typeof num1.toString());

// Converte um número para binário
console.log(num1.toString(2));

// Fixar casas decimais
console.log(num1.toFixed(2));

// Verifica se um número é inteiro
console.log(Number.isInteger(num1));

// Verifica se um número é NaN

const sum = 10 * undefined;
console.log(Number.isNaN());

// IEE 754-2008 é o padrão que o javascript utiliza para realizar contas e ele possui uma certa imprecisão