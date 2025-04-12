// Uma função é um bloco de código que executar uma tarefa específica
// Uma função é executada quando algo a invoca (a chama)
// Uma função é reutilizável e pode ser executada em qualquer lugar do código
// Por padrão uma função sempre retorna undefined se nenhum retorno for especificado
// Depois da palavra return nada mais é executado

// Definições de funções

// Function Declaration
function greatting() {
  console.log("Hello World!");
}

greatting();

// Expression Function
const sum = function () {
  console.log(10 + 5);
}

sum();

// Arrow Functions
const showName = () => console.log("Davi Fernandes");
showName();