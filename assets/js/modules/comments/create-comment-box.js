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
      vm.submit = submit;
      init();



      function init(){
        vm.form = {
          contents:'enter a comment here',
          parent:getParentCommentId(),
        };
      }

      function submit(){
        var url = '/post/'+postService.getCurrentPost()+'/comment';
        io.post(url,vm.form,function(response){
          debugger;
        });
      }

      function getParentCommentId(){
        return typeof vm.data !== 'undefined' ? vm.data.id : null;
      }

    }]
  };
}];
