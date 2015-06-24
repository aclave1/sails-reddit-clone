/**
 * Directive for an entire post page
 * */
module.exports = [function () {
  return {
    scope: {
      data: '='
    },
    template: require('./comment-list.html'),
    controllerAs: 'commentsCtrl',
    bindToController: true,
    controller: ['$scope','io','postService', function ($scope,io,postService) {
      var vm = this;
      vm.nodes = [];

      init();

      function init(){
        getComments();
      }

      function getComments(){
        io
          .get('/post/'+postService.getCurrentPost()+'/comment',function(response){
            vm.nodes = mapToNodes(response.payload);
            $scope.$evalAsync();
          });
      }

      function mapToNodes(flatComments) {
        var treeMap = {};
        var _flat = [];
        var _result = [];

        flatComments.forEach(function(comment){
          console.log('loop');
          if(comment.parent === null){
            treeMap[comment.id] = comment;
            _result.push(comment);
          }else{
            _flat.push(comment);
          }
          comment.nodes = [];
        });

        mapChildren(treeMap,_flat);


        return _result;
      }

      function mapChildren(map,children){
        var flat = [];
        _.each(children,function(comment){
          console.log('loop');
          var parent = map[comment.parent];
          if(typeof parent !== 'undefined'){
            parent.nodes.push(comment);
            map[comment.id] = comment;
          }else{
            flat.push(comment);
          }
        });
        if(flat.length > 0){
          mapChildren(map,flat)
        }else{
          return;
        }
      }

      function getFlatComments() {
        return [
          {
            id: 1,
            contents: "commend number: 1",
            parent: null,
            post: 1
          },
          {
            id: 2,
            contents: "commend number: 2",
            parent: 1,
            post: 1
          },
          {
            id: 3,
            contents: "commend number: 3",
            parent: 1,
            post: 1
          },
          {
            id: 4,
            contents: "commend number: 4",
            parent: 2,
            post: 1
          },
          {
            id: 5,
            contents: "commend number: 5",
            parent: 3,
            post: 1
          },
          {
            id: 6,
            contents: "commend number: 6",
            parent: 2,
            post: 1
          },
          {
            id: 7,
            contents: "commend number: 7",
            parent: 5,
            post: 1
          },
          {
            id: 8,
            contents: "commend number: 8",
            parent: 4,
            post: 1
          },
          {
            id: 9,
            contents: "commend number: 9",
            parent: 3,
            post: 1
          },
          {
            id: 10,
            contents: "commend number: 10",
            parent: 3,
            post: 1
          },
          {
           id:20,
            contents:"comment number: 20",
            parent:null,
            post:1
          },{
           id:21,
            contents:"comment number: 20",
            parent:20,
            post:1
          },{
           id:22,
            contents:"comment number: 20",
            parent:21,
            post:1
          },{
           id:23,
            contents:"comment number: 20",
            parent:22,
            post:1
          },{
           id:24,
            contents:"comment number: 20",
            parent:23,
            post:1
          },{
           id:25,
            contents:"comment number: 20",
            parent:24,
            post:1
          },{
           id:26,
            contents:"comment number: 20",
            parent:25,
            post:1
          },{
           id:27,
            contents:"comment number: 20",
            parent:26,
            post:1
          },


        ];
      }

    }]
  };
}];
