const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'beacheandoplayas@gmail.com',
        pass: 'beach123!'
    }
})

module.exports = transporter