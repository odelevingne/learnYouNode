var fs = require('fs');

var filename = process.argv[2];

file = fs.readFileSync(filename);

contents = file.toString();

fileLength = contents.split('\n').length -1;

console.log(fileLength);