module.exports = function(){
  return {
    scope:{},
    template:require('./signup.html'),
    restrict:'E',
    bindToController:true,
    controllerAs:'signupCtrl',
    controller:['$rootScope','$http','io','user',function($rootScope,$http,io,user){
      var vm = this;
      vm.form = {};
      vm.signup = function(){
        $http.post('/user',vm.form).then(function(response){
          var data = response.data;
          if(data.user){
            user.setUser(data.user);
            vm.signedIn = user.signedIn = true;
            $rootScope.$evalAsync();
          }
        });
      };
    }]
  };
};
