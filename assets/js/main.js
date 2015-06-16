var libs = require('./lib');
angular
	.module('app',[])
	.directive('frontPage',require('./modules/frontpage/frontpage'))

  .directive('signUp',require('./modules/signup/signup'))
  .service('user',require('./modules/user/userfactory'))
  .directive('userDash',require('./modules/user/userdash'))


  .directive('post',require('./modules/post/post'))
  .directive('postlist',require('./modules/post/postlist'))
  .directive('postlistItem',require('./modules/post/postlist-item'))
  .directive('createPost',require('./modules/post/createpost'))


  .factory('io',require('./SocketFactory'))
	;


angular.element(document).ready(function(){
	angular.bootstrap(document,['app']);
});
