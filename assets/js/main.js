var libs = require('./lib');

angular
	.module('app',[])
	.directive('frontPage',require('./modules/frontpage/frontpage'))
	;


angular.element(document).ready(function(){
	angular.bootstrap(document,['app']);
});