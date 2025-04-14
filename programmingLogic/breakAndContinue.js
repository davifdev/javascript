// No momento que a palavra continue é encontrada vai pular para a proxima iteração do laço

for (let index = 0; index < 10; index++) {
  if (index === 3) {
    continue;
  }
  console.log(index);
}

let text = "";

for (let index = 0; index < 10; index++) {
  if (index === 5) {
    continue;
  }

  text += index;
}

console.log(text);

// No momento que a palavra break é encontrada o laço é encerrado

for (let index = 0; index < 10; index++) {
  if (index === 5) {
    break;
  }

  console.log(index);
}
