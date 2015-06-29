/**
 * Directive for an entire post page
 * */
module.exports = [function () {
  return {
    scope: {
      data: '='
    },
    template: require('./comment.html'),
    controllerAs: 'commentCtrl',
    bindToController: true,
    controller: [function () {
      var vm = this;
      vm.toggleReply = toggleReply;
      init();


      function init(){
        vm.data.reply = false;
      }

      function toggleReply(){
        vm.data.reply = !vm.data.reply;
      }
    }]
  };
}];
