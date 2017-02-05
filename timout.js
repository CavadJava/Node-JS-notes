var http = require('http');
http.createServer(function(req,resp){
 resp.writeHead(200);
 resp.write("Dog is running.");
 setTimeout(function(){
  resp.write("Dog is done.");
  resp.end();
 },5000);//5000ms = 5 seconds
}).listen(4080);