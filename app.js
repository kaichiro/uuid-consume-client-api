const init = () => {
    const express = require('express')
    const app = express()
    const bodyParser = require('body-parser')
    const path = require('path')

    const routes = require('./routes/index')

    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'ejs')

    // app.use(express.static('public'))
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use(routes())

    return app
}

module.exports = init
