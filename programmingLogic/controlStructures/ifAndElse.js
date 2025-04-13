// Podemos usar a instrução if  se quisermos executar um bloco de código somente se a condição for verdadeira
// Podemos executar a instrução if e else se quisermos executar um bloco de código e a condição for true, ou outro bloco de código, somente se a condição seja false
// Se tivermos várias expressões, podemos usar if e else diversas vezes para executar blocos de códigos diferentes, de acordo com condições distintas.
// Quando nós temos um encadeamento de if e else quando ele encontrar a primeira condição que seja verdadeira ele sai do fluxo de execução

const userName = "Davi Fernandes";

if (typeof userName === "string" && userName === "Davi") {
  console.log("Bem vindo Davi!");
}

const sum = 10 + 6;

if (sum === 15) {
  console.log("O resultado é 15");
} else {
  console.log("O resultado é diferente de 15");
}

const horario = 13;

if (horario <= 12) {
  console.log("Bom dia!");
} else if (horario <= 18) {
  console.log("Boa tarde!");
} else if (horario <= 24) {
  console.log("Boa noite!");
}

console.log("Cheguei aqui!");