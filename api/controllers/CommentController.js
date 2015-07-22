module.exports = {
  getComments: function (req, res) {
    var params = req.params.all();
    return Comment
      .find({
        post: params.post
      })
      .then(function (comments) {
        res.json({payload: comments});
      });
  },
  createComment: function (req, res) {
    var params = req.params.all();
    var userName = !_.isUndefined(req.session.user) ? req.session.user.userName : "Anonymous";
    return Comment
      .create({
        parent: params.parent,
        contents: params.contents,
        post: params.post,
        userName:userName
      })
      .then(function (created) {
        var postId = created.post;
        var response = {payload:created};
        notifyPostRoom(req,postId,response);
        res.ok(response);
      })
      .catch(function(error){
        res.json({
          errors:[error],
          hasErrors:true
        });
      });
  }
};

function notifyPostRoom(req,postId,response){
  var roomName = PostService.getRoomNameFromPostId(postId);
  sails.sockets.broadcast(roomName,'COMMENT:CREATE',response,req.socket);
}