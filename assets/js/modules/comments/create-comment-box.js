module.exports = [function () {
  return {
    scope: {
      data: '='
    },
    template: require('./create-comment-box.html'),
    controllerAs: 'createCtrl',
    bindToController: true,
    controller: ['io','postService', function (io,postService) {
      var vm = this;
      init();



      function init(){
        vm.form = {
          text:'enter a comment here',
          parent:getParentCommentId(),
          post:postService.getCurrentPost()
        };
      }

      function getParentCommentId(){
        return typeof vm.data !== 'undefined' ? vm.data.id : null;
      }

    }]
  };
}];
