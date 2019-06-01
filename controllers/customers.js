const urlBase = 'http://localhost:3003/'
const axios = require('axios').create({ baseURL: urlBase })

const getAll = () => axios.get(`/customers`)
const getById = id => axios.get(`/customers/${id}`)
const create = data => axios.post('/customers', data)
const update = data => axios.put('/customers', data)
const deleteById = id => axios.delete(`/customers/${id}`)

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
}