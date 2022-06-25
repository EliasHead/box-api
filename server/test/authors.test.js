const axios = require('axios')
const crypto = require('crypto');
const authorsService = require('../service/authorsService');


const generate = () => crypto.randomBytes(20).toString('hex');

test('should get users', async function (){

    const author1 =  await authorsService.saveAuthor({name: generate(), picture: generate()});
    const author2 =  await authorsService.saveAuthor({name: generate(), picture: generate()});
    const author3 =  await authorsService.saveAuthor({name: generate(), picture: generate()});

    const response = await axios({
        url: 'http://localhost:3000/authors',
        method: 'get'
    });
    const authors = response.data;

    await authorsService.deleteAuthor(author1.id);
    await authorsService.deleteAuthor(author2.id);
    await authorsService.deleteAuthor(author3.id);
})