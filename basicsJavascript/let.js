// A váriavel let é utilizada quando precisa reatribuir um valor a ela, e pode ser inicializada com um valor vazio.
let name = "Francisco";
name = "Davi";
console.log(name) // Davi;

// Variáveis declaradas com var podem ser redeclaradas. diversas vezes, com let não é possível redeclarar.
// Let possui escopo de bloco var possui um escopo global.
var lastName = "Lima";
var lastName = "Fernandes";
var lastName = "Souza";
console.log(lastName) // Souza;

let age = 24;
let age = 25;
console.log(age) // Indentifier age has already been declared.