module.exports = {
  create: function (req, res) {
    //validate params look like this: {title,contents}
    //create post
    //create response: {payload:createdPost}
    //notify frontpage room with
    //send json back to client
    var params = req.params.all();
    if (!(params.title && params.contents))return res.json({error: 'invalid submission'});

    return Post
      .create({
        title: params.title,
        contents: params.contents,
      })
      .then(function (createdPost) {
        var message = {
          payload:createdPost
        };
        notifyFrontPageRoom(req,message);
        res.json(message);
      });
  },
  viewPost: function (req, res) {
    //extract id from params
    //find one post by id
    //if no post, res.view('404')
    //res.view('post',foundPost)
    var postId = req.params.all().id;
    return Post
      .findOne({id:postId})
      .then(function(foundPost){
        if(!foundPost){
          return res.view('404');
        }
        return res.view('post',foundPost);
      });
  },
  getAll:function(req,res){
    //find all posts
    //subscribe socket to frontpage
    //send response: {payload:allposts}
  },
  subscribeToPost:function(req,res){
    var post = req.params.all().post;

    sails
      .sockets
      .socketRooms(req.socket)
      .forEach(function(roomName){
          sails.sockets.leave(req.socket,roomName);
      });

      subscribeSocketToPost(req,post);

      res.status(200);
      return res.json({status:"success"});
  }
};

function subscribeSocketToPost(req,post){
  console.log('subscribing: ' +sails.sockets.id(req.socket) + ' to: ' + getRoomNameFromPostId(post));
  sails.sockets.join(req.socket,getRoomNameFromPostId(post));
}


function getRoomNameFromPostId(postId){
  if(!(postId)) throw new Error('cannot build room name for post: '+post);
  return "post/"+postId;
}

function notifyFrontPageRoom(req,message){
  sails.sockets.broadcast('frontpage','POST:CREATE',message,req.socket);
}