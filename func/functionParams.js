// Arguments sustenta todos os parâmetros enviados
function showArguments() {
  for (let data of arguments) {
    console.log(data);
  }
}

// showArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Definindo valor padrão
function sum(num1 = 2, num2 = 2, num3) {
  console.log(num1 + num2 + num3);
}

// Não vai gerar erro quando divergir o número de parâmetros e de argumentos
// sum(5, undefined, 5);

// Atribuição via desestruturação com objetos
function showPerson({ name, lastName, age, role }) {
  console.log(name, lastName, age, role);
}

const person = {
  name: "Davi",
  lastName: "Fernandes",
  age: 24,
  role: "Software Developer",
};

showPerson(person);

// Atribuição via desestruturação com array
function showFruits([a, b, c, d]) {
  console.log(a, b, c, d);
}

const fruits = ["Melancia", "Uva", "Maçã", "Pêra"];
showFruits(fruits);

// Utilizando o operador ...rest
// Quando se utiliza o operador rest operator ele sempre deve ser o último parâmetro, diferente do arguments que só funciona em funções declaradas com function o rest operator funciona em todas as formas de declaração de funções

const account = (operator, acumulator, ...nums) => {
  for (let num of nums) {
    if (operator === "+") acumulator += num;
    if (operator === "-") acumulator -= num;
    if (operator === "*") acumulator *= num;
    if (operator === "/") acumulator /= num;
    if (operator === "%") acumulator %= num;
  }

  return acumulator;
};

const result = account("*", 1, 10, 20, 30);
console.log(result);
