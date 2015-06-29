module.exports = ['io',function(io){
  var srvc = this;

  var currentPost = null;

  srvc.setCurrentPost = function(postId){
    currentPost = typeof postId !== 'undefined' ? postId : currentPost;
  };
  srvc.getCurrentPost = function(){
    return currentPost;
  };

  srvc.subscribeToCurrentPost = function(){
  	io.get('/post/'+srvc.getCurrentPost()+'/subscribe',function(response){
  		
  	});
  };
  function watchPostMessages(){
  	console.log('watching post messages');
  }
}];
