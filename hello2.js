var http = require('http');
var server = http.createServer();
server.on('request',function(request,response){
  response.writeHead(200);
  response.write('It is car');
  response.end();
}).listen(4444);