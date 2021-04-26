const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    username: {
        type: String,
        required: [true, 'El username es obligatorio']
    },
    heading: {
        type: String,
        required: [true, 'El comentario es obligatorio']
    },
    text: {
        type: String,
    },

}, {
    timestamps: true
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment