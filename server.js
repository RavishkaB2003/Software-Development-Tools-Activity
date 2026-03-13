const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post('/submit', (req, res) => {
    
    res.redirect(`/hello/${req.body.name}`);
});


app.get('/hello/:name', (req, res) => {
    res.send(`<h1>Hello, ${req.params.name}!</h1><a href="/">Go Back</a>`);
});

app.listen(3000, () => console.log('Server running on port 3000'));