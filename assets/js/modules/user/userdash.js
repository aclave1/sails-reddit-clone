module.exports = [function(){
  return {
    scope:{},
    template:require('./userdash.html'),
    bindToController:true,
    controllerAs:'userdashCtrl',
    controller:['$rootScope','$http','user',function ($rootScope,$http,user) {
      var vm = this;
      
      (function init(){
         getUser();
      })();

      $rootScope.$watch(user.getUser,function(_user){
        vm.user = _user;
      });


      function getUser(){
         $http.get('/user').then(function(response){
            user.setUser(response.data.user);
            $rootScope.$evalAsync();
          });
      }
    }]
  };
}];
