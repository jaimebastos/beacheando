const express = require('express')
const router = express.Router()
const Beach = require('./../models/beach.model')


// National list
router.get('/nacional', (req, res) => {

    let { country } = req.body
    console.log({ country })

    Beach
        .find()
        .then(allNationalBeaches => res.render('pages/beach/show-national', { allNationalBeaches }))
        .catch(err => console.log('Error!', err))

    // if (country == 'España') {
    //     Beach
    //         .find()
    //         .then(allNationalBeaches => res.render('pages/beach/show-national', { allNationalBeaches }))
    //         .catch(err => console.log('Error!', err))
    //     console.log('SACAR PLAYAS NACIONALE', allNationalBeaches)
    // }
    // else {
    //     next()
    // }


})

// Beach form (get)
router.get('/crear', (req, res) => res.render('pages/beach/create-beach'))

// Beach form (post)
router.post('/crear', (req, res) => {

    let { } = req.body

    title = capitalizeText(title)

    Beach
        .create({})
        .then(() => res.redirect('/libros?msg=Libro creado correctamente'))
        .catch(err => {
            if (err instanceof mongoose.Error.ValidationError) {
                res.render('pages/books/new-book-form', { errorMessage: formatValidationError(err) })
            } else {
                next()
            }
        })
})


module.exports = router