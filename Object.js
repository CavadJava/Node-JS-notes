var website = {};
website.domainName = "www.amazon.com";
website.name="cavad";
website.email="cavadjava@gmail.com";
website.age=3;
website.click=2300;
console.log(website);
console.log(website["domainName"]);
console.log(website.domainName);
console.log(website[0]);
console.log("\n");


website.setDomainName = function(domainName){
    this.domainName = domainName;
}
website.getDomainName = function(){
    return this.domainName;
}

website.setDomainName("www.ebay.com");
console.log(website.getDomainName());
console.log(website);
console.log("\n");


var website1 = {
    domainName : "www.amazon.com",
    name:"cavad",
    email:"cavadjava@gmail.com",
    age:23,click:2333,
    setDomainName : function(dn){
        this.domainName = dn;
    },
    getDomainName : function(){
        return this.domainName;
    }
};
console.log(website1);
website1.setDomainName("www.apple.com");
console.log(website1.getDomainName());
console.log("\n");


function WebSite(domainName1,name1,email1,age1,click1){
    this.domainName1 = domainName1;
    this.name1 = name1;
    this.email1 = email1;
    this.age1 = age1;
    this.click1 = click1;
    
    this.setDomainName = function(domainName1){
        this.domainName1 = domainName1;
    }
    this.getDomainName = function(){
        return this.domainName1;
    }
}

var website3 = new WebSite("javad.az","cavad","cavadjava@gmail.com","3",3000);
console.log(website3);
website3.setDomainName("www.nodejs.com");
console.log(website3.getDomainName());
console.log("\n");


function JSWebSite(domainName,name,email,age,click){
    this.domainName = domainName;
    this.name = name;
    this.email = email;
    this.age = age;
    this.click = click;
}
JSWebSite.prototype.setDomainName = function(domainName){
    this.domainName = domainName;
}
JSWebSite.prototype.getDomainName = function(){
    return this.domainName;
}
var website4 = new JSWebSite("www.azadbagirov.com","Azad","cavadjava@gmail.com","3",3000);
console.log(website4);
website4.setDomainName("www.nodejs.com");
console.log(website4.getDomainName());