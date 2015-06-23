module.exports = [function(){
  return {
    scope:{},
    template:require('./postlist.html'),
    controllerAs:'postListCtrl',
    bindToController:true,
    controller:['$scope','io',function($scope,io){
      var vm = this;
      init();



      function init(){
        vm.posts = [{title:"There are currently no posts available..."}];
        getPostList();
      }

      function getPostList(){
        io.get('/post',function(response){
          if(response.payload){
            vm.posts = response.payload;
            $scope.$evalAsync();
          }
        });
      }
    }]
  };
}];
