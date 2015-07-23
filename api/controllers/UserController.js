module.exports = {
  signUp: function (req, res) {
    //extract username from request parameters
    //handle errors
    //set user on session: {userName:userName,signedIn:true}
    //save session
    //send json to client: {user:req.session.user}
    var params = req.params.all();
    var userName = params.username ? params.username.trim() : "";

    if (userName && userName != "") {
      req.session.user = {
        userName:userName,
        signedIn:true
      };
      return req.session.save(function(){
        return res.ok({
          message: 'username set to: ' + userName,
          user:req.session.user
        });
      });
    } else {
      res.status(400);
      res.json({
        message: 'please specify a username'
      });
    }
  },
  get:function(req,res) {
    var session = req.session;
    return res.json({user:req.session.user});
  }
};