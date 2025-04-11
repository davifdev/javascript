/*
Seu nome é:
A segunda letra do seu nome é:
Qual o primeiro índice da letra a no seu nome:
Qual o último índice da letra a no seu nome:
As últimas 3 letras do seu nome são:
As palavras do seu nome são:
Seu nome com letras maiúsculas
Seu nome com letras minúsculas
*/

const userName = prompt("Digite o seu nome: ");
const resultado = document.querySelector(".resultado");

resultado.innerHTML += `<p>Seu nome é: <strong>${userName}</strong> </p>`;
resultado.innerHTML += `<p>A segunda letra do seu nome é: <strong>${userName.charAt(
  1
)}</strong></p>`;
resultado.innerHTML += `<p>O Primeiro índice da letra a no seu nome é: <strong>${userName.indexOf(
  "a"
)}</strong> </p>`;

resultado.innerHTML += `<p>As últimas 3 letras do seu nome são: <strong> ${userName.slice(
  -3
)} </strong></p>`;

resultado.innerHTML += `<p>As palavras do seu nome são: <strong> ${userName.split(
  ""
)} </strong></p>`;

resultado.innerHTML += `<p>O último índice da letra a no seu nome é: <strong> ${userName.lastIndexOf(
  "a"
)} </strong></p>`;
resultado.innerHTML += `<p>Seu nome em letras maiúsculas: <strong>${userName.toUpperCase()} </strong></p>`;
resultado.innerHTML += `<p>Seu nome em letras minúsculas:  <strong>${userName.toLowerCase()}</strong></p>`;
