let persons = [
  {
    name: 'Joney Talukdar',
    age: 21,
  },
  {
    name: 'Jubayer',
    age: 1,
  },
  {
    name: 'Jerry',
    age: 22,
  },
];

persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});

console.log(persons);

var arr = [1, 2, -2, 6, -7, -9, 7, 3, 9, 0, 3, 5, 8];
arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arr);
