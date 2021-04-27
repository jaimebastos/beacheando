module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/beach', require('./beach.routes.js'))
    app.use('/user', require('./user.routes.js'))
    app.use('/admin', require('./admin.routes.js'))
}