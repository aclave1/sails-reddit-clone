/**
 * Directive for an entire post page
 * */
module.exports = [function () {
  return {
    scope: {},
    template: require('./comment-list.html'),
    controllerAs: 'commentsCtrl',
    bindToController: true,
    controller: ['$scope','io','commentService', function ($scope,io,commentService) {
      var vm = this;
      vm.nodes = commentService.nodes;

      init();

      function init(){
        getComments();
      }


      
      function getComments(){
        commentService.getComments().then(function(nodes){
          vm.nodes = nodes;
        });
      }

    }]
  };
}];
