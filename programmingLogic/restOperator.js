// Rest Operator

function calc(num1, num2, ...rest) {
  let sum = 0;
  let result;

  for (let num of rest) {
    sum += num;
    result = num1 * num2 + sum;
  }

  return result;
}

const result = calc(5, 2, 10, 20, 30);
console.log(result);
