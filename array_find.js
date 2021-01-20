// var arr = [12, 34, 56, 78, 23, 45];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i]);
//   }
// }

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] == Math.max(arr)) {
//     console.log(arr[i]);
//   }
// }

var marks = [78, 76, 45, 90, 99, 76, 33];
var max = marks[0];

for (var i = 0; i < marks.length; i++) {
  var element = marks[i];
  if (element > max) {
    max = element;
  }
}
console.log('the highest value is : ', max);
