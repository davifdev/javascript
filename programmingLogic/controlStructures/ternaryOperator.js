// A instrução if e else pode ser representada por um operador ternário

const media = 6;

if (media < 6) {
  console.log("Aluno reprovado");
} else {
  console.log("Aluno aprovado");
}

const alunoResultado = media >= 6 ? "Aluno aprovado" : "Aluno reprovado";

console.log(alunoResultado);
