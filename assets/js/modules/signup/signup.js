module.exports = function(){
  return {
    scope:{},
    template:require('./signup.html'),
    restrict:'E',
    bindToController:true,
    controllerAs:'signupCtrl',
    controller:['$rootScope','io','user',function($rootScope,io,user){
      var vm = this;
      vm.form = {};
      vm.signup = function(){
        io.post('/user',vm.form,function(response){
          if(response.username){
            user.username = response.username;
            vm.signedIn = user.signedIn = true;
            $rootScope.$evalAsync();
          }
        });
      };
    }]
  };
};
