const express = require('express')
const router = express.Router()
const Beach = require('./../models/beach.model')
const mongoose = require('mongoose')


// National list
router.get('/nacional', (req, res) => {

    Beach
        .find({ country: 'España' })
        .then(allNationalBeaches => res.render('pages/beach/show-national', { allNationalBeaches }))
        .catch(err => console.log('Error!', err))



})
// International list
router.get('/internacional', (req, res) => {

    Beach
        .find({ country: { $ne: 'España' } })
        .then(allInternationalBeaches => res.render('pages/beach/show-international', { allInternationalBeaches }))
        .catch(err => console.log('Error!', err))



})

// Beach info
router.get('/info/:id', (req, res) => {

    const { id } = req.params

    Beach
        .findById(id)
        .then(selectedBeach => res.render('pages/beach/details-beach', { selectedBeach }))
        .catch(err => console.log('Error!', err))


})

// Beach form (get)
router.get('/crear', (req, res) => res.render('pages/beach/create-beach'))

// Beach form (post)
router.post('/crear', (req, res) => {

    let { name, description, city, country, caption, image, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    // // title = capitalizeText(title)
    // // country = capitalizeText(country)

    Beach
        .create({ name, description, city, country, caption, image, location })
        .then((createdBeach) => res.redirect('/'))
        .catch(err => {
            if (err instanceof mongoose.Error.ValidationError) {
                res.render('pages/beach/create-beach', { errorMessage: formatValidationError(err) })
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

        .findByIdAndUpdate(beach_id, { name, description, city, country, caption, image, location })
        .then(beachInfo => res.redirect('/beach/nacional'))
        .catch(err => console.log('Error!', err))
})


module.exports = router