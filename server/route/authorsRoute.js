const express = require('express')
const router = express.Router() // criar um roteador
const authorsService = require('../service/authorsService') 


// Buscar dados
router.get('/authors', async (req, res) => {
    const authors = await authorsService.getAuthors();
    res.json(authors);
});

router.get('/authors/:id', async (req, res) => {});

// Inserir dados
router.post('/authors', async (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()
    
    db.push(body)
    return res.json(body)
});

router.put('/authors/:id', async (req, res) => {});
router.delete('/authors/:id', async (req, res) => {});

module.exports = router;