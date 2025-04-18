const falar = {
  falar() {
    console.log(this.name, "está falando");
  },
};

const comer = {
  comer() {
    console.log(this.name, "está comendo");
  },
};

const dormir = {
  dormir() {
    console.log(this.name, "está dormindo");
  },
};

const personPrototype = { ...falar, ...dormir, ...comer };

function person(name, lastName, age) {
  return Object.create(personPrototype, {
    name: { value: name },
    lastName: { value: lastName },
    age: { value: age },
  });
}

const person1 = person("Davi", "Fernandes", 24);
person1.falar();
