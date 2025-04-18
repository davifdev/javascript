class Person {
  constructor(name, lastName, age) {
    console.log("Hello WORD!");
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  showNameComplete() {
    console.log(this.name, this.lastName);
  }
}

const person1 = new Person("Davi", "Fernandes", 24);
person1.showNameComplete()

function Person2(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

Person2.prototype.showNameComplete = function () {
  console.log(this.name, this.lastName);
};

const person2 = new Person2("Robson", "Lima", 32);
person2.showNameComplete();
