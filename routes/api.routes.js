const express = require('express')
const router = express.Router()

const Beach = require('./../models/beach.model')

router.get('/beach/info/:id', (req, res) => {

    const { id } = req.params
   
    Beach
        .find({_id: id})
        .then(beach => res.json(beach))
        .catch(err => res.status(404).json({errorMessage: 'Beach not found'}))
})


module.exports = router