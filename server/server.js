const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');
const app = express();

app.use(express.json());
app.use('/', express.static('./public'));
app.use('/api/cart', cartRouter);

app.get('/api/top_products', (req, res) => {
    fs.readFile('./server/db/top_products.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});

app.get('/api/laptops', (req, res) => {
    fs.readFile('./server/db/laptops.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});

app.get('/api/computers', (req, res) => {
    fs.readFile('./server/db/computers.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});
app.get('/api/phones', (req, res) => {
    fs.readFile('./server/db/phones.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});
app.get('/api/watches', (req, res) => {
    fs.readFile('./server/db/watches.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});
app.get('/api/accessoires', (req, res) => {
    fs.readFile('./server/db/accessoires.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});

const port = 5500;

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});