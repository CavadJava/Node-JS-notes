var Character = function() {
    _this = this;
    this.name = 'dustin';
 return {
   getName: function(){ 
      return _this.name;
   }
 }
};
module.exports = Character;
//require('./character')()["getName"]();