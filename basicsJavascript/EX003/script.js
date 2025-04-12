/*
Pegar o nome, sobrenome, peso, Altura e imprimir na tela
*/

const name = document.querySelector(".nome");
const sobrenome = document.querySelector(".sobrenome");
const peso = document.querySelector(".peso");
const altura = document.querySelector(".altura");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeValue = name.value;
  const sobrenomeValue = sobrenome.value;
  const pesoValue = peso.value;
  const alturaValue = altura.value;

  const dados = {
    nomeValue,
    sobrenomeValue,
    pesoValue,
    alturaValue,
  };

  addResultado(dados);
  
  name.value = "";
  sobrenome.value = "";
  peso.value = "";
  altura.value = "";
});

function addResultado(dados) {
  const nomeResultado = document.querySelector(".nome-resultado");
  const sobrenomResultado = document.querySelector(".sobrenome-resultado");
  const pesoResultado = document.querySelector(".peso-resultado");
  const alturaResultado = document.querySelector(".altura-resultado");

  console.log(dados.alturaValue);

  nomeResultado.innerHTML += `<b>${dados.nomeValue}</b>`;
  sobrenomResultado.innerHTML += `<b>${dados.sobrenomeValue}</b>`;
  pesoResultado.innerHTML += `<b>${dados.pesoValue}</b>`;
  alturaResultado.innerHTML += `<b>${dados.alturaValue}</b>`;
}
