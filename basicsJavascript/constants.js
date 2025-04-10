// Uma constante não pode ser alterada, você pode pegar o valor de uma constante e colocar dentro de outra mas nunca pode alterar o valor dela, assim que é declarada tem que ser inicializada.

const sum1 = 10 + 5;
const sum2 = sum1 + 5;
const sum3 = sum1 + sum2;

console.log(sum1);
console.log(sum2);
console.log(sum3);

const age;
console.log(age) // Missing initializer in const declaration;

const name = "Davi";
name = "Jorge";
console.log(name); // Assignment to constant variable.