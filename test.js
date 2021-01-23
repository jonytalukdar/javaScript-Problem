var arr = [1, 2, 3, 4, 5, 100, 6, 7, 8, 9, 10];

// var result = arr.reduce(function (prev, curr) {
//   return prev + curr;
// }, 100);

// var max = arr.reduce(function (prev, curr) {
//   return Math.max(prev, curr);
// });
// console.log(max);
// console.log(result);

function myReduce(arr, callBack, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = callBack(acc, arr[i]);
  }
  return acc;
}

var result = myReduce(
  arr,
  function (prev, curr) {
    return prev + curr;
  },
  0
);
console.log(result);

let max = myReduce(
  arr,
  function (prev, curr) {
    return Math.max(prev, curr);
  },
  0
);
console.log(max);

let min = myReduce(
  arr,
  function (prev, curr) {
    return Math.min(prev, curr);
  },
  0
);
console.log(min);
