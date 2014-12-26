var fs = require('fs');

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, function(error, list){
  list.forEach(function(file) {
    if(file.split('.').pop() === extension) {
      console.log(file);
    }
  });
});