http.createServer(function(request,response){
  response.writeHead(200);
  request.pipe(response);
}).listen(3333);
//curl -d 'hello' http://localhost:3333