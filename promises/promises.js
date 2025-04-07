function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(frase, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof frase !== "string")
        return reject(new TypeError("Tipo Inválido"));
      resolve(frase);
    }, tempo);
  });
}

async function executaFrase() {
  try {
    const frase1 = await esperaAi("Frase 1", rand(1, 3));
    console.log(frase1);
    const frase2 = await esperaAi("Frase 2", rand(1, 3));
    console.log(frase2);
    const frase3 = await esperaAi(3, rand(1, 3));
    console.log(frase3);
    const frase4 = await esperaAi("Frase 4", rand(1, 3));
    console.log(frase4);
    const frase5 = await esperaAi("Frase 5", rand(1, 3));
    console.log(frase5);
    console.log("Terminou");
  } catch (err) {
    console.log(err);
  }
}

executaFrase();
