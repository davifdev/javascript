const form = document.querySelector(".form");
const imcResult = document.querySelector(".imc");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const peso = e.target.elements["peso"];
  const altura = e.target.elements["altura"];

  const imc = calculaIMC(peso.value, altura.value);
  const result = getMsgAndResult(imc);

  imcResult.innerHTML = result;
});

function calculaIMC(peso, altura) {
  const calcIMC = peso / altura ** 2;
  return calcIMC.toFixed(2);
}

function getMsgAndResult(imc) {
  const mensagens = [
    "Magreza",
    "Normal",
    "Sobrepeso",
    "Obesidade grau I",
    "Obesidade grau II",
    "Obesidade grau III",
  ];

  if (imc < 18.5) return `Seu IMC ${imc} (${mensagens[0]})`;
  if (imc < 24.9) return `Seu IMC ${imc} (${mensagens[1]})`;
  if (imc < 29.9) return `Seu IMC ${imc} (${mensagens[2]})`;
  if (imc < 34.9) return `Seu IMC ${imc} (${mensagens[3]})`;
  if (imc < 39.9) return `Seu IMC ${imc} (${mensagens[4]})`;
  return `Seu IMC ${imc} (${mensagens[5]})`;
}
