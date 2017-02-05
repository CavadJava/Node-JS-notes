var http = require("http");
var server = http.createServer(function(req,res){
	console.log(req.method);
	console.log(req.url);
	
	if(req.method === 'GET'){
		switch(req.url){
			case "/":
			case "/index.html":
			var html = "<html><title>Index Page</title><body>" +
			"<a href='/add.html'>Add</a> " +
			"<a href='/remove.html'>Remove</a> " +
			"<a href='/find.html'>Find</a> " +
			"<a href='/edit.html'>Edit</a> " +
			"</body></html>";
			res.setHeader("Content-Type","text/html");
			res.setHeader("Content-Encoding","utf8");
			res.end(html);
			break;
			
			case "/add.html":
			var html = "<html><title>Add Page</title><body>" +
			"Add" +
			"</body></html>";
			res.setHeader("Content-Type","text/html");
			res.setHeader("Content-Encoding","utf8");
			res.end(html);
			break;
			
			case "/remove.html":
			var html = "<html><title>Remove Page</title><body>" +
			"Remove" +
			"</body></html>";
			res.setHeader("Content-Type","text/html");
			res.setHeader("Content-Encoding","utf8");
			res.end(html);
			break;
			
			case "/find.html":
			var html = "<html><title>Find Page</title><body>" +
			"Find" +
			"</body></html>";
			res.setHeader("Content-Type","text/html");
			res.setHeader("Content-Encoding","utf8");
			res.end(html);
			break;
			
			case "/edit.html":
			var html = "<html><title>Edit Page</title><body>" +
			"Edit" +
			"</body></html>";
			res.setHeader("Content-Type","text/html");
			res.setHeader("Content-Encoding","utf8");
			res.end(html);
			break;
			
			default:
			var html = "<html><title>Find Page</title><body>" +
			"404 Not Found" +
			"</body></html>";
		    res.writeHead(404,{"Content-Type":"text/html"});
			res.end(html);
			
			console.log("invalid request"+ req.url);
		}
	}
	res.end();
});
server.listen(5555);