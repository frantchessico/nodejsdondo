const express = require('express');

const app = express();
const port = 4200;

app.get('/', (request, response) => {
    response.send('Welcome back to home')
});

app.get('/about', (request, response) =>{
    return response.json({about: 'We are aaaaaaaaaaaaaaaaaa'})
});


app.get('/contact', (request, response) => {
    response.send('8383883833838')
})



app.listen(port, () => {
    console.log(`Server on port: ${port}`)
})