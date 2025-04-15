// Quando uma função encontra a palavra chave return ela é finalizada

function createPerson(name, lastName, age) {
  return {
    name,
    lastName,
    age
  }
}

const person1 = createPerson("Davi", "Fernandes", 24);
console.log(person1);


// Higher order functions é uma função que recebe uma outra como argumento, ou uma função que retorna outra função
function speakPhrase(phrase) {
  return function(rest) {
    return phrase + " " + rest;
  }  
}

const phraseFn = speakPhrase("Hello");
console.log(phraseFn("Word"));


function createMultiplicator(multiplicator) {
  return function (num) {
    return num * multiplicator;
  }
}

const duplicate = createMultiplicator(2);
const triplicate = createMultiplicator(3);
const quadruplicate = createMultiplicator(4);

console.log(duplicate(2));
console.log(triplicate(2));
console.log(quadruplicate(2));
