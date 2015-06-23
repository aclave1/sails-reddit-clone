module.exports = [function FrontPageDirective(){
	return {
    scope:{},
		template:require('./frontpage.html'),
    controllerAs:'frontPageCtrl',
    bindToController:true,
		controller:[function(){
      var vm = this;
    }]
	};
}];
