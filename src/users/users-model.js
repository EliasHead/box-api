const usersData = require('./users-data');
const { InvalidArgumentError } = require('../erros');
const utils = require('../utils');
const bcrypt = require('bcrypt');

class User {
    constructor(user) {
      this.id = user.id;
      this.name = user.name;
      this.email = user.email;
      this.password = user.password;
  
      this.valid();
    }
  
    async addUser() {
      if (await User.searchByEmail(this.email)) {
        throw new InvalidArgumentError('O usuário já existe!');
      }
  
      return usersData.addUser(this);
    }
  
    async addPassword(password){
      utils.campoStringNaoNulo(password, 'senha');
      utils.campoTamanhoMinimo(password, 'senha', 8);
      utils.campoTamanhoMaximo(password, 'senha', 64);
  
      this.passwordHash = await User.gerarSenhaHash(password);
    }
  
    valid() {
      utils.campoStringNaoNulo(this.name, 'nome');
      utils.campoStringNaoNulo(this.email, 'email');
    }
  
    async deleteUser() {
      return usersData.deleteUser(this);
    }
    
    static async searchById(id) {
      const user = await usersData.searchById(id);
      if (!user) {
        return null;
      }
      
      return new User(user);
    }
    
    static async searchByEmail(email) {
      const user = await usersData.searchByEmail(email);
      if (!user) {
        return null;
      }
      
      return new User(user);
    }
  
    static listUsers() {
      return usersData.listUsers();
    }
  
    static gerarSenhaHash(password) {
      const custoHash = 12;
      return bcrypt.hash(password, custoHash);
    }
  }
  
  module.exports = User;