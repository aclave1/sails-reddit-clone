module.exports = ['$rootScope','$q','io','postService',function($rootScope,$q,io,postService){
  var srvc = this;
  var map = {};

  srvc.nodes = [];

  srvc.createComment = createComment;
  srvc.getComments = getComments;
  srvc.getNodes = getNodes;


  

  function getNodes(){
  	return srvc.nodes;
  };

  function createComment(comment){
  	var url = '/post/'+postService.getCurrentPost()+'/comment';
  	return $q(function(res,rej){
	    io.post(url,comment,function(response){
	    	if(response.hasErrors){
	    		rej(response.errors);
	    	}
	    	receiveComments(response.payload);
	    	res();
	    });
  	});
  }

  function getComments(){
  	return $q(function(res,rej){
  	 io
      .get('/post/'+postService.getCurrentPost()+'/comment',function(response){
      	if(!response.payload) rej();
       	tree(response.payload);
       	watchPostComments();
       	res(srvc.nodes);
      });
  	});
  }

  function tree(flatArray){
    //find all the parents
    for(var i=flatArray.length-1; i >= 0;i--){
      var el = flatArray[i];
      el.nodes = [];
      if(el.parent === null){
        map[el.id] = el;
        srvc.nodes.push(el);
        flatArray.splice(i,1);
      }else if(map[el.parent]){
        //if a previous iteration added this element's parent to the map, add it as a child now
        addToParentAndMap(el);
        flatArray.splice(i,1);
      }
    }
    //continuously pop the front element off the array and try to find its parent in the map
    //if the parent's not there, it's further forward in the array so just push the el to the back and try again later
    while(flatArray.length > 0){
      var el = flatArray.shift();
      if(map[el.parent]){
        addToParentAndMap(el);
      }else{
        flatArray.push(el);
      }
    }
  }
  
  function addToParentAndMap(el){
    map[el.parent].nodes.push(el);
    map[el.id] = el;
  }

  function receiveComments(comments){
  	var _comments = typeof comments.length !== 'undefined' ? comments : [comments];
  	tree(_comments);
  }

  function watchPostComments(){
  	io.on('COMMENT:CREATE',function(message){
  		receiveComments(message.payload);
  		$rootScope.$evalAsync();
  	});
  }



}];
