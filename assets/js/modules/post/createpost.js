module.exports = [function(){
  return {
    scope:{},
    template:require('./createpost.html'),
    controllerAs:'createPostCtrl',
    bindToController:true,
    controller:['io',function(io){
      var vm = this;

      vm.form = {};
      vm.createMode = false;

      vm.toggleCreateMode = toggleCreateMode;
      vm.create = create;







      function create(){
        io.post('/post',vm.form,function(response){
          window.location.href = response.link;
        });
      }

      function toggleCreateMode(){
        vm.createMode = !vm.createMode;
      }
    }]
  };
}];
