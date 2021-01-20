//using simple math
var x = 5;
var y = 7;
console.log('before swap x : ', x, ' y :', y);

x = x + y;
y = x - y;
x = x - y;
console.log('after swap x : ', x, ' y :', y);

// using destructuring
var a = 12;
var b = 23;
console.log('before swap a : ', a, 'b :', b);

[a, b] = [b, a];
console.log('after swap a: ', a, 'b : ', b);

//using temp

var c = 12;
var d = 34;
var temp;
console.log('before swap c : ', c, ' d :', d);

temp = c;
c = d;
d = temp;
console.log('after swap c : ', c, ' d :', d);
