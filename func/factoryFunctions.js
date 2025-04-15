function createPerson(name, lastName, weight, height) {
  return {
    name,
    lastName,
    weight,
    height,
    calcIMC() {
      const imc = this.weight / this.height ** 2
      return imc.toFixed(2);
    },

    get nameComplete() {
      console.log(this.name, this.lastName);
    },
    
    set nameComplete(value) {
      value = value.split(" ");
      const name = value.shift();
      const lastName = value.join(" ");
      console.log(name, lastName);
    }
  }
}

const person = createPerson("Davi", "Fernandes", 90, 1.80);
console.log(person.calcIMC());
person.nameComplete = "Robson Alves Costa";



