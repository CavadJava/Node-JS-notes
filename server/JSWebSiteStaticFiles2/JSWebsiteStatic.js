var http = require("http");
var fs = require("fs");
var app = http.createServer(function(req,res){
	if(req.method ==="GET"){
		switch(req.url){
			case "/Index.html":
				fs.readFile("Index.html",function(err,data){
					if(err) throw err;
					res.writeHead(200,{"Content-Type":"text/html"});
					res.write(data.toString());
					res.end();
				});
			break;
			case "/Add.html":
				fs.readFile("Add.html",function(err,data){
					if(err) throw err;
					res.writeHead(200,{"Content-Type":"text/html"});
					res.write(data.toString());
					res.end();
				});
			break;
			case "/Remove.html":
				fs.readFile("Remove.html",function(err,data){
					if(err) throw err;
					res.writeHead(200,{"Content-Type":"text/html"});
					res.write(data.toString());
					res.end();
				});
			break;
			case "/Find.html":
				fs.readFile("Find.html",function(err,data){
					if(err) throw err;
					res.writeHead(200,{"Content-Type":"text/html"});
					res.write(data.toString());
					res.end();
				});
			break;
			case "/Edit.html":
				fs.readFile("Edit.html",function(err,data){
					if(err) throw err;
					res.writeHead(200,{"Content-Type":"text/html"});
					res.write(data.toString());
					res.end();
				});
			break;
			default:
				res.writeHead(404,{"Content-Type":"text/html"});
				res.write("404 Not Found!!");
				res.end();
			console.log("invalid request"+ req.url);
				
		}
	}else{
		console.log("Not supported");
	}
});
app.listen(7798);