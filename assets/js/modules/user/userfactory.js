module.exports = [function(){
  function Service(){
  	var user = {
  		userName:"Anon"
  	};
  	this.setUser = function(_user){
  		user = _user;
  	};
  	this.getUser = function(){
  		return user
  	};
  }
  return new Service();
}];
