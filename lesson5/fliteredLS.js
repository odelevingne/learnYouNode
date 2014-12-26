var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, function(error, list){
  list.forEach(function(file) {
    if('.' + extension === path.extname(file)) {
      console.log(file);
    }
  });
});