var module = require('./myModule.js');

var directory = process.argv[2];
var extension = process.argv[3];

module(directory, extension, function(error, files) {
  if (error) {
    console.log(error);
  }
  files.forEach(function(file){
    console.log(file);
  });
});