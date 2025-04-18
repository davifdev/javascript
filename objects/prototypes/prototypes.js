function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

Person.prototype.sayName = function () {
  console.log(this.name, this.lastName);
};

const person1 = new Person("Davi", "Fernandes");
const person2 = new Person("Robson", "Pinto");
const date = new Date();
console.dir(person1);
console.dir(person2);
console.dir(date);
