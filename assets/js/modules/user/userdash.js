module.exports = [function(){
  return {
    scope:{},
    template:require('./userdash.html'),
    bindToController:true,
    controllerAs:'userdashCtrl',
    controller:['$rootScope','user',function ($rootScope,user) {
      var vm = this;

      $rootScope.$watch(function(){return user.username;},function(val){
        vm.username = val;
      });

    }]
  };
}];
