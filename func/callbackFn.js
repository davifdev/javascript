function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function f1(callback) {
  setTimeout(() => {
    console.log("Tarefa 1");
    if (callback) callback();
  }, rand(1, 3));
}

function f2(callback) {
  setTimeout(() => {
    console.log("Tarefa 2");
    if (callback) callback();
  }, rand(1, 3));
}

function f3(callback) {
  setTimeout(() => {
    console.log("Tarefa 3");
    if (callback) callback();
  }, rand(1, 3));
}

f1(f1Callback);

function f1Callback() {
  f2(f2Callback)
}

function f2Callback() {
  f3(f3Callback)
}

function f3Callback() {
  console.log("Terminou!");
}

function greeting(name) {
  console.log(`Hello ${name}`);
}

function getUser(callback) {
  const name = "Davi Fernandes de Lima";
  callback(name);
}

getUser(greeting);