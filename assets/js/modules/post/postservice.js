module.exports = [function(){
  var srvc = this;

  var currentPost = null;

  srvc.setCurrentPost = function(postId){
    currentPost = typeof postId !== 'undefined' ? postId : currentPost;
  };
  srvc.getCurrentPost = function(){
    return currentPost;
  };
}];
