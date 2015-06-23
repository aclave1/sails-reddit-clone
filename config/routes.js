module.exports.routes = {
  '/': {
    view: 'home'
  },
  'post /user':'UserController.signUp',

  'post /post':'PostController.create',
  'get /post':'PostController.getAll',

  'get /post/:id':'PostController.viewPost',
  'get /post/:id/comment':'CommentController.getComments',
  'post /post/:id/comment':'CommentController.createComment',
};
