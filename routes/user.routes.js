const express = require('express')
const router = express.Router()

const bcrypt = require("bcrypt")
const bcryptSalt = 10

const mongoose = require('mongoose')

const User = require('./../models/user.model')



// Signup form (get)
router.get('/registro', (req, res) => res.render('pages/auth/signup-form'))

// Signup (post)
router.post('/registro', (req, res, next) => {

    const { name, email, username, password } = req.body
    console.log('HOLAAAAAAa', password)

    User
        .findOne({ username })
        .then(user => {
            if (user) {
                res.render('pages/auth/signup-form', { errorMessage: 'Nombre de usuario ya registrado' })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ name, email, username, password: hashPass })
                .then(() => res.redirect('/'))
                .catch(err => {
                    if (err instanceof mongoose.Error.ValidationError) {
                        console.log(err.errors)
                    } else {
                        next()
                    }
                })
        })
        .catch(err => console.log('error', err))
})

// Login (get)
router.get('/inicio-sesion', (req, res) => res.render('pages/auth/login-form'))

// Login (post)
router.post('/inicio-sesion', (req, res) => {

    const { username, password } = req.body
    console.log('HOLAAAAAAa', password)

    User
        .findOne({ username })
        .then(user => {

            if (!user) {
                res.render('pages/auth/login-form', { errorMessage: 'Usuario no reconocido' })
                return
            }

            if (bcrypt.compareSync(password, user.password) === false) {
                res.render('pages/auth/login-form', { errorMessage: 'Contraseña incorrecta' })
                return
            }

            req.session.currentUser = user
            console.log('Tengo aqui el usuario!', req.session)
            res.redirect('/')
        })
        .catch(err => console.log('error', err))
})


router.get('/cerrar-sesion', (req, res) => {
    req.session.destroy((err) => res.redirect("/inicio-sesion"));
})


// DETECTOR SESION
router.use((req, res, next) => req.session.currentUser ? next() : res.redirect('/inicio-sesion'))

// // PRIVATE ROUTES
// router.get('/admin', (req, res) => {
//     res.render('pages/admin', req.session.currentUser)
// })



module.exports = router