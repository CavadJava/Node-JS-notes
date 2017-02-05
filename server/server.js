var http = require("http");
function requestListener(req,res){
	console.log(req.url);
	res.write("www.apple.com\n");
	res.write(req.url + "\n");
	res.end();
	
}
var server = http.createServer(requestListener);
server.listen(5555);