const express = require("express");
const router = express.Router();

//bring comment schema
const CommentSchema = require("../../dbModels/CommentSchema");

//@route GET api/commentsApi
//@desc get all comments
//@access public
router.get("/", (req, res) => {
  CommentSchema.find()
    .sort({ time: -1 })
    .then(comments => res.json(comments));
});

//@route POST api/commentsApi
//@desc add comment
//@access public
router.post("/", (req, res) => {
  const newComment = new CommentSchema({
    name: req.body.name,
    message: req.body.message
  });
  newComment.save().then(comment => res.json(comment));
});

//@route DELETE api/commentsApi/:id
//@desc delete comment
//@access public
router.delete("/:id", (req, res) => {
  CommentSchema.findById(req.params.id)
    .then(comment => comment.remove())
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
