const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(404).json({ error });
    }
}

const createTask = async (req, res) => {
    try {
        const { name, completed } = req.body;
        const task = await Task.create({ name, completed });
        res.status(200).json({ task });
    } catch (error) {
        res.status(400).json({ error });
    }
}

const getTask = async (req, res) => {
    try {
        const { task_id } = req.params;

        const task = await Task.findOne({ _id: task_id });

        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ Error: error });
    }
}

const updateTask = async (req, res) => {

    try {
        const { task_id } = req.params;
        const { name, completed } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(task_id, { name, completed });

        res.status(200).json({ message: "Task updated", data: updatedTask })
    } catch (error) {
        res.status(400).json({ error })
    }

}

const deleteTask = async (req, res) => {

    try {
        const { task_id } = req.params;

        const deleteTask = await Task.findByIdAndDelete(task_id);

        res.status(200).json({ message: "Task deleted", data: deleteTask })

    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}