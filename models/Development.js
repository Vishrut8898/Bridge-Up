const mongoose = require('mongoose')

const DevSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // createdAt: {
    //     type: Date,
    //     required: true,
    //     default: Date.now
    // }
})

module.exports = mongoose.model('Development', DevSchema)