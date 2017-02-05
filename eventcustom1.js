var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();
logger.on('error',function(message){
  console.log('ERR:'+message);
});
logger.emit('error','Spilled Milk');
logger.emit('error','Eggs Cracked');
logger.on('info',function(message){
  console.log('INFO:'+message);
});
logger.emit('info','New Message');