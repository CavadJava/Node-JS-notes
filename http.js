var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
  var query = require('url').parse(req.url).query;
  
  file = require('querystring').parse(query).file;
  console.log(file);
  
  res.writeHead(200,{'Content-Type':'text/plain'});

  for(var i=0;i<100;i++){
    res.write(i + '\n');
  }

  var data = fs.readFileSync("hello2.js",'utf8');
  res.write(data);
  res.end();
}).listen(3333);