var http = require('http');
var fs = require('fs');
http.createServer(function(req,resp){
  fs.readFile('C:\\Users\\cavad\\Documents\\Node Js projects\\chapter1\\filereadytest.js','utf8',function(err,data){
    if(err){
      resp.write('Could not find or open file for reading\n');
    }else{
      resp.write(data);
    }
    resp.end();
  });
}).listen(5000,function(){console.log('Node started...');});