module.exports = [function(){
  return {
    scope:{},
    template:require('./postlist.html'),
    controllerAs:'postListCtrl',
    bindToController:true,
    controller:[function(){
      var vm = this;

      vm.posts = [
        {title:'A cool title'},
        {title:'another post'},
        {title:'a post'},
        {title:'a cute cat'},
      ];
    }]
  };
}];
