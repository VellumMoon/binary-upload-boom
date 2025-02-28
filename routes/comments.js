const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now
router.post("/createComment/:id", commentsController.createComment);
//! Route for deleting comment
router.delete("/deleteComment/:postid/:commentid", commentsController.deleteComment);


module.exports = router;
