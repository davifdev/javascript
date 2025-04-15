// Immediately Invoked Function Expression
((name, lastName) => {
 
  function createName() {
    return name + " " + lastName;
  }

  function showName() {
    console.log(createName());
  }

  showName();

})("Davi", "Fernandes");