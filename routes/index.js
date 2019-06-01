const init = () => {
    const router = require('express').Router()
    // const uuid = require('uuid')

    const customerControllers = require('../controllers/customers')

    router.get('/', (req, res) => res.render('home'))

    router.get('/customers', (req, res) =>
        customerControllers.getAll()
            .then(response => res.render('customers/index', { customers: response.data }))
    )

    router.get('/customers/create', (req, res) => {
        res.render('customers/create')
    })
    router.post('/customers/create', (req, res) => {
        const customer = req.body
        customerControllers.create(customer)
        res.redirect('/customers')
    })

    router.get('/customers/update/:id', (req, res) => {
        customerControllers.getById(req.params.id)
            .then(response => res.render('customers/update', { customer: response.data }))
            .catch(err => res.send(`<p>Error: ${err}<p>`))
    })
    router.post('/customers/update/:id', (req, res) => {
        const customer = req.body
        customerControllers.update(customer)
            .then(response => res.redirect('/customers'))
            .catch(err => res.send(`<p>Error: ${err}<p>`))
    })

    router.get('/customers/delete/:id', (req, res) => {
        const id = req.params.id
        customerControllers.deleteById(id)
            .then(response => res.redirect('/customers'))
            .catch(err => res.send(`<p>Error: ${err}<p>`))
    })

    return router
}

module.exports = init
