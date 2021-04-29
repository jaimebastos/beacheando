module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/beach', require('./beach.routes.js'))
    app.use('/user', require('./user.routes.js'))
    app.use('/admin', require('./admin.routes.js'))
    app.use('/api', require('./api.routes.js'))
    app.use('/comments', require('./comments.routes.js'))

}