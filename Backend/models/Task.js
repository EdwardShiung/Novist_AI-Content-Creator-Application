const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    taskName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enums: ['pending' , 'completed'],
        default: 'pending'
    },
    date:{
        type: String,
        required: true
    },
}, {timestamps :true})

module.exports = Task = mongoose.model('Task', TaskSchema);