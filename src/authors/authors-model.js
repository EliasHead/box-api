const authorsData = require('./authors-data');
const validacoes = require('../utils');

class Author {
  constructor(author) {
    this.id = author.id;
    this.name = author.name;
    this.picture = author.picture;
    this.valida();
  }

  adiciona() {
    return authorsData.saveAuthors(this);
  }

  valida() {
    validacoes.campoStringNaoNulo(this.name, 'name');
    validacoes.campoTamanhoMinimo(this.name, 'name', 3);

    validacoes.campoStringNaoNulo(this.picture, 'conteúdo');
    validacoes.campoTamanhoMaximo(this.picture, 'conteúdo', 140);
  }

  static lista() {
    return authorsData.getAuthors();
  }

  static async searchById(id) {
    const author = await authorsData.getAuthor(id);
    if (!author) {
      return null;
    }
    
    return new Author(author);
  }
  
  deleteAuthor() {
    return authorsData.deleteAuthor(this);
  }

  updateAuthor = (id, author) => {
    return authorsData.updateAuthor(id, author);
  }
}

module.exports = Author;