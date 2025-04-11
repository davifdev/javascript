/*
Seu número é:
Raiz quadrada
Seu número é inteiro
Seu número é NaN
Arredondando para baixo: 
Arredondando para cima: 
Com duas casas decimais:
*/

let number = prompt("Digite um número:");
number = Number(number);

const result = document.querySelector(".resultado");
result.innerHTML += `<p>Seu número é: <strong>${number}</strong> </p>`;
result.innerHTML += `<p>Raiz quadrada: <strong>${Math.sqrt(
  number
)}</strong> </p>`;
result.innerHTML += `<p>Seu número inteiro: <strong>${parseInt(
  number
)}</strong> </p>`;
result.innerHTML += `<p>Seu número é NaN: <strong>${Number.isNaN(
  number
)}</strong> </p>`;
result.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(
  number
)}</strong> </p>`;
result.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(
  number
)}</strong> </p>`;
result.innerHTML += `<p>Com duas casas decimais: <strong>${number.toFixed(
  2
)}</strong> </p>`;
