function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(new TypeError("Tipo Inválido"));
      return;
    }

    setTimeout(() => {
      resolve(msg + " PASSEI!");
    }, tempo);
  });
}

// Promise.all
const promises = [
  "Primeiro Valor",
  esperaAi("Promise1", rand(1, 5)),
  esperaAi("Promise2", rand(1, 3)),
  esperaAi("Promise3", rand(1, 4)),
  "Terminou",
];

Promise.all(promises)
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
