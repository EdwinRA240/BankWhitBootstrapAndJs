let users = [
    {
        id: 1,
        name: 'John',
        email: 'john@example.com',
        password: '123456',
        saldo: 220
    }, 
    {
        id: 2,
        name: 'Jane',
        email: 'jane@example.com',
        password: '123456',
        saldo: 180
    },
    {
        id: 3,
        name: 'Doe',
        email: 'doe@example.com',
        password: '123456',
        saldo: 640
    }
]

var jsonUsers = JSON.stringify(users)
localStorage.setItem('allUsers', users);

