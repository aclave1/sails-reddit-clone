module.exports = {
  getComments: function (req, res) {
    //find comments by params.post
    //send response: payload:comments
  },
  createComment: function (req, res) {
    //get username from session || "anonymous"
    //create comment:{userName, params.parent,post,contents,}
    //notifyPost room, res.ok with {payload:created}
  }
};

function notifyPostRoom(req,postId,response){
  var roomName = PostService.getRoomNameFromPostId(postId);
  sails.sockets.broadcast(roomName,'COMMENT:CREATE',response,req.socket);
}