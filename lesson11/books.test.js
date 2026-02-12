const axios = require('axios');


describe('API tests for bookstore', () => {
    let generatedToken;
    let userId;

    beforeAll(async () => {
        const randomNum = Math.floor(Math.random() * 100000); 
        const user = { userName: `testuser${randomNum}`, password: 'A9b!Kx@2' };
        const newUserResponse = await axios.post('https://bookstore.toolsqa.com/Account/v1/User', user);
        userId = newUserResponse.data.userID;

        const tokenResponse = await axios.post('https://bookstore.toolsqa.com/Account/v1/GenerateToken', user);
        generatedToken = tokenResponse.data.token;

    }, 15000);

    test('Task 1: Retrieve a book by ID', async () => {
        const response = await axios.get('https://bookstore.toolsqa.com/BookStore/v1/Book?ISBN=9781449337711');
        const book = response.data;
        expect(response.status).toBe(200);

        expect(book).toMatchObject({
            isbn: '9781449337711',
            title: expect.any(String),
            subTitle: expect.any(String),
            author: expect.any(String),
            publish_date: expect.any(String),
            publisher: expect.any(String),
            pages: expect.any(Number),
            description: expect.any(String),
            website: expect.any(String)
        })
    })

    test('Task 2: Add a new book', async () => {
        const newBook = {
            'userId': userId,
            'collectionOfIsbns': [
                {
                    'isbn': '9781449325862',
                }
            ]
        }
        const response = await axios.post(
            'https://bookstore.toolsqa.com/BookStore/v1/Books',
            newBook,
            {
                headers: {
                    'Authorization': `Bearer ${generatedToken}`,
                    'Content-Type': 'application/json'
                }
            });
        const addedBook = response.data.books;
        expect(response.status).toBe(201);
        expect(addedBook).toEqual(
            expect.arrayContaining([{ isbn: '9781449325862' }])
        );
    })


    test('Task 3: Request to update a book', async () => {
        const updatedBook = {
            'userId': userId,
            'isbn': '9781491950296'
        }
        const response = await axios.put(
            'https://bookstore.toolsqa.com/BookStore/v1/Books/9781449325862',
            updatedBook,
            {
                headers: {
                    'Authorization': `Bearer ${generatedToken}`,
                    'Content-Type': 'application/json'
                }
            });

       
        expect(response.status).toBe(200);
        expect(response.data.books.map(b => b.isbn)).toContain('9781491950296');

    })


    test('Task 4: Delete a book', async () => {
        const response = await axios.delete('https://bookstore.toolsqa.com/BookStore/v1/Book',
            {
                headers: {
                    'Authorization': `Bearer ${generatedToken}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    userId: userId,
                    isbn: '9781491950296'
                }
            }
        );
        expect(response.status).toBe(204);
    })
})