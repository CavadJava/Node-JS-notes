function add(domainName,name,email,age,click){
  var website = [];
  website[0]=domainName;
  website[1]=name;
  website[2]=email;
  website[3]=age;
  website[4]=click;
  return website;
}
var domainName = "www.cavadbagirov.wordpress.com";
var name = "cavad";
var email = "cavadjava@gmail.com";
var age = 24;
var click = 3000;
var website = add(domainName,name,email,age,click);
console.log(website);
console.log("\n");console.log("\n");



var remove = function(domainName){
 console.log(domainName);
 return domainName;
}

var dn = remove("www.cavadbagirov.wordpress.com");
console.log(dn);


function output(domainName, name, email, age, click){
	console.log(domainName+ "|" +name+ "|" +email+ "|" +age+ "|" +click);
}
function read(callback, domainName, name, email, age, click){
	console.log("read");
	callback(domainName, name, email, age, click);
}
read(output,"javad.az","javad","cavadjava@gmail.com","3",2000);
console.log("\n");console.log("\n");


function WebSite(d, n, e, a, c){//1
 var myDomainName, myName, myEmail, myAge, myClick;//4
 function set(domainName, name, email, age, click){//3
  myDomainName = domainName;
  myName = name;
  myEmail = email;
  myClick = click;
  myAge = age;
 }
 set(d,n,e,a,c);//2
 return [myDomainName,myName,myEmail,myClick,myAge];
}//5
var website = WebSite("javad.az","javad","cavadjava@gmail.com","3",3000);
console.log(website);
var dn1 = function(x){
	
