const express = require('express')
const router = express.Router()

const Beach = require('./../models/beach.model')

// http://localhost:3000/api/beach/nacional


router.get('/beach/info/:id', (req, res) => {
    //console.log(req.params.id)

    const { id } = req.params

//    console.log('Aquiiiiii ====>', id)
   
    Beach
        .find({_id: id})
        .then(beach => res.json(beach))
        .catch(err => console.log('soy un error DE SERVIDOR y salgo por la terminal!', err))
})


module.exports = router