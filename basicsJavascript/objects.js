// Um objeto é uma coleção de propiedades, onde cada propiedade é uma associação entre chave e valor.

const person = {
  name: "Davi",
  age: 24,
  sexo: "masc",
  role: "Fullstack Developer",
  interests: [
    "React",
    "React Native",
    "NodeJS",
    "NextJS",
    "TailwindCSS",
    "shadcn/ui",
  ],
  address: {
    qd: 55,
    lt: 39,
    city: "Aguas Lindas de Goiás",
  },
  showName() {
    console.log(this.name, this.age);
  },
};

person.showName();

function createPerson(name, lastName, age) {
  return {
    name,
    lastName,
    age,
  };
}

const person1 = createPerson("Davi", "Fernandes", 24);
console.log(person1);
