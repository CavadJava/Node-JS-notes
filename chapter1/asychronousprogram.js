var http = require('http');
var fs = require('fs');

function writeNumbers(resp){
  var counter = 0;
  for(var i=0;i<100;i++){
    counter++;
    resp.write(counter.toString() + "\n");
  } 
}
http.createServer(function(req,resp){
  var query = require('url').parse(req.url).query;
  console.log("query:"+query);
  var app = require('querystring').parse(query).file + ".js";
  console.log("App:"+app);
  
  //content header
  resp.writeHead(200,{'Content-Type':'text/plain'});
  
  //write out numbers
  writeNumbers(resp);
  
  //timer to open file and read contents
  setTimeout(function(){
    console.log('opening ' + app);
    
    // open and read in file contents
    fs.readFile(app,'utf8',function(err,data){
      if(err){
        resp.write('Could not found or open file for reading\n');
      }else{
        resp.write(data);
      }
      
      //response is done
      resp.end();
    });
  },2000);
}).listen(5000);