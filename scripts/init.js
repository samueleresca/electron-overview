//modules inclusion
require('./scripts/infoLog');
require('./scripts/fileManager');
require('./scripts/dialogManager');

//On load
window.onload = function () {
  $M.infoLog();
  $M.fileManager();
  $M.dialogManager();
}
