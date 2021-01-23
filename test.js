function fibonacciIte(n) {
  let fibo = [1, 1];
  for (let i = 2; i <= n; i++) {
    let nextFibo = fibo[i - 1] + fibo[i - 2];
    fibo.push(nextFibo);
  }
  return fibo;
}

let result = fibonacciIte(10);
console.log(result);

function fibonacciRe(num) {
  if (num == 0) {
    return [0];
  }
  if (num == 1) {
    return [1, 1];
  }

  let fibo = fibonacciRe(num - 1);
  let nextFibo = fibo[num - 1] + fibo[num - 2];
  fibo.push(nextFibo);
  return fibo;
}

// var result = fibonacciRe(10);
// console.log(result);
