module.exports = {
	getRoomNameFromPostId:function(postId){
		if(!(postId)) throw new Error('cannot build room name for post: '+post);
		return "post/"+postId;
	}
};