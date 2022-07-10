const postsDao = require('./post-dao');
const validacoes = require('../utils');

class Post {
  constructor(post) {
    this.id = post.id;
    this.titulo = post.titulo;
    this.conteudo = post.conteudo;
    this.author_id = post.author_id;
    this.valida();
  }

  adiciona() {
    return postsDao.savePost(this);
  }

  valida() {
    validacoes.campoStringNaoNulo(this.titulo, 'título');
    validacoes.campoTamanhoMinimo(this.titulo, 'título', 5);

    validacoes.campoStringNaoNulo(this.conteudo, 'conteúdo');
    validacoes.campoTamanhoMaximo(this.conteudo, 'conteúdo', 140);
  }

  static lista() {
    return postsDao.getPosts();
  }
}

module.exports = Post;