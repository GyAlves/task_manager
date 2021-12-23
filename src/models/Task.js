const mongoose = require('mongoose');

// Defines the  data structure 
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide name"],
        trim: true,
        maxLength: [20, "Name cannot be more than 20 characters"]
    },
    completed: Boolean,
})

// The model is a wrapper for the schema, it provides an interface for creating, deleting ... 
// the data
module.exports = mongoose.model("Task", TaskSchema)
