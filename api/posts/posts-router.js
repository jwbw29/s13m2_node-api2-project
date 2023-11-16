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

// [x] [POST] /api/posts
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

// [x] [PUT] /api/posts/:id
postsRouter.put("/:id", (req, res) => {
  const { title, contents } = req.body;
  if (!title || !contents) {
    res
      .status(400)
      .json({ message: "Please provide title and contents for the post" });
  } else {
    Posts.findById(req.params.id)
      .then((changes) => {
        if (!changes) {
          res.status(404).json({
            message: "The post with the specified ID does not exist",
          });
        } else {
          return Posts.update(req.params.id, req.body);
        }
      })
      .then((updatedPost) => {
        if (updatedPost) {
          return Posts.findById(req.params.id);
        }
      })
      .then((post) => {
        if (post) {
          res.status(200).json(post);
        }
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ message: "The post information could not be modified" });
      });
  }
});

// [ ] [DELETE] /api/posts/:id
// when given an id, delete the corresponing post
//does id exist? if not, throw error. If so, proceed

postsRouter.delete("/:id", async (req, res) => {
  try {
    throw new Error("sad!");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "The post could not be removed" });
  }
});

// [ ] [GET] /api/posts/:id/comments
//postsRouter.get()

module.exports = postsRouter;
