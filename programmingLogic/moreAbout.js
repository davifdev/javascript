// Mais diferenças entre var/let/const
// Uma variável declarada com let não pode ser redeclarada, porém com var ela é sobrescrita
// let possui escopo de bloco e var possuí escopo global
// Uma função possuí escopo especial variáveis que são declaradas dentro delas só podem ser acessado dentro destas mesma funções
// Porém nós podemos acessar as variáveis que estão no entorno da função esse comportamento chama-se closure onde uma função interna tem acesso as variáveis externas

let nome = "Davi Fernandes";
// let nome = "Robson Ferreira";

console.log(nome); // Identifier 'nome' has already been declared

var idade = 24;
var idade = 25;

console.log(idade); // 25

function sayName() {
  var name = "Davi";
  console.log(name);
}

//console.log(name); // name is not defined
sayName();

const greeting = "Olá, Davi Bom dia! Seja bem-vindo";

function showGreeting() {
  console.log(greeting);
}

showGreeting();