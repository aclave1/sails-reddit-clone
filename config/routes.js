module.exports.routes = {
  '/': {
    view: 'home'
  },
  'post /user':'UserController.signUp',

  'post /post':'PostController.create',
  'get /post':'PostController.getAll',
  'get /post/:post/subscribe':'PostController.subscribeToPost',

  'get /post/:id':'PostController.viewPost',
  'get /post/:post/comment':'CommentController.getComments',
  'post /post/:post/comment':'CommentController.createComment',
};
