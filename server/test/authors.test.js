const { doesNotMatch } = require('assert');
const axios = require('axios') // blibioteca gerar requisições http
const crypto = require('crypto'); // blibioteca gerar strings
const authorsService = require('../service/authorsService');

// gera stribg aleatorias
const generate = () => crypto.randomBytes(20).toString('hex');

const request = (url, method, data) => axios({url, method, data});

test('should get authors', async () => {

    const author1 =  await authorsService.saveAuthor({name: generate(), picture: generate()});
    const author2 =  await authorsService.saveAuthor({name: generate(), picture: generate()});
    const author3 =  await authorsService.saveAuthor({name: generate(), picture: generate()});
    const response = await request('http://localhost:3000/authors','get');
    const authors = response.data;
    await authorsService.deleteAuthor(author1.id);
    await authorsService.deleteAuthor(author2.id);
    await authorsService.deleteAuthor(author3.id);
})

test('should save a author', async () => {
    const data =  { name: generate(), picture: generate() };
    const response = await request('http://localhost:3000/authors', 'post', data);
    const author = response.data;
    expect(author.name).toBe(data.name);
    expect(author.picture).toBe(data.picture);
    await authorsService.deleteAuthor(author.id);
})

test('should update a author', async () => {
    const author =  await authorsService.saveAuthor({name: generate(), picture: generate()});
    author.name = generate();
    author.picture = generate();
    await request(`http://localhost:3000/authors/${author.id}`, 'put', author);
    const updatedAuthor = await authorsService.getAuthor(author.id);
    expect(updatedAuthor.name).toBe(author.name);
    expect(updatedAuthor.picture).toBe(author.picture);
    await authorsService.deleteAuthor(author.id);
});

test('Should delete a author', async function () {
	const author = await authorsService.saveAuthor({ name: generate(), picture: generate() });
	await request(`http://localhost:3000/authors/${author.id}`, 'delete');
	const authors = await authorsService.getAuthors();
	expect(authors).toHaveLength(0);
});
