// Os laços são usados com frequência quando trabalhamos com arrays, o laço for é exatamente igual ao de C e de Java. é constituído de um contador de laço que, em geral recebe um valor númerico em seguida, a variável é comparada com outro valor e por fim o valor númerico é incrementado ou decrementado

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for

for (let index = 0; index < arr.length; index++) {
  // console.log(arr[index]);
}

for (let index = 20; index >= 0; index--) {
  //console.log(index)
}

for (let index = 20; index >= 0; index--) {
  if (index % 2 === 0) {
    //console.log("Par", index);
  } else {
    // console.log("Impar", index);
  }
}

// While
let index = 10;

while (index < 10) {
  console.log(index);
  index++;
}

// Do While

do {
  console.log(index);
  index++;
} while (index < 10);
