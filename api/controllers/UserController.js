module.exports = {
  signUp: function (req, res) {
    var params = req.params.all();
    var userName = params.username ? params.username.trim() : "";

    var message;

    if (userName && userName != "") {
      req.session.username = userName;
      res.status(200);
      res.json({
        message: 'username set to: ' + userName,
        username:userName
      });
    } else {
      res.status(400);
      res.json({
        message: 'please specify a username'
      });
    }

  }
};
