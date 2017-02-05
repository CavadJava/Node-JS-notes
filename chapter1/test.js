var http = require('http');
var options = {
  host:'localhost',port:5000,path:'/?file=second',method:'get'
};
var processPublicTimeLine = function(response){
  console.log('finished request');
}
for(var i=0;i<2000;i++){
  http.request(options,processPublicTimeLine).end();
}