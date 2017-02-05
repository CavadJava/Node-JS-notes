var fs = require('fs');
var contents = fs.readFileSync('./user.js');
var callback = function(err,contents){
 console.log(contents);
}
fs.readFile('./user.js',callback);