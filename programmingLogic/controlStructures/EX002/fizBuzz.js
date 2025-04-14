// FizzBuzz

for (let index = 1; index <= 100; index++) {
  checkFizzBuzz(index);
}

function checkFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(num, "FizzBuzz");
  } else if (num % 3 === 0) {
    console.log(num, "Fizz");
  } else if (num % 5 === 0) {
    console.log(num, "Buzz");
  } else {
    console.log(num);
  }
}
