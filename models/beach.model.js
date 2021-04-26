const mongoose = require('mongoose')
const Schema = mongoose.Schema

const beachSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },
    city: {
        type: String,
        required: [true, 'La ciudad es obligatoria']
    },
    country: {
        type: String,
        required: [true, 'El pais es obligatorio']
    },
    caption: {
        type: String,
        required: [true, 'Las caracteristicas son obligatorias']
    },
    image: {

        type: String,
        required: [true, 'La imagen es obligatoria']

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