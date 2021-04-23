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
    characteristics: {
        type: String,
        required: [true, 'Las caracteristicas son obligatorias']
    },
    image: {
        type: {
            type: String,
            required: [true, 'La imagen son obligatoria']
        }
    },
    location: {
        type: {
            type: String,
            required: [true, 'La localizacion es obligatoria']
        },
         coordinates: [Number]
    }, 
    comments: {
        type: String,
        required: [true, 'Los comentarios son obligatorios']
    }

})

const Beach = mongoose.model('Beach', beachSchema)

module.exports = Beach