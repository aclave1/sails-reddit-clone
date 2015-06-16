module.exports = {
  create: function (req, res) {
    var params = req.params.all();

    if (!(params.title && params.contents))return res.json({error: 'invalid submission'});

    return Post
      .create({
        title: params.title,
        contents: params.contents
      })
      .then(function (createdPost) {
        res.json({link:"/post/"+createdPost.id});
      });
  },
  viewPost: function (req, res) {
    var postId = req.params.all().id;
    return Post
      .findOne({id:postId})
      .then(function(foundPost){

        if(!foundPost){
          return res.view('404');
        }

        return res.view('post',foundPost);
      });
  }
};
