const axios = require('axios')
test('should get users', async function (){
    const response = await axios({
        url: 'http://localhost:3000/authors',
        method: 'get'
    });
    const authors = response.data;
    const [fisrtAuthor] = authors;
    expect(fisrtAuthor.id).toBe(1)
    expect(fisrtAuthor.name).toBe('Elias Costa')
})