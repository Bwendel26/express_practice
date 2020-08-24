module.exports = (app, text) => {
    function save(req, res) {
        res.send('Product > save > ' + text);
    }

    function obtain(req, res) {
        res.send('Product > obtain > ' + text);
    }

    //registering the url
    app.post('/product', save);
    app.get('/product', obtain);

    return { save, obtain };
};