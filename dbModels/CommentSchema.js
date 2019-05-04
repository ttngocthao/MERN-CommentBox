//this file will define a data template for a collection
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  time: { type: Date, default: Date.now },
  photoUrl: { type: String }
});

module.exports = mongoose.model("comments", CommentSchema);
//'comments' is the name of a collection in socialMedia database
//Comment will be used in other file.
