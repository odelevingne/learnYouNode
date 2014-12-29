var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback){
  fs.readdir(directory, function(error, list){
    if(error) {
      return callback(error, null);
    }
    results = [];
    list.forEach(function(file) {
      if('.' + extension === path.extname(file)) {
        results.push(file);
      }
    });
    callback(null, results);
  });
};
