const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    username: {
        type: String,
        required: [true, 'El nombre de usuario es obligatorio'],
        unique: true
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
    favorites: {
        type: Schema.Types.ObjectId,
        ref: 'Beach'
    }

}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema)

module.exports = User