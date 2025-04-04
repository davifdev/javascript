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

function baixaPagina() {
  const emCache = false;

  if (emCache) return Promise.resolve("Usando página em cache");

  return esperaAi("Página Carregada", rand(1, 3));
}

baixaPagina()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
