const express = require('express')
const router = express.Router()

const Beach = require('./../models/beach.model')

// Endpoints
// router.get('/', (req, res) => res.render('pages/index'))

router.get('/', (req, res) => {

    Beach
        .find()
        .select("image name")
        .then(allImages => res.render('pages/index', { allImages }))
        .catch(err => console.log(err))
})

module.exports = router
