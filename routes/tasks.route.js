const router = require("express").Router();
let Task = require("../models/task.model");

router.route("/:_id").get(async (req, res) => {
  Task.find({userId: req.params._id })
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const { checked, desc, userId } = req.body;

  const newTask = new Task({
    userId,
    checked,
    desc,
  });

  newTask
    .save()
    .then(() => res.json("Task added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateCheckStatus/:id").post((req, res) => {
  Task.findById(req.params.id)
    .then((task) => {
      task.checked = req.body.checked;

      task
        .save()
        .then(() => res.json("Task updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
