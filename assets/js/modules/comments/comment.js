/**
 * Directive for an entire post page
 * */
module.exports = [function(){
  return {
    scope:{
     data:'='
    },
    template:require('./comment.html'),
    controllerAs:'commentCtrl',
    bindToController:true,
    controller:['io',function(io){
      var vm = this;

    }]
  };
}];
