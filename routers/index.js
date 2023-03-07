const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const questionRouter = require("./Question");
const answerRouter = require("./Asnwer");
const commentRouter = require("./Comments");

router.get("/", (req, res) => {
  res.send("Welcome to stack overflow clone");
});


router.use("/api/question", questionRouter);
router.use("/api/answer", answerRouter);
router.use("/api/comment", commentRouter);

module.exports = router;
