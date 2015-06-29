module.exports = [function () {
  return {
    scope: {
      data: '='
    },
    template: require('./create-comment-box.html'),
    controllerAs: 'createCtrl',
    bindToController: true,
    controller: ['$rootScope','io','postService','commentService', function ($rootScope,io,postService,commentService) {
      var vm = this;
      vm.submit = submit;
      init();



      function init(){
        vm.form = {
          contents:'enter a comment here',
          parent:getParentCommentId(),
        };
      }

      function submit(){
        commentService
          .createComment(vm.form)
          .then(function(){
            $rootScope.$evalAsync();
          })
          .catch(function(errors){

          })
          .finally(function(){
            init();
            vm.data.reply = false;
          });
      }

      function getParentCommentId(){
        return typeof vm.data !== 'undefined' ? vm.data.id : null;
      }

    }]
  };
}];
