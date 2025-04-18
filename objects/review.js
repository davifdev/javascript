const person = new Object();
person.name = "Davi";
person.lastName = "Fernandes";
person.age = 25;
person.role = "Web e Mobile Developer";
person.sayName = function () {
  console.log(this.name, this.lastName);
};

person.getYearNasc = function () {
  const date = new Date();
  const year = date.getFullYear();
  return year - this.age;
};

console.log(person.getYearNasc());

// Factory Function
function createPerson(name, lastName, age, role) {
  return {
    name,
    lastName,
    age,
    role
  }
}

const person1 = createPerson("Davi", "Fernandes", 24, "Web & Mobile Developer");
console.log(person1);

// // Constructor function
function Person(name, lastName, age, role) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.role = role;
}

const person2 = new  Person("Davi", "Fernandes", 24, "Web & Mobile Developer");
console.log(person2);