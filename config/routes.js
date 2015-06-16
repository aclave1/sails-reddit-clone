module.exports.routes = {
  '/': {
    view: 'home'
  },
  'post /user':'UserController.signUp',
  'post /post':'PostController.create',
  'get /post/:id':'PostController.viewPost',

};
