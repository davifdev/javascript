// Hoisting é uma elevação onde funções e variáveis declaradas com a palavra var são elevadas para o topo do código sendo assim podendo ser usadas antes mesmo de serem declaradas. mas com var somente seu valor é elevado

greeting();

function greeting() {
  console.log("Hello");
}

console.log(userName); // undefined
var userName = "Davi Fernandes";

console.log(idUser); // Canot access "idUser" before initialization
let idUser = "224hg00aq11";
