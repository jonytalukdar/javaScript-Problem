//sum of array
var sumOfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;
for (var i = 0; i < sumOfArray.length; i++) {
  sum += sumOfArray[i];
}
console.log(sum);

//sum of even

var sumOfEven = 0;
for (var i = 0; i < sumOfArray.length; i++) {
  if (sumOfArray[i] % 2 == 0) {
    sumOfEven += sumOfArray[i];
  }
}
console.log(sumOfEven);

//sum of odd

var sumOfOdd = 0;
for (var i = 0; i < sumOfArray.length; i++) {
  if (sumOfArray[i] % 2 == 1) {
    sumOfOdd += sumOfArray[i];
  }
}
console.log(sumOfOdd);

// with function

function addALl() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

var result = addALl(12, 12, 12);
console.log(result);
