function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject(new TypeError("Tipo Inválido"));
        return;
      }
      resolve(msg + " PASSEI!");
    }, tempo);
  });
}

// Promise.race
const promises = [
  esperaAi("Promise1", rand(1, 5)),
  esperaAi("Promise2", rand(1, 5)),
  esperaAi("Promise3", rand(1, 5)),
  esperaAi(2, rand(1, 5)),
];

Promise.race(promises)
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
