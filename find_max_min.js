var business = 5435234223;
var minister = 4324324523;

if (business > minister) {
  console.log('Businesman is more powerful than minister');
} else if (business < minister) {
  console.log('minister is more powerful than business');
} else {
  console.log('they both are same');
}

var powerful = Math.max(business, minister);
console.log(powerful);
