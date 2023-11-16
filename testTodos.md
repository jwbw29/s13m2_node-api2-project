#### 1 [GET] /api/posts

- If there's an error in retrieving the _posts_ from the database:
  - [x] respond with HTTP status code `500`.
  - [x] return the following JSON: `{ message: "The posts information could not be retrieved" }`.

#### 2 [GET] /api/posts/:id

- If the _post_ with the specified `id` is not found:

  - [x] return HTTP status code `404` (Not Found).
  - [x] return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If there's an error in retrieving the _post_ from the database:
  - [x] respond with HTTP status code `500`.
  - [x] return the following JSON: `{ message: "The post information could not be retrieved" }`.

#### 3 [POST] /api/posts

- If the request body is missing the `title` or `contents` property:

  - [x] respond with HTTP status code `400` (Bad Request).
  - [x] return the following JSON: `{ message: "Please provide title and contents for the post" }`.

- If the information about the _post_ is valid:

  - [x] save the new _post_ the the database.
  - [x] return HTTP status code `201` (Created).
  - [x] return the newly created _post_.

- If there's an error while saving the _post_:
  - [x] respond with HTTP status code `500` (Server Error).
  - [x] return the following JSON: `{ message: "There was an error while saving the post to the database" }`.

#### 4 [PUT] /api/posts/:id

- If the _post_ with the specified `id` is not found:

  - [x] return HTTP status code `404` (Not Found).
  - [x] return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If the request body is missing the `title` or `contents` property:

  - [x] respond with HTTP status code `400` (Bad Request).
  - [x] return the following JSON: `{ message: "Please provide title and contents for the post" }`.

- If there's an error when updating the _post_:

  - [x] respond with HTTP status code `500`.
  - [x] return the following JSON: `{ message: "The post information could not be modified" }`.

- If the post is found and the new information is valid:

  - [x] update the post document in the database using the new information sent in the `request body`.
  - [x] return HTTP status code `200` (OK).
  - [x] return the newly updated _post_.

#### 5 [DELETE] /api/posts/:id

- If the _post_ with the specified `id` is not found:

  - [ ] return HTTP status code `404` (Not Found).
  - [ ] return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If there's an error in removing the _post_ from the database:

  - [ ] respond with HTTP status code `500`.
  - [ ] return the following JSON: `{ message: "The post could not be removed" }`.

#### 6 [GET] /api/posts/:id/comments

- If the _post_ with the specified `id` is not found:

  - [ ] return HTTP status code `404` (Not Found).
  - [ ] return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If there's an error in retrieving the _comments_ from the database:

  - [ ] respond with HTTP status code `500`.
  - [ ] return the following JSON: `{ message: "The comments information could not be retrieved" }`.

# TEST RESULTS

✓ [0] sanity check (1 ms)
server.js
[GET] /api/posts
✓ [1] can get the correct number of posts (21 ms)
✓ [2] can get all the correct posts (5 ms)
[GET] /api/posts/:id
✓ [3] can get all the correct posts by id (6 ms)
✓ [4] responds with a 404 if the post is not found (3 ms)
[POST] /api/posts
✓ [5] responds with a 201 (8 ms)
✓ [6] responds with a new post (5 ms)
✓ [7] on missing title or contents responds with a 400 (3 ms)
[PUT] /api/posts/:id
✓ [8] responds with updated user (2 ms)
✓ [9] saves the updated user to the db (4 ms)
✓ [10] responds with the correct message & status code on bad id (2 ms)
✓ [11] responds with the correct message & status code on validation problem (4 ms)
[DELETE] /api/posts/:id
✕ [12] responds with a 404 if the post is not found (4 ms)
✕ [13] responds with the complete deleted post (3 ms)
✕ [14] removes the deleted post from the database (3 ms)
[GET] /api/posts/:id/comments
✕ [15] responds with a 404 if the post is not found (2 ms)
✕ [16] can get all the comments associated to the posts with given id (2 ms)
