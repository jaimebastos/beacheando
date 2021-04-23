const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    username: {
        type: String,
        required: [true, 'El nombre de usuario es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    }, 
     email: {
        type: String,
        required: [true, 'El email es obligatorio']
    },
    favorits: {
        type: String,
    },
}, {
    timestamps: true
});


const User = mongoose.model('Usser', userSchema)

module.exports = User