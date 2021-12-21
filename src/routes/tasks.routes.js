const express = require('express');
const tasks_router = express.Router();

const { getAllTasks, createTask, updateTask, getTask, deleteTask } = require("../controllers/TasksController");

tasks_router.route("/").get(getAllTasks);
tasks_router.route("/").post(createTask);
tasks_router.route("/:task_id").get(getTask);
tasks_router.route("/:task_id").delete(deleteTask);
tasks_router.route("/:task_id").patch(updateTask);


module.exports = tasks_router