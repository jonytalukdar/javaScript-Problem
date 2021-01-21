var speech = 'this is very easy to learngin somethign new';

var count = 0;
for (var i = 0; i < speech.length; i++) {
  var letter = speech[i];
  if (letter == ' ') {
    count++;
  }
}
count++;
console.log(count);
