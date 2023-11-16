// implement your posts router here
const express = require("express");
const Posts = require("./posts-model");

const postsRouter = express.Router();

// [x] [GET] /api/posts
postsRouter.get("/", (req, res) => {
  Posts.find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "The posts information could not be retrieved" });
    });
});

// [x] [GET] /api/posts/:id
postsRouter.get("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    post
      ? res.status(200).json(post)
      : res
          .status(404)
          .json({ message: "The post with the specified ID does not exist" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "The post information could not be retrieved" });
  }
});

// [ ] [POST] /api/posts
postsRouter.post("/", (req, res) => {
  const { title, contents } = req.body;
  !title || !contents
    ? res
        .status(400)
        .json({ message: "Please provide title and contents for the post" })
    : Posts.insert({ title, contents })
        .then(({ id }) => {
          return Posts.findById(id);
        })
        .then((post) => {
          res.status(201).json(post);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            message: "There was an error while saving the post to the database",
          });
        });
});

// [ ] [PUT] /api/posts/:id
//postsRouter.put()

// [ ] [DELETE] /api/posts/:id
//postsRouter.delete()

// [ ] [GET] /api/posts/:id/comments
//postsRouter.get()

module.exports = postsRouter;
