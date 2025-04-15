// Maneiras de declarar funções em javascript

// declaration function
function sayName() {
  const name = "Davi";
  console.log(name);
}

sayName();

// function expressions
const sayAge = function () {
  const age = 24;
  console.log(age);
};

sayAge();

// arrow function
const sayHello = () => console.log("Hello Word!");

sayHello();

// Funções em javascript são first-class-object uma função pode ser tratada como um dado.
