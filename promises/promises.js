function rand(min, max) {
  max *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") reject(new TypeError("Tipo inválido!"));
      resolve(msg);
    }, time);
  });
}

esperaAi("Frase 1", rand(1, 3))
  .then((response) => {
    console.log(response);
    return esperaAi("Frase 2", rand(1, 3));
  })
  .then((response) => {
    console.log(response);
    return esperaAi("Frase 3", rand(1, 3));
  })
  .then((response) => {
    console.log(response);
  })
  .finally(() => console.log("Terminou!"))
  .catch((err) => console.log(err));
