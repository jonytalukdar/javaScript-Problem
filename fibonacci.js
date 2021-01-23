// 1 , 1, 2, 3 , 5 , 8  , 13

// usign normal function

function fibonacci(n) {
  let fibo = [1, 1];
  for (let i = 2; i <= n; i++) {
    let nextFibo = fibo[i - 1] + fibo[i - 2];
    fibo.push(nextFibo);
  }
  return fibo;
}

// var result = fibonacci(12);
// console.log(result);

// using recursive function

function fibonacciRecurisve(num) {
  // stopin condition
  if (num == 0) {
    return [0];
  }

  if (num == 1) {
    return [1, 1];
  }

  let fibo = fibonacciRecurisve(num - 1);
  let nextFibo = fibo[num - 1] + fibo[num - 2];
  fibo.push(nextFibo);
  return fibo;

  //recursive call
}

var result = fibonacciRecurisve(12);
console.log(result);
