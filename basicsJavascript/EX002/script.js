/*
Seu número é:
Raiz quadrada:
Seu número é inteiro:
Seu número é NaN:
Arredondando para baixo: 
Arredondando para cima: 
Com duas casas decimais:
*/

const result = document.querySelector(".resultado");
const yourNumber = +prompt("Digite um número: ");

result.innerHTML += `<p>Seu número é: <strong>${yourNumber}</strong></p>`;
result.innerHTML += `<p>Raiz quadrada: <strong>${Math.sqrt(
  yourNumber
)}</strong></p>`;
result.innerHTML += `<p>Seu número é inteiro: <strong>${Number.isInteger(
  yourNumber
)}</strong></p>`;
result.innerHTML += `<p>Seu número é NaN: <strong>${Number.isNaN(
  yourNumber
)}</strong></p>`;
result.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(
  yourNumber
)}</strong></p>`;
result.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(
  yourNumber
)}</strong></p>`;
result.innerHTML += `<p>Com duas casas decimais <strong>${yourNumber.toFixed(
  2
)}</strong></p>`;
