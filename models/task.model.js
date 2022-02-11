const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectId;

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    userId: {
      type: ObjectId,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      minlength: 1,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
