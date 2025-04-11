const num1 = 50;

// Converte um número para uma string
console.log(typeof num1.toString());

// Converte para um número binário
console.log(num1.toString(2));

// Fixa duas casas decimais
console.log("R$",num1.toFixed(2));

const num2 = 10.5;

// Verifica se um número é inteiro
console.log(Number.isInteger(num2));

const sum = 10 + undefined;

// Verifica se é NaN
console.log(Number.isNaN(sum));

// IEE 754-2008 é o padrão que o javascript utiliza para realizar contas e ele possui uma certa imprecisão