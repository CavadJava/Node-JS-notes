var x = 10;
var powerLevel = function(level,x) {
  if(!x){
   return level > 9000 ? "it's over 9000!!!" : level;
  }else{
   return (level+x);
  }
};

module.exports.x = x;
module.exports.fc = powerLevel;
//> require('./powerLevel');
//{ [Function: powerLevel] x: 10, fc: [Circular] }
//> require('./powerLevel')(90);
//90
//> require('./powerLevel').x;
//10
//> require('./powerLevel').fc();
//undefined
//> require('./powerLevel').fc;
//{ [Function: powerLevel] x: 10, fc: [Circular] }