module.exports = {
  create: function (req, res) {
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
  },
  subscribeToPost:function(req,res){

    var post = req.params.all().post;
    console.log("currently subscribed to: " + JSON.stringify(sails.sockets.socketRooms(req.socket)));

    sails
      .sockets
      .socketRooms(req.socket)
      .forEach(function(roomName){
          sails.sockets.leave(req.socket,roomName);
      });

      subscribeSocketToPost(req,post);

      res.status(200);
      return res.json({status:"success"});
  },
  getAll:function(req,res){
    return Post
      .find()
      .then(function(postList){

        sails.sockets.join(req.socket,'frontpage');
        res.json({
          payload:postList
        });
      });
  }
};


function subscribeSocketToPost(req,post){
  console.log('subscribing: ' +sails.sockets.id(req.socket) + ' to: ' + getRoomNameFromPostId(post));
  sails.sockets.join(req.socket,getRoomNameFromPostId(post));
}

function unsubscribeSocketFromPost(req,post){
  console.log('unsubscribing: '+ sails.sockets.id(req.socket) + ' from: ' + getRoomNameFromPostId(post));
}


function getRoomNameFromPostId(postId){
  if(!(postId)) throw new Error('cannot build room name for post: '+post);
  return "post/"+postId;
}

function notifyFrontPageRoom(req,message){
  sails.sockets.broadcast('frontpage','POST:CREATE',message,req.socket);
}