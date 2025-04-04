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

async function executa() {
  try {
    const frase1 = await esperaAi("Frase 1", rand(1, 3));
    console.log(frase1);

    const frase2 = await esperaAi("Frase 2", rand(1, 3));
    console.log(frase2);

    const frase3 = await esperaAi("Frase 3", rand(1, 3));
    console.log(frase3);
  } catch (error) {
    console.log(error);
  }

  console.log("Terminou");
}

executa();
