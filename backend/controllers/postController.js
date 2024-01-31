const Post = require("../models/postModel.js");

//@desc - Get all posts
//@Route - GET /posts/
const getAllPosts = (req, res) => {
  Post.find()
    .then((Post) => res.status(200).json(Post))
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

//@desc - Create posts
//@Route - POST /posts/add
const addPosts = (req, res) => {
  const { title, Description, author } = req.body;

  const newPost = new Post({
    title,
    Description,
    author,
  });

  newPost
    .save()
    .then(() => res.status(200).json("Post added succesfully"))
    .catch((err) => res.status(400).json({ Error: err }));
};

//@desc - Get each post by id
//@Route - GET /posts/:id
const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((Post) => res.status(200).json(Post))
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

//@desc - Update post
//@Route - PUT /posts/update/:id
const updatePost = (req, res) => {
  Post.findById(req.params.id)
    .then((Post) => {
      Post.title = req.body.title;
      Post.Description = req.body.Description;
      Post.author = req.body.author;

      Post.save()
        .then(() => res.status(200).json("Post updated"))
        .catch((err) => res.status(400).json({ Error: err }));
    })

    .catch((err) => res.status(400).json({ Erro: err }));
};

//@desc - Delete post
//@Route - DELETE /posts/:id
const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Post deleted"))
    .catch((err) => res.status(400).json({ Error: err }));
};

module.exports = {
  getAllPosts,
  addPosts,
  getPost,
  updatePost,
  deletePost,
};
