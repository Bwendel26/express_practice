const express = require('express');
const app = express();

const greeting = require("./greetingMid");

app.use(greeting('Bruno'));

//middleware function
app.use('/', (req, res, next) => {
    console.log('Before...');
    next();
});
//reading data
app.post('/shape', (req, res) => {
    let shape = '';
    req.on('data', function(part) {
        shape += part;
    });

    res.on('end', function() {
        res.send(shape);
    });
});

app.get('/client/report', (req, res) => {
res.send(`Client report: complete: ${req.query.complete}, year = ${req.query.year}`);
    // http://localhost:3000/client/report?complete=true&year=2020
});

app.use('/client/:id', (req, res) => {
    res.send(`Client id: ${req.params.id}.`);
});

app.get('/', (req, res, next) => {
    console.log('during...')
    res.json({
        data: [
            {name: 'Bruno', age: 20},
            {name: 'Mia', age: 18},
            {name: 'Carlos', age: 21}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    });

    next();
});
//res.send('Im <b>fine!</b>')

app.use('/', (req, res) => {
    console.log('After...');
});

app.listen(3000, () => {
    console.log('Server running on port 3000...');
});