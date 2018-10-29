require('colors');
var jsdiff = require('diff');

var one = 'beep bxop';
var two = 'beep boob blah';

var diff = jsdiff.diffChars(one, two);

diff.forEach(function(part){
  // green for additions, red for deletions
  // grey for common parts
  var color = part.added ? 'green' :
    part.removed ? 'red' : 'grey';
  process.stderr.write(part.value[color]);
});

console.log();
