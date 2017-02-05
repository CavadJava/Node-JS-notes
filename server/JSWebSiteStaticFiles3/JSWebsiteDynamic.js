var http = require("http");
var fs = require("fs");
var qs = require("querystring");

var websites = [];

var app = http.createServer(function(req,res){
	var postData="";
	if(req.method === "GET"){
		switch(req.url){
			case "/Index.html":
				fs.readFile("Index.html",function(err,data){
					if(err) throw err;
					res.writeHead(200,{"Content-Type":"text/html"});
					res.end(data.toString());
				});
			break;
			case "/Add.html":
				fs.readFile("Add.html",function(err,data){
					if(err) throw err;
					res.writeHead(200,{"Content-Type":"text/html"});
					res.end(data.toString());
				});
			break;
		}
	}else if(req.method ==="POST"){
		switch(req.url){
			case "/Add.js":
				req.on("data",function(data){
					postData+=data;
				});
				req.on("end",function(){
					var website = qs.parse(postData);
					
					console.log("Before");
					console.log(postData);
					console.log("After");
					console.log(website);
					console.log(website.txtDomainName);
					console.log(website.txtName);
					console.log(website.txtEmail);
					console.log(website.txtAge);
					console.log(website.txtClick);
					
					websites.push(website);
					
					var html = "<html><head>"
					+"<meta charse='utf8'/>"
					+"<title>Node with Dynamic Website</title>"
					+"</head>"
					+"<body>";
					html+="<table>";
					var col="<thead><tr>"
						+"<td>ID</td><td>Domain Name</td><td>Full Name</td><td>Email</td><td>Age</td><td>Click</td>"
						+"</tr></thead>";
						html+=col;
						var count=0;
						for(var i=0;i<websites.length;++i){
							var row = "<tbody><tr>" +
							"<td><strong>"+(++count)+"</strong></td>" +
							"<td>"+websites[i]['txtDomainName']+"</td>" +
							"<td>"+websites[i]['txtName']+"</td>" +
							"<td>"+websites[i]['txtEmail']+"</td>" +
							"<td>"+websites[i]['txtAge']+"</td>" +
							"<td>"+websites[i]['txtClick']+"</td>" +
							"</tr></tbody>";
							html +=row;
						}
						html+="</table>";
					html+="</body></html>";
					res.writeHead(200,{"Content-Type":"text/html"});
					res.end(html);
					
				});
			break;
		}
	}
}).listen(7778);