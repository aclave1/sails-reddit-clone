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
    controller: ['io', function (io) {
      var vm = this;
      vm.nodes = [{
        id: 1,
        title: 'top level',
        nodes: [{
          id: 3,
          title: 'second level',
          nodes: [
            {id: 5, title: 'third level', nodes: []}
          ]
        }]
      }];

    }]
  };
}];
