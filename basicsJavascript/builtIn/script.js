// Funções built-in são funções pré-definidas que já estáo dísponíveis na linguagem
// No navegador existe um elemento que é o pai de todos os elementos que é o objeto window

alert("Hello World!");

const userName = prompt("Digite seu nome completo: ");
const rules = confirm("Você aceita os termos e condições?");

if (rules) {
  document.writeln("Seja bem-vindo ", userName);
} else {
  document.writeln("Você não pode proseguir!");
}
