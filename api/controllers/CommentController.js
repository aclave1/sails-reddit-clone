module.exports = {
  getComments: function (req, res) {
    var params = req.params.all();

    return Comment.find({
      post: params.post
    })
      .then(function (comments) {
        res.json({payload: comments});
      });
  },
  createComment: function (req, res) {
    var params = req.params.all();
    return Comment
      .create({
        parent: params.parent,
        contents: params.contents,
        post: params.post
      })
      .then(function (created) {
        res.json({payload:created});
      });
  }
};
