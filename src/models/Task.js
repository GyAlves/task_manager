const mongoose = require('mongoose');

// Defines the  data structure 
const TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
})

// The model is a wrapper for the schema, it provides an interface for creating, deleting ... 
//the data
module.exports = mongoose.model("Task", TaskSchema)
