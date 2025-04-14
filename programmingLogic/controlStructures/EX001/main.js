function getDayOfWeek(day) {
  let dayOfWeek;
  switch (day) {
    case 0:
      return (dayOfWeek = "Domingo");
    case 1:
      return (dayOfWeek = "Segunda-Feira");
    case 2:
      return (dayOfWeek = "Terça-Feira");
    case 3:
      return (dayOfWeek = "Quarta-Feira");
    case 4:
      return (dayOfWeek = "Quinta-Feira");
    case 5:
      return (dayOfWeek = "Sexta-Feira");
    case 6:
      return (dayOfWeek = "Sábado");
    default:
      return (dayOfWeek = "O dia não é válido");
  }
}

function getMonthOfYear(month) {
  let monthOfYear;
  switch (month) {
    case 0:
      return (monthOfYear = "Janeiro");
    case 1:
      return (monthOfYear = "Fevereiro");
    case 2:
      return (monthOfYear = "Março");
    case 3:
      return (monthOfYear = "Abril");
    case 4:
      return (monthOfYear = "Maio");
    case 5:
      return (monthOfYear = "Junho");
    case 6:
      return (monthOfYear = "Julho");
    case 7:
      return (monthOfYear = "Agosto");
    case 8:
      return (monthOfYear = "Setembro");
    case 9:
      return (monthOfYear = "Outrubro");
    case 10:
      return (monthOfYear = "Novembro");
    case 11:
      return (monthOfYear = "Dezembro");
  }
}

const date = new Date();

function zeroLeft(num) {
  return num > 10 ? num : `0${num}`;
}

const dayOfWeek = getDayOfWeek(date.getDay());
const month = getMonthOfYear(date.getMonth());
const actualDate = date.getDate();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = zeroLeft(date.getMinutes());

const result = document.querySelector(".resultado");

result.innerHTML = `${dayOfWeek} ${actualDate} de ${month} de ${year} as ${hours}:${minutes}`;
