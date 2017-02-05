var http = require('http');
http.createServer(function(req,resp){
  resp.writeHead(200,{
      //'content-length':'123',
      //'connection':'keep-alive',
      'content-type':'text/plain'
      //'accept':'*/*'
   });
  resp.end("Hello, World!\n");
}).listen(5000);
console.log("Node js started");