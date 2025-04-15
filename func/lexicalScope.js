function fora() {
  const x = 10;

  return function dentro() {
    console.log(x);
  }
}

const fn = fora();
fn();


function sayName() {
  const name = "Davi";
  console.log(name);
}

function showName() {
  const name = "Lúcio";
  sayName();
}

showName();