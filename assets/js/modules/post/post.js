/**
 * Directive for an entire post page
 * */
module.exports = [function(){
  return {
    scope:{
      postid:'=',
      posttitle:'=',
      postcontents:'=',
    },
    template:require('./post.html'),
    controllerAs:'postCtrl',
    bindToController:true,
    controller:['io','postService',function(io,postService){
      var vm = this;
      init();


      function init(){
        postService.setCurrentPost(vm.postid);

        io
          .get('/post/'+vm.postid+'/comments',function(response){
            vm.comments = response.payload;
          });
      }
    }]
  };
}];
