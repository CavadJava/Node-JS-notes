var http = require('http');
http.createServer(function(req,resp){
  resp.writeHead(200);
  resp.write("Hello,this is dog.");
  resp.end();
}).listen(41180);
console.log('Listening on port 41180');