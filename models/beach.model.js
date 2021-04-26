const mongoose = require('mongoose')
const Schema = mongoose.Schema

const beachSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    description: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    caption: {
        type: String,
    },
    image: {

        type: String,

    },
    location: {
        type: {
            type: String,
        },
        coordinates: [Number],
    },

    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }


}, {
    timestamps: true
})

const Beach = mongoose.model('Beach', beachSchema)

module.exports = Beach