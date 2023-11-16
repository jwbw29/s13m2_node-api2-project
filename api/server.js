// implement your server here
// require your posts router and connect it here
const express = require("express");
const postsRouter = require("./posts/posts-router");

const server = express();
server.use(express.json());
server.use("/api/posts", postsRouter);

server.get("/", (req, res) => {
  res.status(200).send(`
        <h2>Posts API</h2>
        <p>Welcome to the Posts API</p>
    `);
});

module.exports = server;
