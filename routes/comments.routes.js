const express = require('express')
const Beach = require('../models/beach.model')
const router = express.Router()
const { isLoggedIn } = require('./../middlewares')
const Comment = require('./../models/comment.model')


// Comments (post)
router.post('/', isLoggedIn, (req, res) => {

    const { id } = req.body
    const { name, text } = req.body
    console.log('HOLAAAAAAAAAAAAAAAAAAA', id)

    Comment
        .create({ name, text })
        .then((createdComment) => {
            //$push: 
            Beach
                .findByIdAndUpdate(id)
                Beach.comments.push(createdComment._id)
            res.redirect('/beach/nacional')
        })
        .catch(err => console.log('Error!', err))
})

module.exports = router