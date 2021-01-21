var statement = 'hello alien vai brother';

function reverseStrings(str) {
  var reverse = '';
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    reverse = char + reverse;
  }
  return reverse;
}

var result = reverseStrings(statement);
console.log(result);
