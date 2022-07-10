const Author = require('./authors-model');
const { InvalidArgumentError, InternalServerError } = require('../erros');

module.exports = {
  adiciona: async (req, res) => {
    try {
      const author = new Author(req.body);
      await author.adiciona();
      
      res.status(201).send(author);
    } catch (erro) {
      if (erro instanceof InvalidArgumentError) {
        res.status(422).json({ erro: erro.message });
      } else if (erro instanceof InternalServerError) {
        res.status(500).json({ erro: erro.message });
      } else {
        res.status(500).json({ erro: erro.message });
      }
    }
  },

  lista: async (req, res) => {
    try {
      const authors = await Author.lista();
      res.send(authors);
    } catch (erro) {
      return res.status(500).json({ erro: erro });
    }
  },

  delete: async (req, res) => {
    const author = await Author.searchById(req.params.id);
    
    try {
        await author.deleteAuthor();
        res.status(200).send();
    } catch (erro) {
        res.status(500).json({erro: erro});
    }
  },

  update: async (req, res) => {
    const author = await Author.searchById(req.params.id);
    if(author) {
      authorParam = req.body
    }
    try {
        await author.updateAuthor(req.params.id, authorParam);
        res.status(200).send();
    } catch (erro) {
        res.status(500).json({erro: erro});
    }
  }

};