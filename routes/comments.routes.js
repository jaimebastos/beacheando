const express = require('express')
const Beach = require('../models/beach.model')
const router = express.Router()
const { isLoggedIn } = require('./../middlewares')
const Comment = require('./../models/comment.model')


// Comments (post)
router.post('/:beach_id', isLoggedIn, (req, res) => {

    // const { id } = req.body
    const { name, text} = req.body
    const {beach_id} = req.params
    
    console.log('-----', beach_id)
    
    Comment
        .create({ name, text })
        .then((createdComment) => Beach.findByIdAndUpdate(beach_id, {$push: {comments: createdComment._id}}))
        .then(comments => res.redirect(`/beach/info/${beach_id}`))
        .catch(err => console.log('Error!', err))

})
module.exports = router