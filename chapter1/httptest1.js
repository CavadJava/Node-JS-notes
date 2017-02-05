var http = require('http');
var url = require('url');
function onrequest(request, response) {
  var pathname = url.parse(request.url).pathname;
  if (typeof rh[pathname] === 'function') {
    rh[pathname](request, response);
  } else {
    response.writeHead(404);
  response.end();
  }
}
http.createServer(onrequest).listen(5000);