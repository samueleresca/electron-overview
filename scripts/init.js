//modules inclusion
require('./scripts/infoLog');
require('./scripts/fileManager');

//On load
window.onload=function(){

  $M.infoLog();
  $M.fileManager();
}
