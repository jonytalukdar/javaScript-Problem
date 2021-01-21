// using for loop

function sample(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

var result2 = sample(5);
console.log(result2);

// using recursive way

function factorial(n) {
  if (n == 1) {
    console.log(n);
    return 1;
  } else {
    console.log(n, n - 1);
    return n * factorial(n - 1);
  }
}

var result = factorial(5);
console.log(result);
