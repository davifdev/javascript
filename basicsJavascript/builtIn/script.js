// Funções built-in são funções pré-definidas que já estão dísponíveis na linguagem
// No navegador existe um elemento que é o pai de todos os elementos que é o objeto window

const num1 = prompt("Digite um número: ");
const num2 = prompt("Digite outro número: ");
const result = Number(num1) + Number(num2);
alert(`A soma de ${num1} + ${num2} é igual á: ${result}`);

const userName = prompt("Digite seu nome: ");
const valid = confirm("Você aceita os termos e condições?");

if (valid) {
  document.writeln(userName);
}
