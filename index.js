const express = require('express');
const app = express();

//middleware function
app.use('/', (req, res, next) => {
    console.log('Before...');
    next();
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