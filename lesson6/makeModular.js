var module = require('./myModule.js');

var directory = process.argv[2];
var extension = process.argv[3];

module(directory, extension, function(error, files) {
  if (error) {
    console.log(error);
  }
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});