// O objeto Date em javascript é um objeto que fornece vários métodos para se trabalhar com datas

const date = new Date();

const _hours = date.getHours();
const _minutes = date.getMinutes();
const _seconds = date.getSeconds();
const _day = date.getDay();
const _date = date.getDate();
const _month = date.getMonth();
const _year = date.getFullYear();

console.log(
  `São ${_hours}:${_minutes}:${_seconds} do dia ${_date}/0${_month + 1}/${_year}`
);
