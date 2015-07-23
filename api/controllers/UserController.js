module.exports = {
  signUp: function (req, res) {
    //extract username from request parameters
    //handle errors
    //set user on session: {userName:userName,signedIn:true}
    //save session
    //send json to client: {user:req.session.user}
  },
  get:function(req,res) {
    var session = req.session;
    return res.json({user:req.session.user});
  }
};