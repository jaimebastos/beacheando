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


// Beach edit (get)

router.get('/editar', (req, res) => {

    const { beach_id } = req.query

    Beach

        .findById(beach_id)
        .then(beachInfo => res.render('pages/beach/edit-beach', beachInfo))
        .catch(err => console.log('Error!', err))
})

// Beach edit (post)

router.post('/editar', (req, res) => {

    const { beach_id } = req.query
    const { name, description, city, country, caption, image, latitude, longitude } = req.body  

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Beach

        .findByIdAndUpdate(beach_id , {name, description, city, country, caption, image, location }) 
        .then(beachInfo => res.redirect('/beach/nacional'))
        .catch(err => console.log('Error!', err))
})

// Eliminar beach


router.get('/delete/:id', (req, res) => { 

    const beach_id  = req.params.id

    Beach

        .findByIdAndRemove(beach_id)
        .then(() => res.redirect('/beach/nacional'))
        .catch(err => console.log('Error!', err))
})

module.exports = router