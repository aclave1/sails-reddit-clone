var libs = require('./lib');
angular
	.module('app',['ui.tree'])
	.directive('frontPage',require('./modules/frontpage/frontpage'))

  .directive('signUp',require('./modules/signup/signup'))
  .service('user',require('./modules/user/userfactory'))
  .directive('userDash',require('./modules/user/userdash'))


  .directive('post',require('./modules/post/post'))
  .directive('postlist',require('./modules/post/postlist'))
  .directive('postlistItem',require('./modules/post/postlist-item'))
  .directive('createPost',require('./modules/post/createpost'))
  .service('postService',require('./modules/post/postservice'))

  .directive('commentList',require('./modules/comments/comment-list'))
  .directive('comment',require('./modules/comments/comment'))
  .directive('createCommentBox',require('./modules/comments/create-comment-box'))
  .service('commentService',require('./modules/comments/commentservice'))

  .factory('io',require('./SocketFactory'))
	;


angular.element(document).ready(function(){
	angular.bootstrap(document,['app']);
});
