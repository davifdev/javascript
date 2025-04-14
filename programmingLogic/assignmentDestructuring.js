// Atribuição via desestruturação

// Array
const gamePhases = ["Deserto", "Natureza", "Pântano"];

const [fase1, fase2, fase3] = gamePhases;

console.log(fase1, fase2, fase3);


// Objeto
const user = {
  name: "Davi",
  userClass: "Assasin Cross",
  level: 175,
}

const {name, userClass, level } = user;
console.log(name, userClass, level);
