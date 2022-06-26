const express = require('express')
const router = express.Router() // criar um roteador
const authorsService = require('../service/authorsService') 


// Buscar dados
router.get('/authors', async (req, res) => {
    const authors = await authorsService.getAuthors();
    res.json(authors);
});

// Inserir dados
router.post('/authors', async (req, res) => {
    const author = req.body;
    const newAuthor = await authorsService.saveAuthor(author);
    res.json(newAuthor);
});

router.put('/authors/:id', async (req, res) => {
    const author = req.body;
    await authorsService.updateAuthor(req.params.id, author);
    res.end()
});

router.delete('/authors/:id', async (req, res) => {
    await authorsService.deleteAuthor(req.params.id);
    res.end();
});

module.exports = router;