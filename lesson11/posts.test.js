const axios = require('axios');

describe('API tests for JSONPlaceholder', () => {

    test('Task 1: Retrieve a post by id', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const post = response.data;
        expect(response.status).toBe(200);
        expect(post).toHaveProperty('userId');
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('body');
    })


    test('Task 2: Create a new post', async () => {
        const postBody = { title: 'foo', body: 'bar', userId: 1, }
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postBody);
        const createdPost = response.data;
        expect(response.status).toBe(201);
        expect(createdPost.id).toBe(101);
    })


    test('Task 3: Update a post by PUT request', async () => {
        const updatedBody = { id: 1, title: 'foo', body: 'bar', userId: 1, };
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedBody);
        const updatedPost = response.data;
        expect(response.status).toBe(200);
        expect(updatedPost.title).toBe('foo');
        expect(updatedPost.body).toBe('bar');

    })

    test('Task 4: Delete a post', async () => {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
        expect(response.status).toBe(200);

    })

})