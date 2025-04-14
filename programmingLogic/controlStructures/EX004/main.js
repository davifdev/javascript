function getTimeInSeconds(seconds) {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-br", {
    timeZone: "UTC",
  });
}

const init = document.querySelector(".iniciar");
const pause = document.querySelector(".pausar");
const reset = document.querySelector(".zerar");
const result = document.querySelector(".relogio");
let seconds = 1;
let timer;

function createInterval() {
  timer = setInterval(() => {
    result.innerHTML = getTimeInSeconds(seconds);
    seconds++;
  }, 1000);
}

init.addEventListener("click", () => {
 
  result.classList.remove("pause");
  createInterval(5000);
});

pause.addEventListener("click", () => {
  clearInterval(timer);
  result.classList.add("pause");
});

reset.addEventListener("click", () => {
  result.innerHTML = "00:00:00";
  seconds = 1;
  result.classList.remove("pause");
});
