const express = require('express')
const router = express.Router()

const Beach = require('./../models/beach.model')
const transporter = require('./../config/nodemailer.config')

// Endpoints
// router.get('/', (req, res) => res.render('pages/index'))

router.get('/', (req, res) => {

    Beach
        .find()
        .select("image name")
        .then(allImages => res.render('pages/index', { allImages }))
        .catch(err => console.log(err))
})

router.get('/contacto', (req, res) => res.render('pages/contact-page'))
router.post('/contacto', (req, res) => {

    const { name, email, msg } = req.body
    
    transporter
        .sendMail({
            from: 'beacheandoplayas@gmail.com <beacheandoplayas@gmail.com>',
            to: 'beacheando@gmail.com',
            subject: 'Hey, ' + name,
            text: msg,
            html: `<b>${msg}</b>`
        })
        .then(info => res.send(info))
        .catch(error => console.log(error))
})

module.exports = router