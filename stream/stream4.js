var fs = require('fs');
var http = require('http');
http.createServer(function(request,response) {
   var newFile = fs.createWriteStream('readme_copy.md');
   var fileBytes = reques.headers['content-length'];
   var uploadedBytes = 0;

   request.pipe(newFile);

   request.on('data',function(chunk) {
      uploadedBytes +=chunk.length;
      var progress = (uploadedBytes / fileBytes)*100;
      response.write('progress: ' + parseInt(progress,10) + "%\n");
   });

   //...
}).listen(3434);