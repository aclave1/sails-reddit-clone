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
        vm.posts = [];
        getPostList();
        initFrontPage();
      }

      function getPostList(){
        io.get('/post',function(response){
          if(response.payload.length > 0){
            vm.posts = response.payload;
            $scope.$evalAsync();
          }
        });
      }
      function initFrontPage(){
        io.on('POST:CREATE',function(message){
          vm.posts.push(message.payload);
          $scope.$evalAsync();
        });
      } 
    }]
  };
}];
