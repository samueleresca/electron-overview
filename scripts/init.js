//modules inclusion
require('./scripts/infoLog');
require('./scripts/fileManager');
require('./scripts/dialogManager');

var fs = require('fs')

//On load
window.onload = function () {
  $M.infoLog();
  
  fs.readFile('scripts/test.txt', 'utf8', function(err,data) {
    console.log(data);
  });
  
  $M.fileManager();
  $M.dialogManager();
}
