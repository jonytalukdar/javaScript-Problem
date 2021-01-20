var marks = [12, 45, 78, 54, 43, 21];
var result = Math.min.apply(Math, marks);
console.log(result);

var min = marks[0];
for (var i = 0; i < marks.length; i++) {
  var element = marks[i];
  if (element < min) {
    min = element;
  }
}
console.log('the smallest number is : ', min);
