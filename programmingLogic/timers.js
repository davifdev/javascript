// O método setInterval() vai configurar um tempo de espera fixo em cada chamada para que  ela  seja executada.
let count = 0;

const initiCount = setInterval(() => {
  console.log(++count);
}, 1000);

clearInterval(initiCount); //
//  cancela uma ação temporizada

// O método setTimeout() executa um trecho de código quando o temporizador expira

const initTimeOut = setTimeout(() => {
  console.log("Vou ser executado depois de 5s");
}, 5000);

clearTimeout(initTimeOut); // cancela o timeout previamente estabelecido
