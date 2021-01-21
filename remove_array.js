var id = [12, 34, 12, 43, 21, 56, 78, 90, 87, 65, 43, 21];

var unique = [];

for (var i = 0; i < id.length; i++) {
  var element = id[i];
  var index = unique.indexOf(element);
  if (index == -1) {
    unique.push(element);
  }
}
console.log(unique);
