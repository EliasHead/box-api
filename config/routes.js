const express = require('express')
const routes = express.Router()

// data base
let db = [
    {'1': { Nome: 'Elias', Idade: '20'}},
    {'2': { Nome: 'Erick', Idade: '25'}},
    {'3': { Nome: 'Rafael', Idade: '30'}}
]

// Buscar dados
routes.get('/users', (req, res) => {
    return res.json({db})
});

// Inserir dados
routes.post('/users', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()
    
    db.push(body)
    return res.json(body)
});

module.exports = routes