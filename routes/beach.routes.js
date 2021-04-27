const express = require('express')
const router = express.Router()
const Beach = require('./../models/beach.model')
const mongoose = require('mongoose')
const { isLoggedIn, checkRoles } = require('./../middlewares')
const { isAdmin } = require('./../utils')
const { CDNupload } = require('./../config/file-upload.config')
const weather = require('openweather-apis');


// National list
router.get('/nacional', (req, res) => {

    Beach
        .find({ country: 'España' })
        .then(allNationalBeaches => res.render('pages/beach/show-national', { allNationalBeaches, isAdmin: isAdmin() }))
        .catch(err => console.log('Error!', err))



})
// International list
router.get('/internacional', (req, res) => {


    Beach
        .find({ country: { $ne: 'España' } })
        .then(allInternationalBeaches => res.render('pages/beach/show-international', { allInternationalBeaches, isAdmin: isAdmin() }))
        .catch(err => console.log('Error!', err))



})

// Beach info
router.get('/info/:id', (req, res) => {

    const { id } = req.params


    weather.setLang('sp');
    weather.setUnits('metric');
    // check http://openweathermap.org/appid#get for get the APPID
    weather.setAPPID("f11a4305732ef7912915f09e088cdbfd")


    Beach
        .findById(id)
        .then(selectedBeach => {

            //coordenadas de selectedBeach VS como espera las coords setCoordinate()
            let { latitude, longitude } = req.body
            console.log('-------------------------', req.body)

            const location = {
                type: 'Point',
                coordinates: [latitude, longitude]
            }

            weather.setCoordinate(location);
            weather.getTemperature(function (err, temp) { //.then()
                console.log(temp);
                res.render('pages/beach/details-beach', { selectedBeach })
            })




        })
        .catch(err => console.log('Error!', err))


})

// Beach form (get)
router.get('/crear', isLoggedIn, checkRoles('ADMIN'), (req, res) => res.render('pages/beach/create-beach'))

// Beach form (post)
router.post('/crear', CDNupload.single('image'), isLoggedIn, checkRoles('ADMIN'), (req, res) => {
    const { path } = req.file
    let { name, description, city, country, caption, image, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    // // title = capitalizeText(title)
    // // country = capitalizeText(country)

    Beach
        .create({ name, description, city, country, caption, image: path, location })
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

router.get('/editar/:id', isLoggedIn, checkRoles('ADMIN'), (req, res) => {

    const { id } = req.params

    Beach

        .findById(id)
        .then(beachInfo => res.render('pages/beach/edit-beach', beachInfo))
        .catch(err => console.log('Error!', err))
})

// Beach edit (post)

router.post('/editar/:id', isLoggedIn, checkRoles('ADMIN'), (req, res) => {

    const { id } = req.params
    const { name, description, city, country, caption, image, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Beach

        .findByIdAndUpdate(id, { name, description, city, country, caption, image, location })
        .then(beachInfo => res.redirect('/beach/nacional'))
        .catch(err => console.log('Error!', err))
})

// Eliminar beach


router.get('/delete/:id', (req, res) => {

    const beach_id = req.params.id

    Beach

        .findByIdAndRemove(beach_id)
        .then(() => res.redirect('/beach/nacional'))
        .catch(err => console.log('Error!', err))
})

module.exports = router